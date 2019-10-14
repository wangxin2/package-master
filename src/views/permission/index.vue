<template>
    <el-container class="container">
        <el-form :inline="true" :model="queryForm" size="small">
            <el-form-item>
                <el-input v-model="queryForm.title" placeholder="权限名称" clearable></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="queryData">查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="clearData">清除</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="addPer">新增</el-button>
            </el-form-item>
        </el-form>
        <!-- 子系统列表 -->
        <div class="appcontainer">
            <div class="title">
            <span>子系统：</span>
            </div>
            <div class="app-list" :class="showMoreApp == true?'showMore':'' ">
                <el-radio-group v-model="radio"  size="mini" @change="changeApp(item)" v-for="(item, index) in Tagname" :key="index" >
                    <el-radio-button :label="item.name" size="mini" :title="item.name"  ></el-radio-button>
                </el-radio-group>
            </div>
            <div class="more-btn">
                <el-button type="primary" size="mini" @click="showMore()">{{btnName}}</el-button>
            </div>
        </div>
        <!-- <div class="radio-wrap">
            <el-radio-group  v-model="radio" v-for="(item,index) in Tagname" :key="index" size="small" @change="changeApp(item)">
                <el-radio :label="item.name" size="mini" border></el-radio>
            </el-radio-group>
        </div> -->
        <el-main>
            <el-table 
            :data="tableData"
            ref="table"
            v-loading="listLoading" 
            row-key="id" 
            :load="loadNode" 
            lazy 
            :tree-props="{children: 'childrens', hasChildren: 'hasChildren'}"
            class="table"
            >
                <el-table-column prop="title" label="名称"></el-table-column>
                <el-table-column prop="permValue" label="权限标识符" ></el-table-column>
                <el-table-column prop="uri" label="菜单地址"></el-table-column>
                <el-table-column label="类型">
                    <template slot-scope="scope">
                        <gm-dic-span type="权限类型" :binddata="scope.row.type + ''" :data="dicData"></gm-dic-span>
                    </template>
                </el-table-column>
                <el-table-column prop="description" label="描述"></el-table-column>
                <el-table-column prop="orders" label="排序" width="120"></el-table-column>
                <el-table-column fixed="right" width="220" label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" @click="updatePer(scope.$index, scope.row)" title="修改"><i class="el-icon-edit"></i></el-button>
                        <el-button type="text" @click="deletePer(scope.$index, scope.row)" title="删除"><i class="el-icon-delete"></i></el-button>
                        <el-button type="text" @click="addChildPer(scope.$index, scope.row)" title="添加下级权限"><i class="el-icon-share"></i></el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>
        <!-- 新增/修改子系统 弹窗 -->
        <add-Per :ipconfig="ipconfig" :dicArr="dicData" :showAddPer="showAddPer" :radio="radio" :perDetail="perDetail" ref="per" :queryFromFather="query"></add-Per>
</el-container>
       
    
</template>

<script>
import gmPagination from '../../components/gmPagination'
import gmDicSpan from '../../components/gmDicSpan'
import permissionService from '../../api/permission-service.js'
import dictionaryService from '../../api/dictionary-service.js'
import appSrervice from '../../api/app-service.js'
import addPer from '../../modal/permission/addpermission'
import GM from '../../utils/common.js'
import { log } from 'util';
export default {
    name: 'permission',
    components: {
        gmPagination,
        gmDicSpan,
        addPer
    },
    props: {
        dicData: Array,
        ipconfig: Object
    },
    data() {
        return {
            // 分页条配置
            pagination: {},
            // 标签
            Tagname: [],
            radio: '',
            btnName: '更多',
            showMoreApp: false,
            firstID: '',
            fisrtTitle: '',
            // 表格
            tableData: [],
            // 加载...
            listLoading: false,
            appLoading: false,
            // 查询条件
            queryForm: {},
            // 新增弹窗
            showAddPer: {
                isShow: false
            },
            // 新增详情
            perDetail:{},
        }
    },
    mounted() {
        let _this = this;
        //初始化 获取子系统信息
        _this.getApp();
    },
    methods: {
        //获取子系统列表
        getApp () {
            this.appLoading = true;
            appSrervice.getAppList(this.ipconfig.UUMS_SERVER, {size: 100}).then((res) => {
                let appData = res.data.records;
                //存储子系统数据
                let arr = [];
                //遍历数组的index和值
                for (let [index, item] of appData.entries()) {
                    if (index == 0) {
                        this.radio = item.title;
                        this.fisrtTitle = item.title;
                    }
                    arr[index] = {};
                    arr[index].name = item.title;
                    arr[index].id = item.id;
                    //console.log(arr);
                }
                //ES6拷贝数组 给标签
                [...this.Tagname] = arr;
                this.firstID = arr[0].id;
                this.queryForm = {
                    appId: arr[0].id
                };
                this.appLoading = false;
                //查询权限
                this.query();
            });
        },
        //子系统切换
        changeApp (item) {
            console.log('item', item);
            this.queryForm = {
                appId: item.id
            };
            this.query();
        },
        // 更多按钮事件
        showMore() {
            this.showMoreApp = !this.showMoreApp;
            if (this.showMoreApp == false) {
                this.btnName = '更多'
            } else {
                this.btnName = '收起'
            }
        },
        // 查询权限列表
        query () {
            this.listLoading = true;
            permissionService.getList(this.ipconfig.UUMS_SERVER, this.queryForm).then((res) => {
                // 如果数据存在
                if (res.data && res.data.length > 0) {
                    for (let item of res.data) {
                        // 权限类型
                        item.type = item.type + ''
                    }
                    // 赋值给表格
                    this.tableData = res.data
                } else {
                    // 数据不存在,也要赋值空数组
                    this.tableData = []
                }
                this.listLoading = false
            }, (error) => {
                // this.listLoading = false;
                this.$message.error(error.message);
            });
        },
        // 树形表格 子数据的加载
        loadNode (tree, treeNode, resolve) {
            resolve(tree.childrens);
        },
        //查询按钮
        queryData () {
            //this.query();
            this.listLoading = true;
            permissionService.getList(this.ipconfig.UUMS_SERVER, this.queryForm).then((res) => {
                //模糊查询结果
                var result = dictionaryService.getArrayByName(res.data, this.queryForm.title, 'title', null);
                //console.log('result:', result);
                this.tableData = GM.CommonOper.hasChildren('childrens', result);        
                this.listLoading = false;
            }, (error) => {
                this.$message.error(error.message);
            });
        },
        //清除按钮
        clearData () {
            //默认查询第一个子系统
            this.queryForm = {
                appId: this.firstID
            }
            this.radio = this.fisrtTitle;
            this.query();          
        },
        //新增权限
        addPer () {
            //新增时传入appid
            this.perDetail = {
                appId: this.queryForm.appId
            };
            this.showAddPer.isShow = true;
            this.showAddPer.title = '新增权限'
            // 上级权限为空
            this.showAddPer.parentPer = null;
            this.$nextTick(function () {
                this.$refs.per.loadDialogData();
            });
        },
        //更新权限
        updatePer (index, row) {
            this.showAddPer.isShow = true;
            this.showAddPer.title = '修改权限'
            //如果该节点为根节点 上级权限为空
            if (row.pid == null) {
                this.showAddPer.parentPer = null;
            } else {
                //否则 找到该节点的父节点，获取父节点的名称
                let pnode = dictionaryService.getNodeItem(this.tableData, row);
                // console.log('父节点', pnode);
                this.showAddPer.parentPer = pnode.title;
            }

            this.$nextTick(function () {
                this.perDetail = Object.assign({}, row)
				this.perDetail.type = row.type + '' 
        	})
            // console.log(row)
            // this.perDetail = {};
            // this.perDetail = Object.assign({}, row);
            // this.perDetail.type = row.type
            //删除对象的属性
            delete this.perDetail.childrens;
        },
        //删除权限
        deletePer (index, row) {
            //console.log(item);
            this.$confirm('确认删除吗？', '提示', {}).then(() => {
                let params = {permissionId: row.id};
                //
                permissionService.deletePermission(this.ipconfig.UUMS_SERVER, params).then((res) => {
                    this.listLoading = false;
                    this.$message({
                        message: '删除成功',
                        type: 'success'
                    });
                    this.query();
                }, (error) => {
                    this.$message.error(error.message);
                    this.listLoading = false;
                });
            });
        },
        //添加下级字典
        addChildPer (index, row) {
            this.showAddPer.parentPer = row.title;
            //添加下级时需传入 pid和appid
            this.perDetail = {
                pid: row.id,
                appId: this.queryForm.appId
            };
            this.showAddPer.isShow = true;
            this.showAddPer.title = '添加下级权限'
            this.$nextTick(function () {
                this.$refs.per.loadDialogData();
            });
        }
    }
}
</script>
<style lang="less" scoped>
.appcontainer {
    position: relative;
    line-height: 34px;
    // 子系统:
    .title {
        float: left;
        width: 95px;
        overflow: hidden;
        font-size: 14px;
        text-align: left;
    }
    // app列表
    .app-list {
        width: 815px;
        margin-left: 100px;
        // padding-right: 130px;
        padding-left: 10px;
        overflow: hidden;
        height: 70px;
        .el-radio-group {
            // height: 70px;
            // overflow-y: auto;
            .el-radio-button{
                // 标题过长进行隐藏
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                // 内部的span
               /deep/.el-radio-button__inner {
                    width: 150px;
                    border: none;
                    height: 35px;
                    padding: 10px 15px;
                }
            }   
        }
    }
    // 更多按钮
    .more-btn {
        position: absolute;
        top: .5rem;
        left: 950px;
        height: auto;
        line-height: 22px;
        overflow: hidden;
        zoom: 1;
    }
    // 点击更多 展开滚动条
    .showMore {
        overflow: auto
    }
}
</style>