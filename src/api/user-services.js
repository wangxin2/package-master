import $axios from '../utils/axios'
import RESTURL from '../config/rest-url'

const userManageService = {
    // 初始化数据
    init (_this) {
        // 初始化分页条
        _this.pagination = {
            currentPage: 1,
            layout: ['total', 'jumper']
        }
        // 初始化查询表单数据
        _this.userFilters = {
            current: _this.pagination.currentPage
        }
        _this.userDetailModal = {
            title: '用户详情',
            isShow: false // 默认一开始不显示弹出框
        }
    },
    initApplyModalData (_this) {
        // 初始化分页条
        _this.pagination = {
            currentPage: 1
        }
        // tab页配置
        _this.tabs = [
            {
                label: '全部角色',
                name: 'true'
            }, {
                label: '已分配角色',
                name: 'false'
            }
        ]
        // 默认选中tab页第一个
        _this.activeStatus = _this.tabs[0].name
        // 初始化查询表单数据
        _this.userFilters = {
            current: _this.pagination.currentPage,
            bool: _this.activeStatus,
            roleId: _this.roleId
        }
    },
    // 获取用户列表
    getUserList(config, params) {
        const url = config + RESTURL.user.query
        return $axios.get(url, params)
    },
    // 保存--新增/修改用户
    saveUser (config, params) {
        const url = config + RESTURL.user.save
        return $axios.post(url, params)
    },
    // 删除用户
    removeUser (config, params) {
        const url = config + RESTURL.user.remove       
        return $axios.get(url, params)
    },
    // 获取用户信息（角色）
    getUserInfo (config, params) {
        const url = config + RESTURL.user.queryUser    
        return $axios.get(url, params)
    },
    // 分配/取消分配角色
    addOrDeleteRole (config, params) {
        const url = config + RESTURL.user.addOrDeleteRole    
        return $axios.post(url, params)
    },
    // 获取机构树
    getOrgTree(config, params) {
        const url = config + RESTURL.organization.query
        return $axios.get(url, params)
    }
}

export default userManageService