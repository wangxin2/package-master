<template>
  <div style="width: 100%">
    <el-container class="app container">
      <!-- <el-header> -->
        <el-col :span="24" class="toolbar">
          <el-form :inline="true" size="small">
            <el-form-item>
              <el-input v-model="queryCondition.title" placeholder="系统名称"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="queryData">查询</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="clearData">清除</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="addItem">新增</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      <!-- </el-header> -->
      <!-- <el-main> -->
        <div class="app-content">
          <ul>
            <li>
              <span v-for="(item, index) in appOne" :key="index">
                <div>
                  <div>
                    <div class="title">
                      <span :title="item.title">{{item.title}}</span>
                      <div>
                        <a title="编辑" @click="updateItem(item)">
                          <i class="el-icon-edit" ></i>
                        </a>
                        <a title="删除" @click="deleteItem(item)">
                          <i class="el-icon-delete"></i>
                        </a>
                      </div>
                    </div>
                    <div class="image">
                      <!-- <img :src="item.icon || defaultImg"> -->
                      <img :src="item.icon">
                    </div>
                  </div>
                </div>
              </span>
            </li>
            <!--  -->
            <li>
              <span v-for="(item, index) in appTwo" :key="index">
                <div>
                  <div>
                    <div class="title">
                      <span :title="item.title">{{item.title}}</span>                      
                      <div>
                        <a title="编辑">
                          <i class="el-icon-edit" @click="updateItem(item)"></i>
                        </a>
                        <a title="删除">
                          <i class="el-icon-delete" @click="deleteItem(item)"></i>
                        </a>
                      </div>
                    </div>
                    <div class="image">
                      <!-- <img :src="item.icon || defaultImg"> -->
                      <img :src="item.icon">
                    </div>
                  </div>
                </div>
              </span>
            </li>
          </ul>
        </div>
      <!-- </el-main> -->
      <el-footer>
        <gm-pagination :config="paginationOne" @changeCurrent="changeCurrent"></gm-pagination>
      </el-footer>
    </el-container>
    <!-- 新增/修改子系统 弹窗 -->
    <add-App :ipconfig="ipconfig" :showAddAPP="showAddAPP" :appDetail="appDetail" ref="addApp"></add-App>
  </div>
</template>

<script>
// import gmTreeSelect from '../../components/gmTreeSelect'
import gmPagination from '../../components/gmPagination'
// import gmDicSpan from '../../components/gmDicSpan'

import appSrervice from '../../api/app-service'
import addApp from '../../modal/app/addApp.vue'
// import imgUrl from '../../assets/img/default.png'
export default {
    name: 'app',
    components: {
        gmPagination,
        addApp
    },
    props: {
      dicData: Array,
      ipconfig: Object
    },
    data () {
        return {
            // defaultImg: imgUrl,
            paginationOne: {
                pagesize: 8
            },
            listLoading: false,
            // 子系统数组
            appOne: [],
            appTwo: [],
            // 新增弹窗
            showAddAPP: {
                isShow: false
            },
            // 新增详情
            appDetail: {},
            queryCondition: {}
        }
    },
    created () {
        let _this = this;
        // 初始查询条件
        _this.queryCondition = {
            current: 1,
            size: 8
        }
        _this.query();
    },
    methods: {
        // 查询子系统列表
        query () {
            // 清空
            this.appOne = [];
            this.appTwo = [];
            //
            this.listLoading = true;
            appSrervice.getAppList(this.ipconfig.UUMS_SERVER, this.queryCondition).then((res) => {
                let appData = res.data.records;
                // 遍历数组的index和值
                for (let [index, item] of appData.entries()) {
                    if (index < 4) {
                        this.appOne.push(item);
                    } else if (index >= 4) {
                        this.appTwo.push(item);
                    }
                }
                // 设置分页器总数
                this.$set(this.paginationOne, 'total', res.data.total)
            }, (error) => {
                this.$message.error(error.message);
            });
        },
        // 换页
        changeCurrent (val) {
        	this.queryCondition.current = val;
            this.query(this.queryCondition);
        },
        // 查询按钮
        queryData () {
            this.query();
            this.queryCondition.current = 1;
        },
        // 清除按钮
        clearData () {
            this.queryCondition = {
                current: 1,
                size: 8
            }
            this.query();            
        },
        // 新增系统 按钮
        addItem () {
            this.appDetail = {}
            this.showAddAPP = {
                isShow: true,
                title: '子系统新增'
            }
            // this.$refs.addApp.$refs.appForm.resetFields()
            this.$nextTick(function () {
                this.$refs.addApp.initDiolog()
            })
        },
        // 编辑子系统（更新）
        updateItem (item) {
            this.appDetail = {}
            this.appDetail = Object.assign({}, item)
            this.showAddAPP = {
                isShow: true,
                title: '子系统修改'
            }
            this.$nextTick(function () {
                this.$refs.addApp.initDiolog()
            })
        },
        // 删除子系统
        deleteItem (item) {
            this.$confirm('确认删除吗？', '提示', {}).then(() => {
                this.listLoading = true
                let params = {aplicationModelId: item.id}
                //
                appSrervice.deleteApp(this.ipconfig.UUMS_SERVER, params).then((res) => {
                    this.listLoading = false
                    this.$message({
                        message: item.title + '删除成功',
                        type: 'success'
                    })
                    this.query()
                }, (error) => {
                    this.$message.error(error.message)
                    this.listLoading = false
                });
            });
        }
    },
    
}
</script>

<style lang="less" scoped>
.container {
	flex-direction: column;
    height: 100%;
	padding: 15px 15px 0;
	.el-form-item{
		margin-bottom: 0;
	}
    .radio-wrap{
        padding: 10px 0;
    }
}
.app {
    overflow: hidden;
    .rightbutton {
        float: right;
        margin-bottom: 0.5rem;
        margin-right: 1rem;
    }
    .app-content{
        clear: both;
        height: 100%;
        width: 100%;
        padding: 20px 0 20px 0; 
        ul{
            height: 90%;
            width: 100%;
            padding:0px;
            list-style-type: none;
            li{
                height: 50%;
                width: 100%;
                margin-bottom: 10px;
                >span{
                    display: inline-block;
                    height: 100%;
                    width:23%;
                    margin-right:5px;
                    border: 1px solid #E4E7ED;
                    border-radius: 4px;
                    >div{
                        width: 100%;
                        height: 100%;
                        text-align: center;
                        >div{
                            display: flex;
                            flex-direction: column;
                            width: 100%;
                            height: 100%;
                            >div.title{
                                height:30px;
                                line-height: 30px;
                                border-bottom:1px solid #E4E7ED;
                                >div{
                                    height:29px;
                                    line-height: 29px; 
                                    //float:right;
                                    padding-right:10px;
                                    cursor: pointer;
                                    .icon-show{
                                        display: none;
                                    }
                                    a{
                                        line-height: 30px;
                                        font-size:18px;
                                        color: #3280fc;
                                        i{
                                            font-size:15px;
                                            margin: 0;
                                        }
                                    }
                                    a:first-child {
                                      padding-right: 10px;
                                    }
                                }
                                >span{
                                    display: block;
                                    height: 100%;
                                    width: 75%;
                                    text-align: left;
                                    padding-left: 10px;
                                    text-overflow: ellipsis ;
                                    white-space:nowrap; 
                                    overflow: hidden; 
                                    float: left;
                                    font-size: 1.8rem;
                                }
                                
                            }
                            >div.image{
                                position: relative;
                                width: 50%;
                                height: 0px;
                                padding-top: 50%;
                                margin: auto;
                                >img{
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    width: 100%;
                                    height: 100%;
                                    cursor: pointer;
                                }
                            }
                            >div.image:hover{
                                position: relative;
                                width: 55%;
                                height: 0px;
                                //padding-top: 55%;
                                margin: auto;
                            }
                        }
                        
                    }
                }
                 >span:nth-child(4n){
                    margin-right:0px;
                }
            }
        }
    }
}
</style>
