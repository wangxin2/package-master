import areaService from './area-service';
// import dictionaryService from './dictionary-service';
import $axios from '../utils/axios'
import RESTURL from '../config/rest-url'
import config from '../config/config'
let orgizaionService = {
	areaData: [], //区域树
    // 初始化数据
    init (_this) {
        // 初始化查询表单数据
        _this.orgTable = [];
        // 弹出框配置
        _this.devOrgModal = {
            title: '配置下级菜单',
            isShow: false // 默认一开始不显示弹出框
        };
        _this.parentItem = {};
        this.getAreaData();
    },
    // 初始化增加数据
    initAddModalData (_this) {
        _this.addOrgList = {};
        if (_this.isUpdata) {
            _this.addOrgList = Object.assign({}, _this.parentItem);
        };
        //获取区域
        _this.treeData = this.areaData;
        _this.addLoading = false;
    },
    /**
     * @method getAreaData 获取区域数据
     * @param {Object} _this 参数
     * @return {*|HttpPromise}
     */
    getAreaData () {
    	let _this = this;
    	//查询区域数据
        areaService.query(config.UUMS_SERVER, {}).then(function (response) {
            // if (GM.userInfo.areas[0].code % 10000 !== 0) {
            //     _this.areaData = dictionaryService.getArrayByName(response.data, GM.userInfo.areas[0].title, 'title', null);
            // } else {
            //     _this.areaData = response.data;
            // }
            _this.areaData = response.data;
        }, function () {});
    },
    /**
     * @method query 查询数据
     * @param {Object} params 参数
     * @return {*|HttpPromise}
     */
    query (config, params) {
        const pPromise = $axios.get(config + RESTURL.organization.query, params);
        return pPromise;
    },
    /**
     * @method remove 删除数据
     * @param {Object} params 参数
     * @param {Object} payload 请求体
     * @return {*|HttpPromise}
     */
    remove (config, payload) {
        const pPromise = $axios.post(config + RESTURL.organization.remove, payload);
        return pPromise;
    },
    /**
     * @method save 保存数据
     * @param {Object} payload 请求体
     * @return {*|HttpPromise}
     */
    save (config, payload) {
        const pPromise = $axios.post(config + RESTURL.organization.save, payload);
        return pPromise;
    }
};

export default orgizaionService;
