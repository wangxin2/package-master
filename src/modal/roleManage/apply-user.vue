<template>
	<el-dialog :title="devApplyUserModal.title" :visible.sync="devApplyUserModal.isShow">
		<el-tabs class="selftabs" v-model="activeStatus" @tab-click="tabClick">
		    <el-tab-pane
			    v-for="(item, index) in tabs"
			    :key="index"
			    :label="item.label"
			    :name="item.name"
		    >
				<div class="table">
					<el-table :data="userTable" v-loading="listLoading" @selection-change="handleSelectionChange">
						<el-table-column type="selection" width="55"></el-table-column>
						<el-table-column prop="loginName" label="登录账号" min-width="100"></el-table-column>
						<el-table-column prop="realName" label="简称" min-width="80"></el-table-column>
						<el-table-column prop="userInfo.sex" label="性别" min-width="100">
                            <template slot-scope="scope">
                                <gm-dic-span type="性别" :binddata="scope.row.userInfo.sex + ''" :data="dicArr"></gm-dic-span>
                            </template>
                        </el-table-column>
					</el-table>
				</div>
				<el-col :span="24" class="toolbar">
					<gm-pagination :config="pagination" @changeCurrent="changeCurrent"style="float:right;">
					</gm-pagination>
				</el-col>
			</el-tab-pane>
		</el-tabs>
		<div slot="footer" class="dialog-footer">
			<el-button @click.native="devApplyUserModal.isShow = false">取消</el-button>
			<el-button type="primary" @click.native="applyOrDelUser()" :loading="addLoading">
				<span v-show="activeStatus==='false'">分配</span>
				<span v-show="activeStatus==='true'">取消分配</span>
			</el-button>
		</div>
	</el-dialog>
</template>

<script>
import gmPagination from '../../components/gmPagination'
import gmDicSpan from '../../components/gmDicSpan'
import roleService from '../../api/role-service.js'
export default {
    name: 'applyUser',
    components: {
        gmPagination,
        gmDicSpan
    },
    props: { // 接收父级参数
        devApplyUserModal: Object, // 基本配置
        roleId: String, //角色id
        dicArr: Array,
        ipconfig: Object
    },
    data () {
        return {
            // tab页
            tabs: [],
            activeStatus: '', // tab页选中状态
            // 用户列表
            userFilters: {}, //用户搜索状态
            userTable: [],
            userIds: [], //选中的用户id
            // 等待条
            listLoading: false,
            addLoading: false,
            // 分页条配置
            pagination: {},
            
        };
    },
    methods: {
        // 初始化数据
        loadDialogData () {
            let _this = this;
            roleService.initApplyModalData(_this);
            this.query();
        },
        // 查询用户列表
        query () {
            roleService.queryUser(this.ipconfig.UUMS_SERVER, this.userFilters, this);
        },
        // 选中tab页时触发的函数
        tabClick (e) {
            this.activeStatus = e.name;
            this.userFilters.bool = this.activeStatus;
            this.query();
        },
        // 选中表格后的返回选中列表
        handleSelectionChange (e) {
            this.userIds = [];
            e.forEach((user, index) => {
                if (user.id) {
                   this.userIds.push(user.id);
                }
            })
        },
        // 改变页数后
        changeCurrent (val) {
            this.userFilters.current = val;
            this.query();
        },
        // 分配或取消分配用户
        applyOrDelUser () {
            this.$confirm('确认提交吗？', '提示', {}).then(() => {
                this.addLoading = true;
                // 点分配时传true, 和activeStatus相反
                let bool = false
                if (this.activeStatus === 'false') {
                    bool = true
                }
                let param = {
                    roleId: this.roleId,
                    userIds: this.userIds,
                    bool: bool
                };
                roleService.addOrDeleteUser(this.ipconfig.UUMS_SERVER, param).then((res) => {
                    this.addLoading = false;
                    this.$message({
                        message: '提交成功',
                        type: 'success'
                    });
                    this.query();
                }, (error) => {
                    this.$message.error(error.message);
                    this.addLoading = false;
                });
            });
        }
    }
}
</script>
