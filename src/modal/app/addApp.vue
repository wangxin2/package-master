<template>
  <el-dialog class="appDio" :title="showAddAPP.title" :visible.sync="showAddAPP.isShow" center>
    <el-row>
        <span class="appLabel">基础配置</span>
        <el-form label-width="10rem" :model="appDetail" ref="appForm">
            <el-form-item label="系统名称" prop="title" :rules="[validator.required]">
                <el-input v-model="appDetail.title"></el-input>
            </el-form-item>
            <el-form-item label="APPKey" prop="name" :rules="[validator.required]">
                <el-input v-model="appDetail.name"></el-input>
            </el-form-item>
            <el-form-item label="系统地址" prop="host" :rules="[validator.required]">
                <el-input v-model="appDetail.host"></el-input>
            </el-form-item>
            <el-form-item label="表单地址" prop="basePath" :rules="[validator.required]">
                <el-input v-model="appDetail.basePath"></el-input>
            </el-form-item>
            <el-form-item label="系统图标" prop="file">
                <input type="file" id="upfile" @change="fileChange()">
            </el-form-item>
            <el-form-item label="排序" prop="orders" :rules="[validator.required, validator.number]">
                <el-input v-model="appDetail.orders"></el-input>
            </el-form-item>
            <el-form-item label="描述" prop="description">
                <el-input v-model="appDetail.description"></el-input>
            </el-form-item>
        <span class="appLabel">系统配置</span>
            <el-form-item label="是否登录" prop="ssoServer" :rules="[validator.required]">
                <el-select v-model="appDetail.ssoServer" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
            </el-form-item>
        </el-form>
   </el-row>
    <div slot="footer" class="dialog-footer">
        <!-- <el-button @click="showAddAPP.isShow = false">取 消</el-button> -->
		<el-button @click.native="cancel('appForm')">取消</el-button>
      <el-button type="primary" @click="save('appForm')">保 存</el-button>
    </div>
  </el-dialog>
</template>

<script>
import appService from '../../api/app-service'
import validator from '../../utils/validate.js'
export default {
      name: "addApp",
      props: {
        showAddAPP: Object,
        appDetail: Object,
		ipconfig: Object
      },
      data () {
        return {
            // 是否登陆
            options: [{
                value: 1,
                label: '是'
            }, {
                value: 0,
                label: '否'
            }],
            validator: validator,
            // 文件读取对象
            filereader: {}
        }
      },
      methods: {
        // 初始化
        initDiolog () {
            // 清空验证
            this.$refs.appForm.clearValidate()
            this.filereader = new FileReader()
            // 打开弹窗时 清空选中的文件
            document.getElementById('upfile').value = ''
        },
        // 文件选中事件！
        fileChange () {
            var fill = document.getElementById('upfile').files[0]
            this.filereader.readAsDataURL(fill)
            // 保存vue的this
            let _this = this
            this.filereader.onload = function (e) {
                // 将处理后的文件结果 赋值给appdetail.icon
                _this.appDetail.icon = this.result
            }
        },
        // 保存
        save (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$confirm('确认保存吗？', '提示', {}).then(() => {
                        appService.saveApp(this.ipconfig.UUMS_SERVER, this.appDetail).then((res) => {
                            this.$message.success('保存成功！');
                            // 再次执行父级的查询
                            this.$parent.query();
                        }, (error) => {
                            this.$message.error(error.message);
                        });
                    });
                    // 关闭弹窗
                    this.showAddAPP.isShow = false;
                    // 清空验证
                    this.$refs.appForm.clearValidate()
                } else {
                    this.$message.error('请完善表单');
                }
            });
        },
        // 取消按钮，清除验证
        cancel (formName) {
            this.showAddAPP.isShow = false;
            this.$refs[formName].clearValidate()
        }
      }
    }
</script>

<style lang="less" scoped>
span {
  font-size: 1rem;
  border-bottom: 2px solid #047adf;
  display: inline-block;
  padding: 0 10px 5px 0px;
  margin-left: 30px;
  margin-bottom: 20px;
  color: #047adf;
}

.appDio {
    .el-row {
        font-size: 0px;
    }
}
</style>
