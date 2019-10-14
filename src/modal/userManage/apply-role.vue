<template>
	<el-dialog :title="showApplyRole.title" :visible.sync="showApplyRole.isShow">
        <el-tabs class="selftabs" v-model="activeStatus" @tab-click="tabClick">
		    <el-tab-pane
			    v-for="(item, index) in tabs"
			    :key="index"
			    :label="item.label"
			    :name="item.name"
		    >
				<div class="table">
					<el-table :data="roleTable" v-loading="listLoading" @selection-change="handleSelectionChange">
						<el-table-column type="selection" width="55"></el-table-column>
						<el-table-column prop="title" label="显示名称" min-width="100" show-overflow-tooltip></el-table-column>
						<el-table-column prop="name" label="名称" min-width="80"></el-table-column>
						<el-table-column label="角色类型" min-width="100">
							<template slot-scope="scope">
                                <gm-dic-span type="角色类型" :binddata="scope.row.type + ''" :data="dicArr"></gm-dic-span>
							</template>
						</el-table-column>
						<el-table-column prop="description" label="描述" min-width="100"></el-table-column>
                    </el-table>
				</div>
				<el-col :span="24" class="toolbar" v-if="item.name === 'true'">
					<gm-pagination :config="pagination" @changeCurrent="changeCurrent">
					</gm-pagination>
				</el-col>
			</el-tab-pane>
		</el-tabs>
		<div slot="footer" class="dialog-footer">
			<el-button @click.native="showApplyRole.isShow = false">取消</el-button>
			<el-button type="primary" @click.native="applyOrDelUser()" :loading="addLoading">
				<span v-show="activeStatus==='true'">分配</span>
				<span v-show="activeStatus==='false'">取消分配</span>
			</el-button>
		</div>
	</el-dialog>
</template>

<script>
import gmPagination from '../../components/gmPagination'
import gmDicSpan from '../../components/gmDicSpan'
import userManageService from '../../api/user-services.js'
import roleService from '../../api/role-service.js'
import GM from '../../utils/common.js'
export default {
    name: 'applyrole',
    props: { // 接收父级参数
        showApplyRole: Object, // 基本配置
        dicArr: Array,
        ipconfig: Object
    },
    components: {
        gmPagination,
        gmDicSpan
    },
    data () {
        return {
            // tab页
            tabs: [],
            activeStatus: '', // tab页选中状态
            roleFilters: {}, // 用户搜索状态
            roleTable: [],
            allRole: [],
            roleIds: [], // 选中的用户id
            // 等待条
            listLoading: false,
            addLoading: false,
            // 分页条配置
            pagination: {},
        }
    },
    methods: {
        // 初始化数据
        loadDialogData () {
            let _this = this;
            userManageService.initApplyModalData(_this);
            this.queryAllRole();
        },
        // 选中tab页时触发的函数
        tabClick (e) {
            this.activeStatus = e.name;
            if (e.name === 'false') {
                // 查询已分配
                this.queryUserRole()
            } else {
                //
                this.roleTable = this.allRole
                // this.queryAllRole()
            }
        },
        // 选中表格后的返回选中列表
        handleSelectionChange (e) {
            //
            this.roleIds = []
            // console.log(e)
            e.forEach((role, index) => {
                if (role.id) {
                    this.roleIds.push(role.id);
                }
            })
        },
        // 查询用户已有角色
        queryUserRole () {
            userManageService.getUserInfo(this.ipconfig.UUMS_SERVER, {userId: this.showApplyRole.userId}).then((res) => {
                console.log(res)
                this.roleTable = res.data.roles
            }, (error) => {
                this.$message.error(error.message);
            })
        },
        // 查询全部角色
        queryAllRole () {
            this.listLoading = true;
            roleService.getRoleList(this.ipconfig.UUMS_SERVER, this.roleFilters).then((res) => {
                // console.log('allres:', res)
                this.roleTable = res.data.records
                this.allRole = this.roleTable
                this.$set(this.pagination, 'total', res.data.total);
                this.listLoading = false;
            }, (error) => {
                this.$message.error(error.message);
            })
        },
        // 改变页数
        changeCurrent (val) {
            this.roleFilters.current = val;
            this.queryAllRole();
        },
        // 用户角色分配/取消分配
        applyOrDelUser () {
            this.$confirm('确认提交吗？', '提示', {}).then(() => {
                this.addLoading = true;
                let param = {
                    roleIds: this.roleIds,
                    userId: this.showApplyRole.userId,
                    bool: this.activeStatus
                };
                //
                userManageService.addOrDeleteRole(this.ipconfig.UUMS_SERVER, param).then((res) => {
                    this.addLoading = false;
                    this.$message({
                        message: '提交成功',
                        type: 'success'
                    });
                    // 已分配页面刷新
                    if (this.activeStatus === 'false') {
                        this.queryUserRole();
                    }
                }, (error) => {
                    this.$message.error(error.message);
                    this.addLoading = false;
                });
            });
        }
    }
}
</script>
