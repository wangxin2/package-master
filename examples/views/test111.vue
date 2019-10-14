<template>
<el-container class="container">
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
</el-container>
</template>

<script>
import appSrervice from '../../src/api/app-service'
export default {
    data() {
        return {
            Tagname: [],
            radio: '',
            btnName: '更多',
            showMoreApp: false
        }
    },
    inject: ['config'],
    mounted() {
        let _this = this;
        //初始化 获取子系统信息
        _this.getApp();
    },
    methods: {
        //获取子系统列表
        getApp () {
            this.appLoading = true;
            appSrervice.getAppList(this.config.UUMS_SERVER, {size: 100}).then((res) => {
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
                // let arr10 = arr.slice(0,10);
                //ES6拷贝数组 给标签
                [...this.Tagname] = arr;
                this.firstID = arr[0].id;
                this.queryForm = {
                    appId: arr[0].id
                };
                this.appLoading = false;
            });
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
        changeApp (item) {
            console.log(item.name);
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
        text-align: center;
    }
    // app列表
    .app-list {
        width: 815px;
        margin-left: 100px;
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