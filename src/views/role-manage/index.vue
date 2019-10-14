<template>
    <el-container class="container">
        <div class="search">
            <el-form :inline="true" :model="roleFilters" size="small">
                <el-form-item>
                    <el-input v-model="roleFilters.title" placeholder="角色显示名" clearable></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" v-on:click="queryData">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="clear">清除</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="addNew">新增</el-button>						
                </el-form-item>
            </el-form>
        </div>
        <el-main>
            <el-table 
            :data="roleTable" 
            v-loading="listLoading"  
            class="table"
            >
				<el-table-column prop="title" label="显示名称"  show-overflow-tooltip></el-table-column>
				<el-table-column prop="name" label="名称" ></el-table-column>
				<el-table-column label="角色类型" >
					<template slot-scope="scope">
						<gm-dic-span type="角色类型" :binddata="scope.row.type + ''" :data="dicData"></gm-dic-span>
					</template>
				</el-table-column>
				<el-table-column prop="description" label="描述" ></el-table-column>
				<el-table-column prop="orders" label="排序" width="120"></el-table-column>
				<el-table-column label="操作" fixed="right" width="220">
					<template slot-scope="scope">
                        <el-button type="text" @click="modify(scope.$index, scope.row)" title="修改"><i class="el-icon-edit-outline"></i></el-button>
                        <el-button type="text" @click="deleteRow(scope.$index, scope.row)" title="删除"><i class="el-icon-delete"></i></el-button>
						<el-button type="text" @click="applyUser(scope.$index, scope.row)" title="用户分配"><i class="el-icon-share"></i></el-button>                        
                    </template>
				</el-table-column>
			</el-table>
        </el-main>
        <!--分页器-->
        <gm-pagination :config="pagination" @changeCurrent="changeCurrent"></gm-pagination>
        <!--增加角色模态框-->
        <add-role :ipconfig="ipconfig" :dicArr="dicData" :queryFromFather="query" :devRoleModal="devRoleModal" :roleList="roleList" :permissionData="permissionData" :checkData="checkData" ref="role"></add-role>
		<!--用户分配模态框-->
        <apply-user :ipconfig="ipconfig" :devApplyUserModal="devApplyUserModal" :roleId="roleId" ref="apply" :dicArr="dicData"></apply-user>
    </el-container>
</template>

<script>
import gmPagination from '../../components/gmPagination'
import gmDicSpan from '../../components/gmDicSpan'
import roleService from '../../api/role-service.js'
import addRole from '../../modal/roleManage/add-role'
import applyUser from '../../modal/roleManage/apply-user'
export default {
    name: 'RoleManage',
    components: {
        gmPagination,
        gmDicSpan,
        addRole,
        applyUser
    },
    props: {
        dicData: Array,
        ipconfig: Object
    },
    data() {
        return {
            // 查询条件
            roleFilters: {},
            // 用户列表
            roleTable: [],
            // 分页条配置
            pagination: {},
            listLoading: false,
            // 弹出框配置
            devRoleModal: {},
            roleList: {},
            devApplyUserModal: {},
            roleId: '', //角色id
            // 权限数据
            checkData: [],
            permissionData: [],
            permissionTreeData: [], //获取的所有权限树
            systemData: {} //获取的所有子系统
        }
    },
    mounted() {
        let _this = this
        roleService.init(this.ipconfig.UUMS_SERVER, _this)
        // 
        _this.query()
    },
    methods: {
        // 查询用户数据
        query () {
            this.listLoading = true;
            roleService.getRoleList(this.ipconfig.UUMS_SERVER, this.roleFilters).then((res) => {
                if (res && res.success) {
                    this.roleTable = res.data.records;
                    this.$set(this.pagination, 'total', res.data.total);
                    this.listLoading = false;
                }
            }, (error) => {
                this.listLoading = false;
                this.$message.error(error.message);
            });
        },
        // 改变页数
        changeCurrent (val) {
            this.roleFilters.current = val;
            this.query();
        },
        // 条件查询
        queryData () {
            this.roleFilters.current = 1;
            this.query();
        },
        // 清空查询条件
        clear () {
            this.pagination.currentPage = 1;
            this.roleFilters = {
                current: this.pagination.currentPage
            };
            this.query();
        },
        // 用户分配  index选中条  row选中条数据
        applyUser (index, row) {
        	this.devApplyUserModal.isShow = true;
            this.roleId = row.id;
            this.$nextTick(function () {
                this.$refs.apply.loadDialogData();
            });
        },
        // 新增角色
        addNew () {
            this.devRoleModal.isShow = true;
            this.devRoleModal.title = '新增角色';
            this.roleList = {};
            if (this.permissionTreeData && this.systemData) {
            	//勾选已有权限
                this.checkData = [];
                //根据子系统分权限
                this.permissionData = roleService.connectAppPermission(this.systemData, this.permissionTreeData);
            }
            this.$nextTick(function () {
                this.$refs.role.loadDialogData();
            });
        },
        // 修改角色  index选中条  row选中条数据
        modify (index, row) {
            this.devRoleModal.isShow = true;
            this.devRoleModal.title = '修改角色信息';
            this.roleList = row;
            if (this.permissionTreeData && this.systemData) {
                //获取当前角色详细内容
                roleService.getRoleInfo(this.ipconfig.UUMS_SERVER, {roleId: row.id}).then((res) => {
                    if (res && res.success) {
                        //勾选已有权限
                        this.checkData = roleService.setCheckNodes(res.data.permissions);
                        //根据子系统分权限
                        this.permissionData = roleService.connectAppPermission(this.systemData, this.permissionTreeData);
                        this.$nextTick(function () {
                            this.$refs.role.loadDialogData();
                        });
                    }
                }, (error) => {
                    this.$message.error(error.message);
                });
            }
            
        },
        // 删除用户
        deleteRow (index, row) {
            this.$confirm('确认删除该记录吗?', '提示', {
                type: 'warning'
            }).then(() => {
                this.listLoading = true;
                let params = {roleId: row.id};
                roleService.removeRole(this.ipconfig.UUMS_SERVER, params).then((res) => {
                    this.listLoading = false;
                    this.$message({
                        message: '删除成功',
                        type: 'success'
                    });
                    this.query();
                }, (error) => {
                    this.$message.error(error.message);
                    this.listLoading = false;
                });
            })
        }
    }
}
</script>
