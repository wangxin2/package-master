<template>
	<el-dialog :title="userDetailModal.title" :visible.sync="userDetailModal.isShow" width="60%">
		<el-form :model="detailList" label-width="11rem" ref="userDelForm">
			<el-row>
				<el-col :span="12">
					<el-form-item class="title">
						<label>基本信息</label>
					</el-form-item>
					<el-form-item label="登录名" prop="loginName" :rules="[validator.required]">
						<el-input v-model="detailList.loginName" :disabled="gmdisabled"></el-input>
					</el-form-item>
					<el-form-item label="姓名" prop="realName" :rules="[validator.required]">
						<el-input v-model="detailList.realName"></el-input>
					</el-form-item>
					<el-form-item label="联系电话" prop="phone" :rules="[validator.required, validator.phone]">
						<el-input v-model="detailList.phone"></el-input>
					</el-form-item>
					<el-form-item label="性别" prop="sex" :rules="[validator.required]">
						<gm-dic-select clearable :data="dicArr" filterable ref="type" type="性别" v-model="detailList.sex" placeholder="请选择"></gm-dic-select>
					</el-form-item>
					<el-form-item label="标签类型" prop="label">
						<gm-dic-select clearable :data="dicArr" filterable type="标签类型" v-model="detailList.label" placeholder="请选择"></gm-dic-select>
					</el-form-item>
					<!-- 修改时 密码不必填 -->
					<el-form-item label="密码" prop="password" v-if="gmdisabled" :rules="[validator.password]">
						<el-input v-model="detailList.password" show-password></el-input>
					</el-form-item>
					<el-form-item label="确认密码" prop="confirmPsw"  v-if="gmdisabled" :rules="[{ validator: validatePass2}]">
						<el-input v-model="detailList.confirmPsw" show-password></el-input>
					</el-form-item>
					<!-- 新增时 密码设置为必填 -->
					<el-form-item label="密码" prop="password"  v-if="!gmdisabled" :rules="[validator.required, validator.password]">
						<el-input v-model="detailList.password" show-password></el-input>
					</el-form-item>
					<el-form-item label="确认密码" prop="confirmPsw"  v-if="!gmdisabled" :rules="[validator.required, { validator: validatePass2}]">
						<el-input v-model="detailList.confirmPsw" show-password></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					 <el-form-item class="title">
						<label>机构信息</label>
					</el-form-item>
					<el-form-item label="所属机构" prop="organizationIds">
		    	        <gm-tree-select :treeData="orgTree" :props="treeConfig" v-model="detailList.organizationIds" placeholder="请选择机构"/>						
					</el-form-item>
				</el-col>
			</el-row>
		</el-form>
		<div slot="footer" class="dialog-footer">
			<el-button @click.native="cancel('userDelForm')">取消</el-button>
			<el-button type="primary" @click.native="saveThisUser('userDelForm')">保存</el-button>
		</div>
	</el-dialog>
</template>

<script>
import userManageService from '../../api/user-services.js'
import gmDicSelect from '../../components/gmDicSelect'
import gmTreeSelect from '../../components/gmTreeSelect'
import GM from '../../utils/common.js'
import validator from '../../utils/validate.js'

export default {
    name: 'userInfo',
    components: {
        gmDicSelect,
        gmTreeSelect
    },
    props: { // 接收父级参数
        userDetailModal: Object, // 基本配置
        gmdisabled: Boolean,
		detailList: Object, // 详情列表
		dicArr: Array,
		ipconfig: Object,
		// 机构树
		orgTree: Array
    },
    data () {
    	return {
			addOrgList: {}, // 新增/修改对象
			addLoading: false,
			// 机构树
			// treeData: [],
            treeConfig: { 
				value: 'id',
                label: 'name',
                children: 'childrens'
			},
			validator
    	}
	},
    methods: {
		// 初始化数据
		loadDialogData () {
			let _this = this
			_this.$refs.userDelForm.clearValidate()
		},
		// 验证 确认密码与密码是否相同
		validatePass2: function (rule, value, callback) {
			if (value === '') {
			callback(new Error('请再次输入密码'));
			} else if (this.detailList.password !== null && value !== this.detailList.password) {
				callback(new Error('两次输入密码不一致!'));
			} else {
				callback();
			}
		},
		// // 获取机构树
        // getOrgTree () {
        //     userManageService.getOrgTree(this.ipconfig.UUMS_SERVER).then((res) => {
		// 		this.treeData = res.data
        //     })
        // },
        // 保存新增/修改用户
		saveThisUser (formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					// 给后台传机构，需要orgIds字段
					this.$set(this.detailList, 'orgIds', this.detailList.organizationIds)
					// 传给后台的对象
					this.addOrgList = Object.assign({}, this.detailList);
					// 密码加密
					if (this.detailList.password) {
						this.addOrgList.password = GM.LayoutOper.encryptByDES(this.detailList.password)
					}
					if (this.detailList.confirmPsw) {
						this.addOrgList.confirmPsw = GM.LayoutOper.encryptByDES(this.detailList.confirmPsw)
					}
					userManageService.saveUser(this.ipconfig.UUMS_SERVER, this.addOrgList).then((res) => {
						this.$message({
							message: '保存成功',
							type: 'success'
						});
						this.$emit('fatherMethod')
						this.userDetailModal.isShow = false
						// 清除验证
                        // this.$refs.userDelForm.resetFields()
					}, (error) => {
						this.$message.error(error.message)
						return false
					})
				} else {
					this.$message.error('请完善表单')
					return false
				}
			})
			
		},
		// 取消按钮
        cancel (formName) {
            // 关闭弹窗
            this.userDetailModal.isShow = false
            // 重置表单
            this.$refs[formName].resetFields()
        }
    }
}
</script>
