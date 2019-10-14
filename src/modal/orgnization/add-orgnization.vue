<template>
	<el-dialog :title="devOrgModal.title" :visible.sync="devOrgModal.isShow" width="60%">
		<el-form :model="addOrgList" label-width="11rem" ref="addOrgForm">
			<el-row>
				<el-col :span="12">
					<el-form-item class="title">
						<label>机构信息</label>
					</el-form-item>
					<el-form-item label="上级机构">
						<el-input v-model="devOrgModal.parentOrg" readonly="readonly"></el-input>
					</el-form-item>
					<el-form-item label="归属区域" prop="areaId" :rules="[validator.required]">
						<gm-tree-select :treeData="treeData" :props="config" v-model="addOrgList.areaId"/>
					</el-form-item>
					<el-form-item label="机构名称" prop="name" :rules="[validator.required]">
						<el-input v-model="addOrgList.name"></el-input>
					</el-form-item>
					<el-form-item label="机构编码" prop="code" :rules="[validator.required, validator.naturalNumber]">
						<el-input v-model="addOrgList.code"></el-input>
					</el-form-item>
					<el-form-item label="机构类型" prop="type" :rules="[validator.required]">
						<gm-dic-select :data="dicArr" clearable filterable ref="type" type="机构类型" v-model='addOrgList.type' placeholder="机构类型"></gm-dic-select>
					</el-form-item>
					<el-form-item label="区域类型" prop="grade">
						<gm-dic-select :data="dicArr" clearable filterable ref="type" type="区域类型" v-model='addOrgList.grade' placeholder="区域类型"></gm-dic-select>
					</el-form-item>
					<el-form-item label="备注" prop="description">
						<el-input v-model="addOrgList.description"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item class="title">
						<label>负责人信息</label>
					</el-form-item>
					<el-form-item label="负责人" prop="principal" :rules="[validator.required]">
						<el-input v-model="addOrgList.principal"></el-input>
					</el-form-item>
					<el-form-item label="电话" prop="phone" :rules="[validator.required, validator.phone]">
						<el-input v-model="addOrgList.phone"></el-input>
					</el-form-item>
					<el-form-item label="联系地址" prop="addr" :rules="[validator.required]">
						<el-input v-model="addOrgList.addr"></el-input>
					</el-form-item>
					<el-form-item label="邮政编码" prop="postalCode" :rules="[validator.postalcode]">
						<el-input v-model="addOrgList.postalCode"></el-input>
					</el-form-item>
					<el-form-item label="传真" prop="fax">
						<el-input v-model="addOrgList.fax"></el-input>
					</el-form-item>
					<el-form-item label="邮箱" prop="email" :rules="[validator.email]">
						<el-input v-model="addOrgList.email"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			
		</el-form>
		<div slot="footer" class="dialog-footer">
			<el-button @click.native="devOrgModal.isShow = false">取消</el-button>
			<el-button type="primary" @click.native="addNewOrg('addOrgForm')" :loading="addLoading">提交</el-button>
		</div>
	</el-dialog>
</template>

<script>
import orgizaionService from '../../api/orgization-service';
import validator from '../../utils/validate.js'
import gmDicSelect from '../../components/gmDicSelect'
import gmTreeSelect from '../../components/gmTreeSelect'
export default {
	name: 'addOrg',
	components: {
        gmDicSelect,
        gmTreeSelect
    },
    props: { // 接收父级参数
        devOrgModal: Object, // 基本配置
        parentItem: Object, // 选中行数据
		isUpdata: Boolean, // 是否为修改
		dicArr: Array,
		ipconfig: Object
    },
    data () {
        return {
            addOrgList: {}, // 新增对象
            addLoading: false,
            // 下拉树
            treeData: [],
            config: {
            	value: 'id',
                label: 'title',
                children: 'childrens'
            },
            validator: validator
        }
    },
    methods: {
        // 初始化数据
        loadDialogData () {
            let _this = this;
            _this.$refs.addOrgForm.resetFields();
            orgizaionService.initAddModalData(_this);
        },
        // 增加
        addNewOrg (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
               	    if (!this.isUpdata) {
               	    	this.addOrgList.pid = this.parentItem.id;
                    }
                    this.addOrgList.status = 1
                    this.addOrgList.orders = 1
                    this.$confirm('确认提交吗？', '提示', {}).then(() => {
                        this.addLoading = true;
                        let param = Object.assign({}, this.addOrgList);
                        orgizaionService.save(this.ipconfig.UUMS_SERVER, param).then((res) => {
                            this.addLoading = false;
                            this.$message({
                                message: '保存成功',
                                type: 'success'
                            });
                            this.devOrgModal.isShow = false;
                            this.$parent.$parent.query();
                        }, (error) => {
                            this.$message.error(error.message);
                            this.addLoading = false;
                        });
                    });
                } else {
                	this.$message.error('请完善表单');
                }
            });
        }
    }
}

</script>