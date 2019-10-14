<template>
  <!-- <span>字典配置</span> -->
    <el-container class="container">
        <el-form :inline="true" size="small">
            <el-form-item>
            <el-input v-model="queryForm.label" placeholder="字典名称"></el-input>
            </el-form-item>
            <el-form-item>
            <el-button type="primary" @click="queryData">查询</el-button>
            </el-form-item>
            <el-form-item>
            <el-button type="primary" @click="clearData">清除</el-button>
            </el-form-item>
            <el-form-item>
            <el-button type="primary" @click="addDic">新增</el-button>
            </el-form-item>
            <el-form-item>
            <el-button type="primary" @click="publics()">同步</el-button>
            </el-form-item>
            <el-form-item>
            <el-button type="primary" @click="publics('all')">同步所有</el-button>
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
          <el-radio-group v-model="radio" v-for="(item,index) in Tagname" :key="index" size="mini"
            @change="changeApp(item)">
            <el-radio :label="item.name" size="mini" border></el-radio>
          </el-radio-group>
         </div> -->
         <el-main>
             <el-table
                :data="tableData"
                style="width: 100%"
                v-loading="listLoading"
                row-key="id"
                :load="loadNode"
                lazy
                :tree-props="{children: 'childrens', hasChildren: 'hasChildren'}"
                class="table"
                >
                <el-table-column prop="label" label="名称" ></el-table-column>
                <el-table-column prop="value" label="代码" ></el-table-column>
                <el-table-column prop="type" label="类型"></el-table-column>
                <el-table-column prop="description" label="描述"></el-table-column>
                <el-table-column fixed="right" label="操作" width="220">
                    <template slot-scope="scope">
                    <el-button type="text" @click="updateDic(scope.$index, scope.row)" title="修改">
                        <i class="el-icon-edit"></i>
                    </el-button>
                    <el-button type="text" @click="deleteDic(scope.$index, scope.row)" title="删除">
                        <i class="el-icon-delete"></i>
                    </el-button>
                    <el-button type="text" @click="addChildDic(scope.$index, scope.row)" title="添加下级字典">
                        <i class="el-icon-share"></i>
                    </el-button>
                    </template>
                </el-table-column>
            </el-table>
         </el-main>
         <!-- 新增/修改/添加下级 弹窗 -->
         <add-Dic :ipconfig="ipconfig" :dicArr="dicData" :showAddDic="showAddDic" :DicDetail="DicDetail" :radio="radio" ref="DicModel"></add-Dic>
    </el-container>
</template>

<script>
import gmPagination from '../../components/gmPagination.vue'
import dictionaryService from '../../api/dictionary-service.js'
import appSrervice from '../../api/app-service.js'
import addDic from '../../modal/dictionary/addDic.vue'
export default {
    name: 'dictionary',
    components: {
        gmPagination,
        addDic
    },
    props: {
		dicData: Array,
		ipconfig: Object
    },
    data () {
        return {
            // 子系统标签
            Tagname: [],
            radio: '',
            btnName: '更多',
            showMoreApp: false,
            firstID: '',
            fisrtTitle: '',
            tableData: [],
            // 加载圈
            listLoading: false,
            appLoading: false,
            // 查询tiaojian
            queryForm: {},
            // 新增弹窗
            showAddDic: {
                isShow: false
            },
            // 新增详情
            DicDetail:{},
        }
    },
    mounted () {
        let _this = this
        // 初始化 获取子系统信息
        _this.getApp();
    },
    methods: {
        // 获取子系统列表
        getApp () {
            this.appLoading = true
            appSrervice.getAppList(this.ipconfig.UUMS_SERVER, {size: 100}).then((res) => {
                let appData = res.data.records;
                // 存储子系统数据
                let arr = [];
                // 遍历数组的index和值
                for (let [index, item] of appData.entries()) {
                    if (index == 0) {
                        this.radio = item.title;
                        this.fisrtTitle = item.title;
                        // 同步需要appkey
                        this.queryForm.appKey = item.name;
                    }
                    arr[index] = {};
                    arr[index].name = item.title;
                    arr[index].id = item.id;
                    arr[index].appKey = item.name
                }
                // ES6拷贝数组 给标签
                [...this.Tagname] = arr;
                // 第一个子系统的信息
                this.firstID = arr[0].id;
                // 查询第一个子系统
                this.queryForm.appId = arr[0].id;
                this.appLoading = false;
                // 查询权限
                this.query();
            });
        },
        // 子系统切换
        changeApp (item) {
            this.queryForm = {
                appId: item.id,
                // 同步所需
                appKey: item.appKey
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
            dictionaryService.getDicList(this.ipconfig.UUMS_SERVER, this.queryForm).then((res) => {
                if (res.data && res.data.length > 0) {
                  this.tableData = res.data
                } else {
                  this.tableData = []
                }
                this.listLoading = false
            }, (error) => {
                this.$message.error(error.message);
            });
        },
        // 树形数据懒加载
        loadNode (tree, treeNode, resolve) {
            setTimeout(() => {
                resolve(tree.childrens);
            }, 1000)
        },
        // 查询--js实现的模糊查询
        queryData () {
            // this.listLoading = true;
            // dictionaryService.getDicList(this.ipconfig.UUMS_SERVER, this.queryForm).then((res) => {
            //     // 模糊查询结果
            //     var result = dictionaryService.getArrayByName(res.data, this.queryForm.label, 'label', null)
            //     this.tableData = GM.CommonOper.hasChildren('childrens', result); 
            //     // this.$set(this.tableData,  GM.CommonOper.hasChildren('childrens', result))       
            //     this.listLoading = false;
            // }, (error) => {
            //     this.$message.error(error.message);
            // });
            this.query();
        },
        // 清除
        clearData () {
            // 默认查询第一个子系统
            this.queryForm = {
                appId: this.firstID
            }
            this.radio = this.fisrtTitle
            this.query()
        },
        // 新增字典
        addDic () {
            // 新增时需要传子系统的id
            this.DicDetail = {
                appId: this.queryForm.appId
            };
            this.showAddDic.isShow = true
            this.showAddDic.title = '新增字典'
            // 新增字典的上级字典为空
            this.showAddDic.parentDic = null
            // this.$refs.DicModel.$refs.addDicForm.clearValidate()
            // 
            this.$nextTick(function () {
                this.$refs.DicModel.initDiolog()
            })
        },
        // 修改字典
        updateDic (index, row) {
            // 如果该节点为根节点 上级字典为空
            if (row.pid == null) {
                this.showAddDic.parentDic = null
            } else {
                // 否则 找到该节点的父节点，获取父节点的名称
                let pnode = dictionaryService.getNodeItem(this.tableData, row)
                this.showAddDic.parentDic = pnode.label

            }
            this.DicDetail = {
            };
            this.DicDetail = Object.assign({}, row);
            // 删除对象的属性
            delete this.DicDetail.childrens;
            this.showAddDic.isShow = true;
            this.showAddDic.title = '修改字典信息'
        },
        // 删除字典
        deleteDic (index, row) {
            this.$confirm('确认删除吗？', '提示', {}).then(() => {
                this.listLoading = true;
                let params = {id: row.id};
                //
                dictionaryService.deleteDic(this.ipconfig.UUMS_SERVER, params).then((res) => {
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
        // 添加下级字典
        addChildDic (index, row) {
            this.showAddDic.parentDic = row.label;
            // 添加下级时需传入 pid和appid
            this.DicDetail = {
                pid: row.id,
                appId: this.queryForm.appId
            };
            this.showAddDic.isShow = true;
            this.showAddDic.title = '添加下级字典'
            // this.$refs.DicModel.$refs.addDicForm.resetFields();
            this.$nextTick(function () {
                this.$refs.DicModel.initDiolog()
            })
        },
        // 同步
        publics (item) {
            // 同步所有
            if (item === 'all') {
                dictionaryService.publics(this.ipconfig.UUMS_SERVER).then((res)  => {
                    if (res.success === true) {
                        this.$message({
                            message: '同步成功',
                            type: 'success'
                        });
                    }
                }, (error) => {
                    this.$message({
                        message: '同步失败',
                        type: 'warning'
                    });
                });
            } else {
                dictionaryService.publics(this.ipconfig.UUMS_SERVER, this.queryForm.appKey).then((res)  => {
                    if (res.success === true) {
                        this.$message({
                            message: '同步成功',
                            type: 'success'
                        });
                    }
                }, (error) => {
                    this.$message({
                        message: '同步失败',
                        type: 'warning'
                    });
                });
            }
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
