// rest请求配置
const RESTURL = {
    token: 'checkTokenByAppKey',
    // 用户管理
    user: {
        query: 'user/page', // 查询用户列表
        save: 'user/save', // 保存用户新增/修改
        remove: 'user/delete', // 删除用户
        queryUser: 'user/get', // 获取用户信息 （角色）
        addOrDeleteRole: 'user/updateUserRole', 
        applyedUser: 'user/pageUserRole',
        exportUrl: 'user/export',
        orgUser: 'user/getOrgUser'
    },
    // 子系统
    app: {
        query: 'app/list',
        save: 'app/save',
        remove: 'app/delete',
        updatePermission: 'app/updateAppLoginPerm',
        get: 'app/get' // 获取单个app
    },
    // 机构管理
    organization: {
        query: 'organization/tree',
        save: 'organization/save',
        remove: 'organization/delete'
    },
    // 节假日管理
    holiday: {
        query: 'holiday/list',
        save: 'holiday/save',
        remove: 'holiday/delete',
        setWeekend: 'holiday/settingsWeekends'
    },
    // 区域管理
    area: {
        query: 'area/tree',
        save: 'area/save',
        remove: 'area/delete',
        upload: 'area/upload'
    },
    // 权限
    permission: {
        query: 'permission/tree',
        save: 'permission/save',
        remove: 'permission/delete'
    },
    // 角色管理
    role: {
        query: 'role/list',
        save: 'role/save',
        remove: 'role/delete',
        queryRole: 'role/get',
        organByroleId: 'role/getUserByRoleId',
        addOrDeleteUser: 'role/updateUserRole'
    },
    // 日志管理
    log: {
        query: 'log/list',
        exportUrl: 'log/export'
    },
    // 字典管理
    sysdic: {
        query: 'dict/tree',
        save: 'dict/save',
        remove: 'dict/delete',
        publics: 'dict/publishDictToApp',
        copy: 'dict/copy'
    },
    file: {
      	fileSave: 'file/uploadFile'
    },
    // 序列号规则
    serialize: {
        querySer: 'seq/Sequence/getPage', // 分页获取序列号
        querySerList: 'seq/Sequence/getList',
        queryRule: 'seq/rule/getPageBySeqId', // 根据ID获取序列规则
        saveSer: 'seq/Sequence/insertOrUpdate', // 添加或修改序列号
        saveRule: 'seq/rule/insertOrUpdateRule', // 新增或修改序列号的规则
        queryRecData: 'seq/Recycle/getPage', // 序列号回收列表
        queryHisData: 'seq/History/getPage', // 序列号历史列表
        getDicsData: 'seq/selectEnums',
        deleteSer: 'seq/Sequence/del', // 删除序列号
        recycle: 'seq/Recycle/recycle', // 回收序列号
        deleteHis: 'seq/History/del', // 删除序列号历史
        deleteRule: 'seq/rule/del' // 删除序列号的规则
    },
    // 注册审核
    approve: {
        query: 'userRegister/selectPage',
        showDetail: 'userRegister/getById',
        approveUser: 'userRegister/check'
    },
    //标签管理
    label: {
        query: 'LabelLabel/getLabelList',
        queryLabelType: 'LabelGroup/getLabelGroupList',
        saveLabel: 'LabelLabel/saveLabelList',
        saveLabelType: 'LabelGroup/addLabelGroup',
        updateLabelType: 'LabelGroup/updateLabelGroup',
        removeLabel: 'LabelLabel/delLabelList',
        removeLabelType: 'LabelGroup/deleteLabelGroup'
    }
};

export default RESTURL;
