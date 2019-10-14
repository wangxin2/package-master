import $axios from '../utils/axios'
import RESTURL from '../config/rest-url'
let dictionaryService = {
    //获取字典列表
    getDicList(config, params) {
        const url = config + RESTURL.sysdic.query
        return $axios.get(url, params)
    },
    //保存
    saveDic(config, params) {
        const url = config + RESTURL.sysdic.save
        return $axios.post(url, params)
    },
    //删除
    deleteDic(config, params) {
        const url = config + RESTURL.sysdic.remove
        return $axios.post(url, params)
    },
    //同步
    publics(config, item) {
        const url = config + RESTURL.sysdic.publics;
        return $axios.get(url, { appkey: item });

    },
    /**
     * @method getNodeItem 获取被检索节点的父节点
     * @param {Array} pItems 所有节点集合
     * @param {Object} currentItems 被检索节点对象
     * @return {Object} 父节点
     */
    getNodeItem(pItems, currentItems) {
        for (var i = 0; i < pItems.length; i++) {
            if (pItems[i]['id'] === currentItems['pid']) {
                currentItems = pItems[i];
                break;
            }
            // 如果数组元素有子级，继续遍历查找
            if (pItems[i].childrens && pItems[i].childrens.length > 0) {
                currentItems = this.getNodeItem(pItems[i].childrens, currentItems)          
            }
        }
        return currentItems;
    },
    /**
     * @method getArrayByName 通过名称检索树状表格的数据
     * @param {Array} arrayData 后台接口获取的树状数据
     * @param {Object} queryName 被模糊检索的对象
     * @param {String} dataName 模糊查询的字段， 默认为“name”
     * @param {String} attChildren 子节点属性名称,默认为‘childrens’
     * @return {Array} 被筛选后的树状表格数据
     */
    getArrayByName(arrayData, queryName, dataName, attChildren) {
        if (!queryName || queryName == null) {
            return arrayData;
        }
        if (arrayData == null || arrayData.length === 0) {
            return;
        }
        dataName = dataName == null ? 'name' : dataName;
        attChildren = attChildren == null ? 'childrens' : attChildren;
        var result = [];
        for (var i = 0; i < arrayData.length; i++) {
            if (arrayData[i][dataName].indexOf(queryName) >= 0) {
                result.push(arrayData[i]);
                continue;
            }
            if (arrayData[i][attChildren] && arrayData[i][attChildren].length > 0) {
                var childResult = this.getArrayByName(arrayData[i][attChildren], queryName, dataName, attChildren);
                result = result.concat(childResult);
            }
        }
        return result;
    }
}
export default dictionaryService
