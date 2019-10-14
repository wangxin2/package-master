import $axios from '../utils/axios'
import RESTURL from '../config/rest-url'
let areaService = {
    // 初始化数据
    init (_this) {
        // 初始化查询表单数据
        _this.areaTable = [];
        // 弹出框配置
        _this.devAreaModal = {
            title: '配置下级菜单',
            isShow: false // 默认一开始不显示弹出框
        };
        _this.parentItem = {};
        _this.devUploadModal = {
            title: '导入区域文件',
            isShow: false // 默认一开始不显示弹出框
        };
    },
    // 初始化增加数据
    initAddModalData (_this) {
        _this.addAreaList = {};
        if (_this.isUpdata) {
            _this.addAreaList = Object.assign({}, _this.parentItem);
        };
        _this.addLoading = false;
    },
    // 初始化导入弹出框数据
    initUploadModalData (_this) {
        _this.formData = new FormData();
        _this.addLoading = false;
    },
    /**
     * @method query 查询数据
     * @param {Object} params 参数
     * @return {*|HttpPromise}
     */
    query (config, params) {
        const pPromise = $axios.get(config + RESTURL.area.query, params);
        return pPromise;
    },
    /**
     * @method remove 删除数据
     * @param {Object} params 参数
     * @param {Object} payload 请求体
     * @return {*|HttpPromise}
     */
    remove (config, payload) {
        const pPromise = $axios.post(config + RESTURL.area.remove, payload);
        return pPromise;
    },
    /**
     * @method save 保存数据
     * @param {Object} payload 请求体
     * @return {*|HttpPromise}
     */
    save (config, payload) {
        const pPromise = $axios.post(config + RESTURL.area.save, payload);
        return pPromise;
    },
    upload (config, payload) {
        const pPromise = $axios.uploadRequest(config + RESTURL.area.upload, payload);
        return pPromise;
    }
};

export default areaService;
