<template>
  <el-dialog :title="showAddDic.title" :visible.sync="showAddDic.isShow" center>
    <el-form label-width="10.5rem" :model="DicDetail" ref="addDicForm">
      <el-form-item label="子系统">
        <el-input v-model="radio" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="上级字典" prop="parentDic">
        <el-input v-model="showAddDic.parentDic" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item  label="类型" prop="type" :rules="[validator.required]">
        <el-input v-model="DicDetail.type"></el-input>
      </el-form-item>
      <el-form-item label="代码" prop="value" :rules="[validator.zhengnumber]">
        <el-input v-model="DicDetail.value"></el-input>
      </el-form-item>
      <el-form-item label="代码名称" prop="label" :rules="[validator.required]">
        <el-input v-model="DicDetail.label"></el-input>       
      </el-form-item>
      <el-form-item label="描述" prop="description">
        <el-input v-model="DicDetail.description"></el-input>
      </el-form-item>
    </el-form>
	  <div slot="footer" class="dialog-footer">
      <el-button @click="showAddDic.isShow = false">取 消</el-button>
      <el-button type="primary" @click="save('addDicForm')">保 存</el-button>
    </div>
  </el-dialog>
</template>

<script>
import dictionaryService from '../../api/dictionary-service.js'
import validator from '../../utils/validate.js'
export default {
    name: 'addDic',
    props: {
        showAddDic: Object,
        DicDetail: Object,
        radio: String,
        dicArr: Array,
		    ipconfig: Object
    },
    data () {
        return {
            validator: validator
        }
    },
    methods: {
      // 初始化
        initDiolog () {
            // 清空验证
            this.$refs.addDicForm.clearValidate()
        },
        save (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$confirm('确认保存吗？', '提示', {}).then(() => {
                        dictionaryService.saveDic(this.ipconfig.UUMS_SERVER, this.DicDetail).then((res) => {
                            // console.log(res);
                            this.$message.success('保存成功!');
                            // 再次执行父级的查询
                            this.$parent.$parent.query();
                        }, (error) => {
                            this.$message.error(error.message);
                        });
                        // 关闭弹窗
                        this.showAddDic.isShow = false;
                    });
                } else {
                    this.$message.error('请完善表单');
                }
            });
        }
    },
}
</script>

<style lang="less" scoped>
</style>