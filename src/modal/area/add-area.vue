<template>
	<el-dialog :title="devAreaModal.title" :visible.sync="devAreaModal.isShow">
		<el-form :model="addAreaList" label-width="11rem" ref="addAreaForm">
		    <el-form-item label="上级区域">
		      	<el-input v-model="devAreaModal.parentAera" :disabled="true"></el-input>                
		      	<!-- <el-input v-model="parentItem.title" :disabled="true"></el-input> -->
		    </el-form-item>
		    <el-form-item label="区域名称" prop="title" :rules="[validator.required]">
		    	<el-input v-model="addAreaList.title"></el-input>
		    </el-form-item>
		    <el-form-item label="简称" prop="totalCount">
		      	<el-input v-model="addAreaList.abbreviation"></el-input>
		    </el-form-item>
		    <el-form-item label="别名" prop="alias">
		    	<el-input v-model="addAreaList.alias"></el-input>
		    </el-form-item>
		    <el-form-item label="区域编码" prop="code" :rules="[validator.required, validator.number]">
		      	<el-input v-model="addAreaList.code"></el-input>
		    </el-form-item>
		    <el-form-item label="区域类型" prop="areaType">
				<gm-dic-select :data="dicData" clearable filterable ref="type" type="区域类型" v-model='addAreaList.areaType' placeholder="区域类型"></gm-dic-select>
		    </el-form-item>
		    <el-form-item label="排序" prop="orders" :rules="[validator.required, validator.number]">
		      	<el-input v-model="addAreaList.orders"></el-input>
		    </el-form-item>
		    <el-form-item label="备注" prop="description">
		    	<el-input v-model="addAreaList.description"></el-input>
		    </el-form-item>
		</el-form>
		<div slot="footer" class="dialog-footer">
			<el-button @click.native="devAreaModal.isShow = false">取消</el-button>
			<el-button type="primary" @click.native="addNewArea('addAreaForm')" :loading="addLoading">提交</el-button>
		</div>
	</el-dialog>
</template>

<script>
import areaService from '../../api/area-service'
import validator from '../../utils/validate.js'
import gmDicSelect from '../../components/gmDicSelect'

export default {
    name: 'addArea',
    components: {
        gmDicSelect
    },
    props: { // 接收父级参数
        devAreaModal: Object, // 基本配置
        parentItem: Object, // 选中行数据
        isUpdata: Boolean, //是否为修改
        dicData: Array,
		ipconfig: Object
    },
    data () {
        return {
            addAreaList: {}, // 新增设备对象
            addLoading: false,
            validator: validator
        }
    },
    methods: {
        // 初始化数据
        loadDialogData () {
            let _this = this
            _this.$refs.addAreaForm.resetFields()
            areaService.initAddModalData(_this)
        },
        // 保存区域新增/修改
        addNewArea (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
               	    if (!this.isUpdata) {
               	    	this.addAreaList.pid = this.parentItem.id
               	    }
                    this.$confirm('确认提交吗？', '提示', {}).then(() => {
                        this.addLoading = true
                        let param = Object.assign({}, this.addAreaList)
                        areaService.save(this.ipconfig.UUMS_SERVER, param).then((res) => {
                            this.addLoading = false
                            this.$message({
                                message: '保存成功',
                                type: 'success'
                            });
                            this.devAreaModal.isShow = false
                            this.$parent.$parent.query()
                        }, (error) => {
                            this.$message.error(error.message)
                            this.addLoading = false
                        });
                    });
                } else {
                	this.$message.error('请完善表单')
                }
            });
        }
    }
}

</script>