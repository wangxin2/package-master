import $axios from '../utils/axios'
import RESTURL from '../config/rest-url'
import permissionService from './permission-service'
import appService from './app-service'

let roleService = {
    // 初始化数据
    init (config, _this) {
        // 初始化分页条
        _this.pagination = {
            currentPage: 1
        };
        // 初始化查询表单数据
        _this.roleFilters = {
            current: _this.pagination.currentPage
        };
        // 弹出框配置
        _this.devRoleModal = {
            title: '配置角色',
            isShow: false // 默认一开始不显示弹出框
        };
        _this.devApplyUserModal = {
            title: '分配用户',
            isShow: false // 默认一开始不显示弹出框
        };
        // 获取权限树数据
        this.getPemissionData(config, _this);
        // 获取所有子系统
        this.getSystemData(config, _this);
    },
    // 定义弹出框初始化
    initAddModalData (_this) {
        _this.addRoleList = {};
        if (_this.roleList) {
            _this.addRoleList = Object.assign({}, _this.roleList);
        }
        _this.addRoleList.permissionIds = _this.checkData;
        _this.data = _this.permissionData;
        _this.$refs.tree.setCheckedKeys(_this.checkData);
    },
    // 初始化分配用户弹出框
    initApplyModalData (_this) {
        // 初始化分页条
        _this.pagination = {
            currentPage: 1
        };
        // tab页配置
        _this.tabs = [
            {
                label: '可分配用户',
                name: 'false'
            }, {
                label: '已分配用户',
                name: 'true'
            }
        ];
        // 默认选中tab页第一个
        _this.activeStatus = _this.tabs[0].name;
        // 初始化查询表单数据
        _this.userFilters = {
            current: _this.pagination.currentPage,
            bool: _this.activeStatus,
            roleId: _this.roleId
        };
    },
    // 获取子系统
    getSystemData (config, _this) {
        appService.getAppList(config).then((res) => {
            if (res && res.success) {
                _this.systemData = res.data.records;
            }
        }, (error) => {
            this.$message.error(error.message);
        });
    },
    // 获取权限
    getPemissionData (config, _this) {
        permissionService.getList(config).then((res) => {
            if (res && res.success) {
                _this.permissionTreeData = res.data;
            }
        }, (error) => {
            this.$message.error(error.message);
        });
    },
    /**
     * @method setCheckNodes 确定需要勾选的节点，给数据增加字段check，并赋值true
     * @param {Array} arrayArray 需要设置勾选的机构集合
     * @return {Array} 节点集合
     */
    setCheckNodes (arrayArray) {
        if (arrayArray == null) {
            return [];
        }
        let arrayid = [];
        for (var ii = 0; ii < arrayArray.length; ii++) {
            arrayid.push(arrayArray[ii].id);
        }
        return arrayid;
    },
    /**
     * @method connectAppPermission 将权限按子系统分类形成权限树
     * @param {Array} applications 所有子系统
     * @param {Array} permissions 所以权限
     * @return {Array} 关联子系统后的权限
     */
    connectAppPermission (applications, permissions) {
        if (applications == null || permissions == null) {
            return;
        }
        let applicationsCopy = JSON.parse(JSON.stringify(applications));
        let permissionsCopy = JSON.parse(JSON.stringify(permissions));
        for (var i = 0; i < applicationsCopy.length; i++) {
            applicationsCopy[i].childrens = [];
            for (var j = 0; j < permissionsCopy.length; j++) {
                if (permissionsCopy[j].appId === applicationsCopy[i].id) {
                    if (permissionsCopy[j].type === 1) {
                        permissionsCopy[j].title = permissionsCopy[j].title + ' (数据权限)';
                    } else if (permissionsCopy[j].type === 0) {
                        permissionsCopy[j].title = permissionsCopy[j].title + ' (菜单权限)';
                    }
                    if (permissionsCopy[j].childrens && permissionsCopy[j].childrens.length > 0) {
                        processData(permissionsCopy[j].childrens);
                    }
                    applicationsCopy[i].childrens.push(permissionsCopy[j]);
                }
            }
        }

        function processData (permissionsChildrens) {
            let permissionData = permissionsChildrens;
            for (let ii = 0; ii < permissionData.length; ii++) {
                if (permissionData[ii].appId === applicationsCopy[i].id) {
                    if (permissionData[ii].type === 1) {
                        permissionData[ii].title = permissionData[ii].title + ' (数据权限)';
                    } else if (permissionsCopy[j].type === 0) {
                        permissionData[ii].title = permissionData[ii].title + ' (菜单权限)';
                    }
                }
                if (permissionData[ii].childrens && permissionData[ii].childrens.length > 0) {
                    processData(permissionData[ii].childrens);
                }
            }
        }
        return applicationsCopy;
    },
    // 获取角色列表
    getRoleList (config, params) {
        const url = config + RESTURL.role.query;
        return $axios.get(url, params);
    },
    // 获取角色详情
    getRoleInfo (config, params) {
        const url = config + RESTURL.role.queryRole;
        return $axios.get(url, params);
    },
    // 删除角色
    removeRole (config, params) {
        const url = config + RESTURL.role.remove;
        return $axios.post(url, params);
    },
    // 保存新增修改数据
    save (config, params) {
        const url = config + RESTURL.role.save;
        return $axios.post(url, params);
    },
    /* 获取角色用户
     * tableData Array 需要绑定的表格
     */
    queryUser (config, params, _this) {
        const url = config + RESTURL.user.applyedUser;
        _this.listLoading = true;
        $axios.get(url, params).then((res) => {
            if (res && res.success) {
                console.log(res)
                _this.userTable = res.data.records;
                _this.$set(_this.pagination, 'total', res.data.total);
                _this.listLoading = false;
            }
        }, (error) => {
            this.$message.error(error.message);
        });
    },
    //分派或移除用户in role
    addOrDeleteUser (config, params) {
        const url = config + RESTURL.role.addOrDeleteUser;
        return $axios.post(url, params);
    }
}

export default roleService;
