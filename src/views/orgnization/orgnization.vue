<template>
<el-container class="container">
        <el-form :inline="true" :model="orgFilters" size="small">
            <el-form-item>
                <el-input v-model="orgFilters.orgnizationName" placeholder="机构名称"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="queryData">查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="clear">清除</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="addNew">新增</el-button>						
            </el-form-item>
        </el-form>
        <el-main>
            <el-table 
                :data="orgTable" 
                v-loading="listLoading"
                style="width: 100%"
                row-key="id" 
                :load="loadNode" 
                lazy
                :tree-props="{children: 'childrens', hasChildren: 'hasChildren'}"
                class="table"
                >
                <el-table-column prop="name" label="机构名称" show-overflow-tooltip></el-table-column>
                <el-table-column prop="areaName" label="归属区域" show-overflow-tooltip></el-table-column>
                <el-table-column prop="code" label="机构编码" ></el-table-column>
                <el-table-column label="机构类型" >
                    <template slot-scope="scope">
                        <gm-dic-span type="机构类型" :binddata="scope.row.type" :data="dicData"></gm-dic-span>
                    </template>
                </el-table-column>
                <el-table-column label="机构级别" width="180">
                    <template slot-scope="scope">
                        <gm-dic-span type="区域类型" :binddata="scope.row.grade" :data="dicData"></gm-dic-span>
                    </template>
                </el-table-column>
                <el-table-column label="操作" fixed="right" width="220">
                    <template slot-scope="scope">
                        <el-button type="text" @click="modify(scope.$index, scope.row)" title="修改"><i class="el-icon-edit"></i></el-button>
                        <el-button type="text" @click="deleteRow(scope.$index, scope.row)" title="删除"><i class="el-icon-delete"></i></el-button>
                        <el-button type="text" @click="addChild(scope.$index, scope.row)" title="添加下级机构"><i class="el-icon-share"></i></el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>
	    <add-org :ipconfig="ipconfig" :dicArr="dicData" :devOrgModal="devOrgModal" :parentItem="parentItem" :isUpdata="isUpdata" ref="Org"></add-org>
    </el-container>
</template>

<script>
import orgizationService from '../../api/orgization-service';
import dictionaryService from '../../api/dictionary-service';

import addOrg from '../../modal/orgnization/add-orgnization.vue';
import gmTreeSelect from '../../components/gmTreeSelect'
import gmPagination from '../../components/gmPagination'
import gmDicSpan from '../../components/gmDicSpan'
export default {
    name: 'orgization',
	components: { // 注入组件
		gmTreeSelect,
		gmDicSpan,
		gmPagination,
        addOrg
    },
    props: {
		dicData: Array,
		ipconfig: Object
    },
    data () {
        return {
            // 条件查询
            orgFilters: {},
            // 设备列表
            orgTable: [],
            // 等待条
            listLoading: false,
            // 弹出框
            devOrgModal: {},
            // 选中的item
            parentItem: {},
            // 是否为修改
            isUpdata: false
        }
    },
    mounted () {
        let _this = this
        orgizationService.init(_this)
        // 第一次查询数据
        _this.query()
        console.log('dicData', this.dicData)
    },
    methods: {
        // 查询机构数据
        query () {
            this.listLoading = true
            // 查询请求
            orgizationService.query(this.ipconfig.UUMS_SERVER, this.orgFilters).then((res) => {
                if (res && res.success) {
                    this.orgTable = res.data
                    // this.orgTable = GM.CommonOper.hasChildren('childrens', res.data);
                    this.listLoading = false;
                }
            }, (error) => {
                this.$message.error(error.message);
            });
        },
        loadNode (tree, treeNode, resolve) {
            resolve(tree.childrens);
        },
        // 条件查询
        queryData () {
            this.listLoading = true;
            orgizationService.query(this.ipconfig.UUMS_SERVER, this.orgFilters).then((res) => {
                // 模糊查询结果
                var result = dictionaryService.getArrayByName(res.data, this.orgFilters.orgnizationName, 'name', null);
                this.orgTable = GM.CommonOper.hasChildren('childrens', result);        
                this.listLoading = false;
            }, (error) => {
                this.$message.error(error.message);
            });
        },
        // 清空查询条件
        clear () {
            // 初始化查询条件和分页
            this.orgFilters = {}
            this.query();
        },
        // 删除行
        deleteRow (index, row) {
            this.$confirm('确认删除吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                orgizationService.remove(this.ipconfig.UUMS_SERVER, {
                    id: row.id
                }).then((response) => {
                    this.query();
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }, (error)  => {
                    this.$message.error(error.message);
                });
            });
        },
        // 添加下级
        addChild (index, row) {
            this.parentItem = row
            this.isUpdata = false
            this.devOrgModal.isShow = true
            this.devOrgModal.title = '添加下级机构'
            // 添加下级的时候上级机构就是自己
            this.devOrgModal.parentOrg = row.name;
            this.$nextTick(function () {
                this.$refs.Org.loadDialogData()
        	});
        },
        // 修改
        modify (index, row) {
            this.devOrgModal.isShow = true
            this.devOrgModal.title = '修改机构信息'
            //如果该节点为根节点 上级机构为空
            if (row.pid == null) {
                this.devOrgModal.parentOrg = null;
            } else {
                //否则 找到该节点的父节点，获取父节点的名称
                let pnode = dictionaryService.getNodeItem(this.orgTable, row);
                // console.log('父节点', pnode);
                this.devOrgModal.parentOrg = pnode.name;
            }  
        	this.parentItem = row
    		this.isUpdata = true
        	this.$nextTick(function () {
        	    this.$refs.Org.loadDialogData();
        	});
        },
        // 新增节点
        addNew () {
        	this.parentItem = {}
        	this.isUpdata = false
            this.devOrgModal.isShow = true
            this.devOrgModal.title = '新增顶级机构'
            // 上级机构为空
            this.devOrgModal.parentOrg = null;
            this.$nextTick(function () {
        	    this.$refs.Org.loadDialogData();
        	});
        }
    }
}
</script>

