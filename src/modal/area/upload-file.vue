<template>
	<el-dialog :title="devUploadModal.title" :visible.sync="devUploadModal.isShow">
		<el-form label-width="11rem">
		    <el-form-item label="导入文件">
		      	<input type="file" ref="file" @change="tirggerFile" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"></input>
		    </el-form-item>
		</el-form>
		<div slot="footer" class="dialog-footer">
			<el-button @click.native="clear">取消</el-button>
			<el-button type="primary" @click.native="upload" :loading="addLoading">提交</el-button>
		</div>
	</el-dialog>
</template>

<script>
import areaService from '../../api/area-service'
export default {
    name: 'uploadFile',
    props: { // 接收父级参数
        devUploadModal: Object, // 基本配置
        dicArr: Array,
		ipconfig: Object
    },
    data () {
        return {
            addLoading: false,
            formData: new FormData()
        }
    },
    methods: {
        // 初始化数据
        loadDialogData () {
            let _this = this;
            areaService.initUploadModalData(_this);
            _this.$refs.file.value = '';
        },
        // 增加新设备
        tirggerFile () {
            let fil = this.$refs.file.files;
            // 判断文件类型
            if (!GM.CommonOper.judgeFileType(fil, 'Excel')) {
            	this.$message.error('请选择Excel文件');
            	return;
            }
            this.formData.append('file', fil[0]);
            this.formData.append('token', GM.token);
        },
        // 上传
        upload () {
        	this.addLoading = true;
        	if (!this.$refs.file.files || this.$refs.file.files.length === 0) {
            	this.$message.error('请选择文件');
            	return;
        	}
        	areaService.upload(this.ipconfig.UUMS_SERVER, this.formData).then((response) => {
                this.query();
                this.$message({
                    type: 'success',
                    message: '导入成功!'
                });
                this.addLoading = false;
                this.devUploadModal.isShow = false;
            }, (error)  => {
                this.$message.error(error.message);
                this.addLoading = false;
            });
        },
        // 退出弹出框
        clear () {
        	this.$refs.file.value = '';
        	this.devUploadModal.isShow = false;
        }
    }
}

</script>