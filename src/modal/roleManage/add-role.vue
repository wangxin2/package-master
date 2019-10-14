<template>
	<el-dialog :title="devRoleModal.title" :visible.sync="devRoleModal.isShow" width="60%">
		<el-form :model="addRoleList" label-width="11rem" ref="addRoleForm">
			<el-row>
				<el-col :span="12">
					<el-form-item label="角色名称" prop="name" :rules="[validator.required]">
						<el-input v-model="addRoleList.name"></el-input>
					</el-form-item>
					<el-form-item label="角色显示名" prop="title" :rules="[validator.required]">
						<el-input v-model="addRoleList.title"></el-input>
					</el-form-item>
					<el-form-item label="是否可注册" prop="show">
						<gm-dic-select clearable :data="dicArr" filterable ref="show" type="是否" v-model='addRoleList.show' placeholder="是否可注册"></gm-dic-select>
					</el-form-item>
					<el-form-item label="角色类型" prop="type" :rules="[validator.required]">
						<gm-dic-select clearable :data="dicArr" filterable ref="type" type="角色类型" v-model='addRoleList.type' placeholder="角色类型"></gm-dic-select>
					</el-form-item>
					<el-form-item label="排序" prop="orders" :rules="[validator.required, validator.number]">
						<el-input v-model="addRoleList.orders"></el-input>
					</el-form-item>
					<el-form-item label="描述" prop="description">
						<el-input v-model="addRoleList.description"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="权限集合">
						<el-tree class="formTree" :data="data" :props="defaultProps" show-checkbox ref="tree" node-key="id" @check="handleCheckChange">
						</el-tree>
					</el-form-item>
				</el-col>
			</el-row>   
		</el-form>
		<div slot="footer" class="dialog-footer">
			<el-button @click.native="devRoleModal.isShow = false">取消</el-button>
			<el-button type="primary" @click.native="addNewRole('addRoleForm')" :loading="addLoading">提交</el-button>
		</div>
	</el-dialog>
</template>

<script>
import roleService from '../../api/role-service.js'
import appService from '../../api/app-service.js'
import validator from '../../utils/validate.js'
import gmDicSelect from '../../components/gmDicSelect'
export default {
    name: 'addRole',
    components: {
        gmDicSelect
    },
    props: { // 接收父级参数
        devRoleModal: Object, // 基本配置
        permissionData: Array, // 权限数据
        checkData: Array, // 选中的节点
        roleList: Object,
        queryFromFather: {
            type: Function
        },
        dicArr: Array,
        ipconfig: Object
    },
    data () {
        return {
            addRoleList: {}, // 新增角色对象
            addLoading: false,
            validator: validator,
            data: [], // 树数据
            defaultProps: {
            	children: 'childrens',
            	label: 'title'
            }, // 树配置
            dicData: []
        };
    },
    methods: {
        // 初始化数据
        loadDialogData () {
            let _this = this;
            _this.$refs.addRoleForm.resetFields();
            roleService.initAddModalData(_this);
        },
        // data 当前节点 treedata 选中的状态的对象
        handleCheckChange (data, arrayNodes) {
        	this.addRoleList.permissionIds = [];
        	for (var i = 0; i < arrayNodes.checkedNodes.length; i++) {
                if (arrayNodes.checkedNodes[i].appId) {
                    this.addRoleList.permissionIds.push(arrayNodes.checkedNodes[i]['id']);
                }
           }
        },
        // 增加新角色
        addNewRole (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
               		if (this.addRoleList.orders == null) {
		                this.addRoleList.orders = 1;
		            }
		            this.addRoleList.status = 1;
                    this.$confirm('确认提交吗？', '提示', {}).then(() => {
                        this.addLoading = true;
                        let param = Object.assign({}, this.addRoleList);
                        roleService.save(this.ipconfig.UUMS_SERVER, param).then((res) => {
                            this.addLoading = false;
                            this.$message({
                                message: '提交成功',
                                type: 'success'
                            });
                            this.devRoleModal.isShow = false;
                            this.queryFromFather();
                        }, (error) => {
                            this.$message.error(error.message);
                            this.addLoading = false;
                        });
                    });
                } else {
                	this.$message.error('请完善表单');
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.formTree {
	max-height: 300px;
	overflow: auto
}
</style>
