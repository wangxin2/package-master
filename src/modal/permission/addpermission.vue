<template>
    <el-dialog :title="showAddPer.title" :visible.sync="showAddPer.isShow" center>
        <el-form :model="perDetail" label-width="10.5rem" ref="perForm">
            <el-form-item label="子系统">
                <el-input v-model="radio" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="上级权限">
                <el-input v-model="showAddPer.parentPer" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item  label="权限名称" prop="title" :rules="[validator.required]">
                <el-input v-model="perDetail.title"></el-input>
            </el-form-item>
            <el-form-item label="权限标识符" prop="permValue" :rules="[validator.required]">
                <el-input v-model="perDetail.permValue"></el-input>
            </el-form-item>
            <el-form-item label="权限类型" prop="type" :rules="[validator.required]">
                <gm-dic-select clearable :data="dicArr" filterable ref="type" type="权限类型" v-model="perDetail.type" placeholder="请选择"></gm-dic-select>
            </el-form-item>
            <el-form-item label="权限资源地址" prop="uri">
                <el-input v-model="perDetail.uri"></el-input>
            </el-form-item>
            <el-form-item label="排序" prop="orders" :rules="[validator.number]">
                <el-input v-model="perDetail.orders"></el-input>
            </el-form-item>
            <el-form-item label="描述" prop="description">
                <el-input v-model="perDetail.description"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click.native="showAddPer.isShow = false">取 消</el-button>
            <el-button type="primary" @click.native="save('perForm')">保 存</el-button>
        </div>
    </el-dialog>
</template>

<script>
import permissionService from '../../api/permission-service.js'
import validator from '../../utils/validate.js'
import gmDicSelect from '../../components/gmDicSelect'
export default {
    name: "addPer",
    components: {
        gmDicSelect
    },
    props: {
        showAddPer: Object,
        perDetail: Object,
        radio: String,
        queryFromFather: {
            type: Function
        },
        dicArr: Array,
        ipconfig: Object
    },
    data() {
        return {
            validator: validator
        }
    },
    methods: {
    	// 初始化数据
        loadDialogData () {
            let _this = this;
            _this.$refs.perForm.clearValidate();
        },
        /**
         * @method 保存权限新增或修改
         */
        save (formName) {
        	this.$refs[formName].validate((valid) => {
				if (valid) {
					this.$confirm('确认保存吗？', '提示', {}).then(() => {
		                permissionService.savePermission(this.ipconfig.UUMS_SERVER, this.perDetail).then((res) => {
		                    //console.log(res);
		                    this.$message.success('保存成功!');
		                    //再次执行父级的查询
		                    this.queryFromFather();
		                }, (error) => {
		                    this.$message.error(error.message);
		                });
		                //关闭弹窗
		                this.showAddPer.isShow = false;
		            });
				} else {
					this.$message.error('请完善表单');
				}
			});
        }
    }
}
</script>
