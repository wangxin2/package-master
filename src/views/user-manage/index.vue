<template>
  	<el-container class="container">
		<div class="search">
			<el-form :inline="true" :model="userFilters" size="small">
				<el-form-item>
					<el-input v-model="userFilters.loginName" placeholder="登录名" clearable></el-input>
				</el-form-item>
				<el-form-item>
					<el-input v-model="userFilters.realName" placeholder="姓名" clearable></el-input>
				</el-form-item>
				<el-form-item>
					<gm-tree-select :treeData="orgTree" :props="config" v-model="userFilters.orgId" placeholder="机构"/>						
				</el-form-item>
				<el-form-item> 
					<el-button type="primary" v-on:click="queryData">查询</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="clear">清除</el-button>
				</el-form-item>
				<el-form-item>
					<!-- <el-button type="primary" @click="add" v-show="hasPermission('UUMS:JGYH:YHGL:XZ', ['UUMS:JGYH:YHGL:XZ'])">新增</el-button> -->
					<el-button type="primary" @click="add">新增</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="exportData">导出</el-button>
				</el-form-item>
				<el-form-item>
					<slot name="exportTemplate"></slot>
				</el-form-item>
				<el-form-item>
					<slot name="importUserInfo"></slot>
				</el-form-item>
			</el-form>
		</div>
		<el-main>
			<el-table 
			:data="userManagementTable" 
			v-loading="listLoading" 
			class="table"
			>
				<el-table-column prop="loginName" label="登录名11"></el-table-column>
				<el-table-column prop="realName" label="姓名"></el-table-column>
				<el-table-column prop="userInfo.phone" label="电话" ></el-table-column>
				<el-table-column prop="userInfo.label" label="标签类型">
					<template slot-scope="scope">
                        <gm-dic-span type="标签类型" :binddata="scope.row.userInfo.label" :data="dicData"></gm-dic-span>
                    </template>
				</el-table-column>
				<el-table-column prop="userInfo.sex" label="性别" width="120">
					<template slot-scope="scope">
                        <gm-dic-span type="性别" :binddata="scope.row.userInfo.sex" :data="dicData"></gm-dic-span>
                    </template>
				</el-table-column>
				<el-table-column label="操作" fixed="right" width="220">
					<template slot-scope="scope">
						<!-- <el-tooltip effect="dark" content="修改" placement="top">
							
						</el-tooltip> -->
                        <el-button type="text" @click="modify(scope.$index, scope.row)" title="修改"><i class="el-icon-edit-outline" ></i></el-button>
                        <el-button type="text" @click="deleteRow(scope.$index, scope.row)" title="删除"><i class="el-icon-delete"></i></el-button>
						<el-button type="text" @click="applyRole(scope.$index, scope.row)" title="角色分配22"><i class="el-icon-share"></i></el-button>
					</template>
				</el-table-column>
			</el-table>
		</el-main>
    	
		<gmPagination :config="pagination" @changeCurrent="changeCurrent" />
		<!-- 用户详情模态框 -->
		<user-info :orgTree="orgTree" :ipconfig="ipconfig" :dicArr="dicData" @fatherMethod="query" :userDetailModal="userDetailModal" :detailList="detailList" :gmdisabled='gmdisabled'  ref="userDetail"></user-info>
		<!--权限-->
		<applyrole :ipconfig="ipconfig" :dicArr="dicData" :showApplyRole="showApplyRole" ref="applyRole"></applyrole>
		<!--修改用户信息-->
  	</el-container>
</template>

<script>
import gmTreeSelect from '../../components/gmTreeSelect'
import gmPagination from '../../components/gmPagination'
import gmDicSpan from '../../components/gmDicSpan'
import userManageService from '../../api/user-services.js'
import userInfo from '../../modal/userManage/userInfo'
import applyrole from '../../modal/userManage/apply-role'
import RESTURL from '../../config/rest-url.js'

export default {
	name: 'UserManage',
	components: {
		gmTreeSelect,
		gmDicSpan,
		gmPagination,
		userInfo,
		applyrole
	},
	props: {
		dicData: Array,
		ipconfig: Object
    },
	data() {
		return {
			userFilters: {},
            // 用户列表
            userManagementTable: [],
            // 弹出框配置
            userDetailModal: {}, // 用户详情弹出框配置
            gmdisabled: false, // 默认弹出框内的表单为flase
            // 用户详情
            detailList: {}, // 用户详情信息
            listLoading: false,
            // 分页条配置
            pagination: {},
            // 角色分配 弹出框
            showApplyRole: {
                isShow: false,
                title: '角色分配'
			},
			// 机构树
            orgTree: [],
            config: {
				value: 'id',
                label: 'name',
				children: 'childrens'
			}
		}	
	},
	mounted() {
		let _this = this;
        userManageService.init(_this);
        _this.query();
		_this.getOrgTree();
	},
	methods: {
		// 获取树机构
		getOrgTree() {
			userManageService.getOrgTree(this.ipconfig.UUMS_SERVER).then(res => {
				if(res && res.success) {
					this.orgTree = res.data
				}
			})
		},
		// 查询用户数据
		query () {
			this.listLoading = true
            userManageService.getUserList(this.ipconfig.UUMS_SERVER, this.userFilters).then((res) => {
				// console.log(res)
                if(res && res.success) {
                    let tableData = res.data.records;
                    for (let item of tableData) {
                        item.userInfo.sex = item.userInfo.sex + ''
                    }
                    this.userManagementTable = tableData
                    this.$set(this.pagination, 'total', res.data.total)
                    this.listLoading = false
                }
            }, (error) => {
				this.listLoading = false
                this.$message.error(error.message)
            });
		},
		// 改变页数
        changeCurrent (val) {
        	this.userFilters.current = val
            this.query()
        },
		// 条件查询
		queryData() {
			// 查询机构下的下级机构
			this.userFilters.childOrg = true
        	this.userFilters.current = 1			
			this.query()
		},
		// 清空查询条件
        clear () {
        	this.pagination.currentPage = 1
        	this.userFilters = {
        		current: this.pagination.currentPage
        	};
        	this.query()
        },
		// 新增用户
        add() {
			debugger
			this.gmdisabled = false
			this.userDetailModal.isShow = true
			this.userDetailModal.title = '新增用户'
            this.detailList = {}
			this.$nextTick(function () {
                this.$refs.userDetail.loadDialogData(this)                           
        	});
		},
		// 修改用户详情  index选中条  row选中条数据
		modify(index, row) {
			this.gmdisabled = true
			// 打开弹窗
			this.userDetailModal.isShow = true
			this.userDetailModal.title = '修改用户信息'
			
			this.$nextTick(function () {
				this.detailList = {}
				this.detailList = Object.assign({}, row)
				this.$set(this.detailList, 'phone', row.userInfo.phone)
				this.detailList.label = row.userInfo.label
				// 字典值必须为字符串才能正常显示
				this.detailList.sex = row.userInfo.sex + ''
                this.$refs.userDetail.loadDialogData()                        
        	});
        },
		// 删除用户
		deleteRow(index, row) {
			this.$confirm('确认删除该记录吗?', '提示', {
				type: 'warning'
			}).then(() => {
				this.listLoading = true;
				let params = {userIds: row.id};
				userManageService.removeUser(this.ipconfig.UUMS_SERVER, params).then((res) => {
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
		},
		// 导出
		exportData() {
			var params = this.ipconfig.UUMS_SERVER + RESTURL.user.exportUrl + '?token=' + GM.token + '&';
            if (this.userFilters.loginName) {
                params = params + 'loginName=' + this.userFilters.loginName + '&';
            } else if (this.userFilters.realName) {
                params = params + 'realName=' + this.userFilters.realName + '&';
            } else if (this.userFilters.orgId) {
                params = params + 'orgId=' + this.userFilters.orgId + '&';
            }
            window.location.href = params;
		},
		// 角色分配
		applyRole(index, row) {
			this.showApplyRole = {
                isShow: true,
                title: '角色分配',
                userId: row.id
            }
            // console.log(this.showApplyRole)
            this.$nextTick(function () {
                this.$refs.applyRole.loadDialogData();
            });
		}
	}
};
</script>

