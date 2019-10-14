import $axios from '../utils/axios'
import RESTURL from '../config/rest-url'
let appService = {
    //获取子系统列表
    getAppList (config, params) {
        const url = config + RESTURL.app.query
        return $axios.get(url, params)
    },
    //保存新增或修改
    saveApp (config, params) {
        const url = config + RESTURL.app.save
        return $axios.post(url, params)
    },
    //删除某个子系统
    deleteApp (config, params) {
        const url = config + RESTURL.app.remove
        return $axios.post(url, params)
    },
    //获取单个app 用来获取appid  来获取字典值
    getRootId (config, params) {
        const url = config + RESTURL.app.get
        return $axios.get(url, params)
    },
    //用来获取字典值
    getDic (config, params) {
        const url = config + RESTURL.sysdic.query
        return $axios.get(url, params)
    }
}
export default appService
