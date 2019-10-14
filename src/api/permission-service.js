import $axios from '../utils/axios'
import RESTURL from '../config/rest-url'
let permissionService = {
    //获取权利列表
    getList (config, params) {
        const url = config + RESTURL.permission.query
        return $axios.get(url, params)
    },
    //保存
    savePermission (config, params) {
        const url = config + RESTURL.permission.save
        return $axios.post(url, params)
    },
    //删除
    deletePermission (config, params) {
        const url = config + RESTURL.permission.remove
        return $axios.post(url, params)
    }
}
export default permissionService
