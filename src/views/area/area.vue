<template>
    <el-container class="container">
        <el-form :inline="true" :model="areaFilters" size="small">
            <el-form-item>
                <el-input v-model="areaFilters.areaName" placeholder="区域名称"></el-input>
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
            <el-form-item>
                <el-button type="primary" @click="upload">导入</el-button>						
            </el-form-item>
        </el-form>
        <el-main>
            <el-table 
			:data="areaTable" 
			v-loading="listLoading"
			row-key="id" 
			:load="loadNode" 
			lazy
            :tree-props="{children: 'childrens', hasChildren: 'hasChildren'}"
            class="table"
			>
				<el-table-column prop="title" label="区域名称" ></el-table-column>
				<el-table-column prop="abbreviation" label="简称" ></el-table-column>
				<el-table-column prop="code" label="区域编码" ></el-table-column>
				<el-table-column label="区域类型" >
					<template slot-scope="scope">
						<gm-dic-span type="区域类型" :data="dicData" :binddata="scope.row.areaType"></gm-dic-span>
					</template>
				</el-table-column>
				<el-table-column prop="alias" label="别名" ></el-table-column>
				<el-table-column prop="orders" label="排序" width="120"></el-table-column>
				<el-table-column label="操作" fixed="right" width="220">
					<template slot-scope="scope">
                        <el-button type="text" @click="modify(scope.$index, scope.row)" title="修改"><i class="el-icon-edit"></i></el-button>
                        <el-button type="text" @click="deleteRow(scope.$index, scope.row)" title="删除"><i class="el-icon-delete"></i></el-button>
						<el-button type="text" @click="addChild(scope.$index, scope.row)" title="添加下级区域"><i class="el-icon-share"></i></el-button>
					</template>
				</el-table-column>
			</el-table>
        </el-main>
        <add-area :ipconfig="ipconfig" :dicData="dicData" :devAreaModal="devAreaModal" :parentItem="parentItem" :isUpdata="isUpdata" ref="area"></add-area>
	<upload-file :ipconfig="ipconfig" :dicData="dicData" :devUploadModal="devUploadModal" ref="upload"></upload-file>
    </el-container>
    
</template>
<script>
import gmTreeSelect from '../../components/gmTreeSelect'
import gmPagination from '../../components/gmPagination'
import gmDicSpan from '../../components/gmDicSpan'
// 
import areaService from '../../api/area-service';
import dictionaryService from '../../api/dictionary-service';
import addArea from '../../modal/area/add-area.vue';
import uploadFile from '../../modal/area/upload-file.vue';
export default {
    name: 'AreaManager',
    components: { // 注入组件
        addArea,
        uploadFile,
        gmTreeSelect,
        gmDicSpan,
        gmPagination
    },
    props: {
		dicData: Array,
		ipconfig: Object
    },
    data () {
        return {
            // 条件查询
            areaFilters: {},
            // 设备列表
            areaTable: [],
            // 等待条
            listLoading: false,
            // 弹出框
            devAreaModal: {},
            devUploadModal: {},
            parentItem: {},
            isUpdata: false
        }
    },
    mounted () {
        let _this = this;
        areaService.init(_this);
        // 第一次查询数据
        _this.query();
    },
    methods: {
        // 查询设备数据
        query () {
            this.listLoading = true
            // 查询请求
            areaService.query(this.ipconfig.UUMS_SERVER, this.areaFilters).then((res) => {
                if (res && res.success) {
                    this.areaTable = res.data
                    // this.areaTable = GM.CommonOper.hasChildren('childrens', res.data);
                    this.listLoading = false
                }
            }, (error) => {
                this.$message.error(error.message)
            });
        },
        loadNode (tree, treeNode, resolve) {
            resolve(tree.childrens)
        },
        // 条件查询
        queryData () {
            this.listLoading = true
            areaService.query(this.ipconfig.UUMS_SERVER, this.areaFilters).then((res) => {
                // 模糊查询结果
                var result = dictionaryService.getArrayByName(res.data, this.areaFilters.areaName, 'title', null)
                this.areaTable = GM.CommonOper.hasChildren('childrens', result)       
                this.listLoading = false
            }, (error) => {
                this.$message.error(error.message)
            });
        },
        // 清空查询条件
        clear () {
            // 初始化查询条件和分页
            this.areaFilters = {}
            this.query();
        },
        // 删除行
        deleteRow (index, row) {
            this.$confirm('确认删除吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                areaService.remove(this.ipconfig.UUMS_SERVER, {
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
        	this.parentItem = row;
        	this.isUpdata = false;
            this.devAreaModal.isShow = true;
            this.devAreaModal.title = '添加下级区域'    
            // 添加下级的时候上级区域就是自己
            this.devAreaModal.parentAera = row.title;
        	this.$nextTick(function () {
        	    this.$refs.area.loadDialogData();
        	});
        },
        // 修改
        modify (index, row) {
            this.devAreaModal.isShow = true;
            this.devAreaModal.title = '修改区域信息';                      
        	this.parentItem = row;
            this.isUpdata = true;
            //如果该节点为根节点 上级区域为空
            if (row.pid == null) {
                this.devAreaModal.parentAera = null;
            } else {
                //否则 找到该节点的父节点，获取父节点的名称
                let pnode = dictionaryService.getNodeItem(this.areaTable, row);
                // console.log('父节点', pnode);
                this.devAreaModal.parentAera = pnode.title;
            }  
        	this.$nextTick(function () {
        	    this.$refs.area.loadDialogData();
        	});
        },
        // 新增节点
        addNew () {
        	this.parentItem = {};
        	this.isUpdata = false;
            this.devAreaModal.isShow = true;
            this.devAreaModal.title = '新增区域';
            // 新增时上级区域为空
            this.devAreaModal.parentAera = null;
            this.$nextTick(function () {
        	    this.$refs.area.loadDialogData();
        	});
        },
        // 导入
        upload () {
            this.devUploadModal.isShow = true;
            this.$nextTick(function () {
        	    this.$refs.upload.loadDialogData();
        	});
        }
    }
}
</script>