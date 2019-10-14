import $ from 'jquery';
// 引入加密插件
import CryptoJS from 'crypto-js'
let GM = {};
window.GM = GM;
/**
 * @description 基础操作API
 * @class GM.CommonOper
 * @author LP
 * @static
 */
GM.CommonOper = {
    /**
     * @description 扩展对象
     * @static
     * @method extend
     * @param dest
     *            {Object} 任意对象
     * @return {Object} 扩展后的对象
     */
    extend (dest) { // (Object[, Object, ...]) ->
        let sources = Array.prototype.slice.call(arguments, 1);
        let i;
        let j;
        let len;
        let src;

        for (j = 0, len = sources.length; j < len; j++) {
            src = sources[j] || {};
            for (i in src) {
                if (src.hasOwnProperty(i)) {
                    dest[i] = src[i];
                }
            }
        }
        return dest;
    },
    /**
     * @description 判断字符串是否为空
     * @method isStrNullOrEmpty
     * @param {String} str 字符串
     * @return {Boolean} 是否为空
     */
    isStrNullOrEmpty (str) {
        if (str == null) {
            return true;
        }
        if (!this.isString(str)) {
            return false;
        }
        let bEmpty = true;
        let pTempStr = GM.CommonOper.trimStr(str);
        for (let ii = 0; ii < pTempStr.length; ii++) {
            let pTempChar = pTempStr[ii];
            if (pTempChar !== ' ' && pTempChar !== '↵') {
                bEmpty = false;
                break;
            }
        }
        return bEmpty;
    },
    /**
     * @description 去除字符串的前后空格，包含回车字符
     * @method trimStr
     * @param {String} str 字符串
     * @return {String} 处理后的字符串
     */
    trimStr (str) {
        if (str == null || !this.isString(str)) {
            return str;
        }

        let pTempStr = str.replace(/(^\r\n*)|(\r\n*$)/g, '');
        pTempStr = pTempStr.replace(/(^\n*)|(\n*$)/g, '');
        pTempStr = pTempStr.replace(/(^\s*)|(\s*$)/g, '');
        pTempStr = pTempStr.replace(/(^\r*)|(\r*$)/g, '');
        return pTempStr;
    },
    /**
     * @description 判断参数是否为字符串
     * @method isString
     * @param {Object} obj
     * @return {Boolean} 是否为字符串
     */
    isString (obj) {
        if (obj == null) {
            return false;
        }
        return Object.prototype.toString.call(obj) === '[object String]';
    },
    /**
     * @description 判断参数是否是函数
     * @method isFunction
     * @param {Object} pObj 参数
     * @return {Boolean} 是否是一个函数
     */
    isFunction (pObj) {
        if (!pObj) {
            return false;
        }
        var bMethod = Object.prototype.toString.call(pObj) === '[object Function]';
        return bMethod;
    },
    /**
     * @description 从url地址中获取参数，没有则从cookie中获取
     * @method getParamFromUrlOrCookie
     * @param {String} strName url参数名称
     * @param {String} strCookieName cookie参数名称
     * @return {String} 值
     */
    getParamFromUrlOrCookie (strName, strCookieName) {
        let strValue = null;
        strCookieName = strCookieName == null ? strName : strCookieName;
        //先从url上获取
        let strUrl = window.location.href;
        let pParams = GM.LayoutOper.getURLParams(strUrl);
        if (pParams[strName]) {
            strValue = pParams[strName];
        } else {
            //从cookie中取
            strValue = this.getCookie(strCookieName);
        }
        return strValue;
    },
    /**
     * @description 获取指定名称的cookie值
     * @method getCookie
     * @param {String} name cookie名称
     * @return {String} cookie值
     */
    getCookie (name) {
        let strCookie = document.cookie;
        let arrCookie = strCookie.split('; ');
        for (let i = 0; i < arrCookie.length; i++) {
            let arr = arrCookie[i].split('=');
            if (arr[0] === name) {
                return unescape(arr[1]);
            }
        }
        return '';
    },
    /**
     * @description 添加一个cookie
     * @method addCookie
     * @param {String} name cookie名称
     * @param {String} value cookie值
     * @param {Number} expiresDays 多少天后会过期
     */
    addCookie (name, value, expiresDays) {
        let cookieString = name + '=' + escape(value);
        if (expiresDays > 0) {
            let date = new Date();
            date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000);
            cookieString = cookieString + ';expires=' + date.toGMTString();
        }
        cookieString += ';path=/';
        document.cookie = cookieString;
    },
    /**
     * @method removeCookie
     * @param {String} name 要删除的cookie名称
     */
    removeCookie (name) {
        let date = new Date();
        date.setTime(date.getTime() - 1);
        let cookieString = name + '=temp' + ';expires=' + date.toGMTString();
        cookieString += ';path=/';
        document.cookie = cookieString;
    },
    /**
     * 裁剪字符串后面匹配字符串
     * @param {String} str 被裁剪字符串
     * @param {String} c 裁剪字符串
     * @returns {String} 结果字符串
     */
    trimEnd (str, c) {
        if (!c || c == null || c === '') {
            return c;
        } else {
            let rg = new RegExp(c);
            let i = str.length;
            while (rg.test(str.charAt(--i)));
            return str.slice(0, i + 1);
        }
    },
    /**
     * @description 同步Ajax请求
     * @method ajaxRequest
     * @param {String} strUrl 访问路径
     * @param {Object} pData 请求数据
     * @param {Object} settings 其他配置，同JQuery里面的setting参数
     * @param {Boolean} bAddToken 是否在header上添加token值
     * @return {Object} 服务器响应返回的数据
     */
    ajaxRequest (strUrl, pData, settings, bAddToken) {
        let result = null;
        let header = {};

        //请求头添加令牌
        if (bAddToken !== false) {
            header.token = GM.token;
        }

        //如果是get请求，则加上时间戳，避免缓存
        if (settings && settings.type && settings.type.toUpperCase() === 'GET') {
            let strTime = (new Date()).getTime();
            strUrl = GM.LayoutOper.addURLParam(strUrl, 'timestamplp', strTime);
        }

        let defaultSettings = {
            type: 'post',
            url: strUrl,
            data: pData,
            async: false,
            headers: header,
            dataType: 'json',
            success: function (response, status, request) {
                let strToken = request.getResponseHeader('token');
                if (strToken != null) {
                    response.token = strToken;
                    GM.token = strToken;
                }
                result = response;
            }
        };

        defaultSettings = this.extend(defaultSettings, settings);
        $.ajax(defaultSettings);
        return result;
    },
    /**
     * @description 获取对象值
     * @method getObjectValue
     * @param {Object} pObject 要获取的对象
     * @param {Array||String} strName 要获取的对象属性
     * @return {Array||String} 获取的值
     */
    getObjectValue (pObject, strName) {
        if (pObject != null && !this.isStrNullOrEmpty(strName)) {
            try {
                var arrayName = strName.split('.');
                var pResult = null;
                if (arrayName.length === 1) {
                    pResult = pObject[arrayName[0]];
                } else if (arrayName.length === 2) {
                    pResult = pObject[arrayName[0]][arrayName[1]];
                } else if (arrayName.length === 3) {
                    pResult = pObject[arrayName[0]][arrayName[1]][arrayName[2]];
                }
                return pResult;
            } catch (ex) {
                return null;
            }
        } else {
            return null;
        }
    },
    /**
     * @description 将JSON对象解析为url参数（用于POST后台提交）
     * @method paramObject
     * @param {Object} 要解析的JSON对象
     * @return {String} 解析好的url参数
     */
    paramObject (obj) {
        if (obj == null) {
            return '';
        }
        let query = '';
        let name;
        let value;
        let fullSubName;
        let subName;
        let subValue;
        let innerObj;
        let i;
        let strTempQuery;

        for (name in obj) {
            value = obj[name];

            if (value instanceof Array) {
                for (i = 0; i < value.length; ++i) {
                    subValue = value[i];
                    if (subValue instanceof Object) {
                        fullSubName = name + '[' + i + ']';
                    } else {
                        fullSubName = name;
                    }
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    strTempQuery = this.paramObject(innerObj);
                    if (!this.isStrNullOrEmpty(strTempQuery)) {
                        query += strTempQuery + '&';
                    }
                }
            } else if (value instanceof Object) {
                for (subName in value) {
                    subValue = value[subName];
                    fullSubName = name + '.' + subName;
                    //fullSubName = name + '[' + subName + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    strTempQuery = this.paramObject(innerObj);
                    if (!this.isStrNullOrEmpty(strTempQuery)) {
                        query += strTempQuery + '&';
                    }
                }
            } else if (value !== undefined && value !== null) { query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&'; }
        }

        return query.length ? query.substr(0, query.length - 1) : query;
    },
    /**
     * @description 整理树结构
     * @method getChildrenTree
     * @param {String} param 树下节点的属性值
     * @param {Array} AtreeData 树
     */
    arrangeTree (param, AtreeData) {
        if (!param) {
            return;
        }
        let newAtreeData = AtreeData;
        pushChildren(AtreeData, newAtreeData);

        function pushChildren (ArrayData, newArrayData) {
            for (var index in ArrayData) {
                newArrayData[index]['children'] = ArrayData[index][param];
                if (ArrayData[index][param]) {
                    pushChildren(ArrayData[index][param], newArrayData[index]['children']);
                }
            }
        }
        return newAtreeData;
    },
    /**
     * @description 树形数据懒加载整理树结构
     * @method getChildrenTree
     * @param {String} param 树下节点的属性值
     * @param {Array} AtreeData 树
     */
    hasChildren (param, AtreeData) {
        pushChildren(AtreeData);
        function pushChildren (ArrayData) {
            for (var index in ArrayData) {
                if (ArrayData[index][param] && ArrayData[index][param].length > 0) {
                    ArrayData[index].hasChildren = true;
                    pushChildren(ArrayData[index][param]);
                }
            }
        }
        return AtreeData;
    },
    //判断文件类型  file 文件 type 文件类型 Excel, Img, File
    judgeFileType (file, type) {
        const filetype = file[0].name.substring(file[0].name.lastIndexOf('.')).toLowerCase();
        type = type || 'File';
        const fileTypeArray = {
            Excel: '.xlsx,.xls',
            Img: '.jpg,.jpeg,.png',
            File: '.jpg,.jpeg,.png,.pdf,.doc,.docx'
        };
        if (fileTypeArray[type].indexOf(filetype) === -1) {
            return false;
        }
        return true;
    },
    /**
     * @description 判断参数是否为对象
     * @method isObject
     * @param {Object} obj 参数
     * @return {Boolean} 是否是一个对象
     */
    isObject: function (obj) {
        if (!obj) {
            return false;
        }
        return Object.prototype.toString.call(obj) === '[object Object]';
    },
    /**
     * @description 判断两个对象是否一致，只判断值
     * @param {Object} pObj1 比较对象1
     * @param {Object} pObj2
     * @return {boolean}
     */
    _equalObject: function (pObj1, pObj2) {
        if (!this.isObject(pObj1) || !this.isObject(pObj2)) {
            return false;
        }
        var bRt = true;
        for (var key in pObj1) {
            if (this.isObject(pObj1[key])) {
                bRt = this._equalObject(pObj1[key], pObj2[key]);
                if (bRt === false) {
                    bRt = false;
                    return bRt;
                }
            } else {
                if (pObj1[key] !== pObj2[key]) {
                    return false;
                }
            }
        }
        return bRt;
    },
    /**
     * @description 判断两个参数值是否相等（只做值的判断，支持对象）
     * @param {*} val1 参数1
     * @param {*} val2 参数2
     * @returns {boolean} 是否相等
     */
    equalValue: function (val1, val2) {
        var bRt = false;
        if (this.isObject(val1)) {
            bRt = this._equalObject(val1, val2);
        } else {
            bRt = val1 === val2;
        }
        return bRt;
    },
    /**
     * @description 判断数组中是否包含该元素
     * @method isArrayContainsEle
     * @param {Array} pArray 数组
     * @param {Object} pEle 数组元素
     * @return {boolean} 是否包含
     */
    isArrayContainsEle: function (pArray, pEle) {
        if (pArray == null) {
            return false;
        }
        var bRt = false;
        for (var ii = 0; ii < pArray.length; ii++) {
            bRt = this.equalValue(pEle, pArray[ii]);
            if (bRt === true) {
                return true;
            }
        }
        return bRt;
    }
};
/**
 * @description JavaScript中的界面操作类
 * @class GM.LayoutOper
 * @static
 */
GM.LayoutOper = {
    /**
     * @description 添加URL参数
     * @method addURLParam
     * @param {String} strUrl URL
     * @param {String} strName 参数名
     * @param {String} strValue 参数值
     * @return {String} 添加参数后的全路径
     */
    addURLParam (strUrl, strName, strValue) {
        if (GM.CommonOper.isStrNullOrEmpty(strUrl)) {
            return strUrl;
        }
        if (strUrl.indexOf('?') >= 0) {
            strUrl += '&' + strName + '=' + strValue;
        } else {
            strUrl += '?' + strName + '=' + strValue;
        }
        return strUrl;
    },
    /**
     * 删除URL地址上的参数
     * @method removeURLParam
     * @param {String} strUrl URL
     * @param {String} strName 要删除的参数名
     * @return {String} 删除参数后的全路径
     */
    removeURLParam (strUrl, strName) {
        var pParams = this.getURLParams(strUrl);
        delete pParams[strName];
        var strResult = this.getURLWithoutParams(strUrl);
        for (var key in pParams) {
            strResult = this.addURLParam(strResult, key, pParams[key]);
        }
        return strResult;
    },
    /**
     * 简化URL地址，将URL的参数存入cookie中
     * @method simplyURL
     * @param {Object} pData url参数名称和cookie记录名称键值对
     * @param {String} strUrl 需要简化的地址
     */
    simplyURL (pData, strUrl) {
        if (pData == null) {
            return null;
        }
        strUrl = strUrl == null ? window.location.href : strUrl;
        var pParams = GM.LayoutOper.getURLParams(strUrl);
        var bReload = false;
        if (pData) {
            for (var key in pData) {
                if (pParams[key] != null) {
                    if (key === 'GMSSO_CLIENT_EC') {
                        //客户端令牌直接对应appkey
                        GM.CommonOper.addCookie(CONFIG.APP_KEY, pParams[key]);
                    } else {
                        //服务端令牌
                        GM.CommonOper.addCookie(pData[key], pParams[key]);
                    }
                    strUrl = GM.LayoutOper.removeURLParam(strUrl, key);
                    bReload = true;
                }
            }
        } else {
            GM.CommonOper.addCookie(CONFIG.APP_KEY, pParams['GMLOGIN_SERVER_EC']);
            strUrl = GM.LayoutOper.removeURLParam(strUrl, 'GMLOGIN_SERVER_EC');
            strUrl = GM.LayoutOper.removeURLParam(strUrl, 'GMSSO_CLIENT_EC');
        }
        //跳转
        if (bReload === true) {
            window.location.href = strUrl;
        }
    },
    /**
     * @description 获取有参数的URL
     * @method getURLParams
     * @param {String} strURL URL路径
     * @return {String} 获取到的URL
     */
    getURLParams (strURL) {
        if (GM.CommonOper.isStrNullOrEmpty(strURL)) {
            return null;
        }

        //去除最后一个斜杠
        strURL = GM.CommonOper.trimEnd(strURL, '/');

        let result = {};
        if (strURL.indexOf('?') < 0) {
            return result;
        }
        let strPath = strURL.slice(strURL.indexOf('?') + 1);
        if (strPath.indexOf('#!') > 0) {
            strPath = strPath.slice(0, strPath.indexOf('#!'));
        }
        let arrayParam = strPath.split('&');
        for (let ii = 0; ii < arrayParam.length; ii++) {
            let pParam = arrayParam[ii];
            let sub = pParam.indexOf('=');
            let arrayKeyP = pParam.substring(0, sub);
            let arrayKeyValue = pParam.substring(sub + 1, pParam.length);
            result[arrayKeyP] = decodeURIComponent(arrayKeyValue);
        }
        return result;
    },
    /**
     * @description 获取没有参数的URL
     * @method getURLWithoutParams
     * @param {String} strAbsUrl 页面全路径
     * @return {String} 获取到的URL
     */
    getURLWithoutParams (strAbsUrl) {
        let strPath = strAbsUrl;
        if (strAbsUrl.indexOf('?') > 0) {
            strPath = strAbsUrl.slice(0, strAbsUrl.indexOf('?'));
        }
        if (strPath.indexOf('#!') > 0) {
            strPath = strPath.slice(0, strPath.indexOf('#!'));
        }
        return strPath;
    },
    /**
     * @description 时间戳转换为期限
     * @method getFormatDateDate
     * @param {String} value 时间戳
     * @return {String} 获取到的URL
     */
    getFormatDateDate (value) {
        let date = new Date(value);
        let y = date.getFullYear();
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? ('0' + MM) : MM;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        /*let h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        let m = date.getMinutes();
        m = m < 10 ? ('0' + m) : m;
        let s = date.getSeconds();
        s = s < 10 ? ('0' + s) : s;*/
        return y + '-' + MM + '-' + d;
    },
    /**
     * des加密
     * @param  {String} strMessage 待加密字符串
     * @param  {String} key        加密Key
     * @return {String}            加密后结果
     */
    encryptByDES (strMessage, key) {
        key = key || '\u0067\u0072\u0065\u0061\u0074\u006d\u0061\u0070';
        // console.log('CryptoJS.enc', CryptoJS.enc)
        var keyHex = CryptoJS.enc.Utf8.parse(key);
        var encrypted = CryptoJS.DES.encrypt(strMessage, keyHex, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypted.toString();
    },
    /**
     * des解密
     * @param  {String} strMessage 带解密字符串
     * @param  {String} key        解密关键字
     * @return {String}            解决结果
     */
    decryptByDES (strMessage, key) {
        key = key || '\u0067\u0072\u0065\u0061\u0074\u006d\u0061\u0070';
        let keyHex = CryptoJS.enc.Utf8.parse(key);
        let decrypted = CryptoJS.DES.decrypt({
            ciphertext: CryptoJS.enc.Base64.parse(strMessage)
        }, keyHex, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        return decrypted.toString(CryptoJS.enc.Utf8);
    }
};
/**
 * @description 用户操作
 * @class GM.UserOper
 * @type {{}}
 */
GM.UserOper = {
    /**
     * @description 通过令牌值获取用户ID信息
     * @param {String} strUrl 请求的URL字符串
     * @param {String} strToken 令牌值
     * @return {String} 用户ID
     */
    getUserFromToken (strUrl, strToken) {
        let pResponse = GM.CommonOper.ajaxRequest(strUrl, { token: strToken }, {
            type: 'get'
        });
        let result = null;
        if (pResponse != null) {
            result = pResponse.data;
        }
        return result;
    },
    /**
     * @description 获取用户信息
     * @method getUserInfo
     * @param {String} strUserId
     * @param {String} strGetUserUrl
     * @param {String} strGetAreaUrl
     * @return {null}
     */
    getUserInfo: function (strUserId, strGetUserUrl, strGetAreaUrl, strGetRoleUrl, strOrganizationUrl) {
        GM.userInfo = GM.userInfo || top.GM.userInfo;
        if (GM.userInfo == null) {
            let pResponse = GM.CommonOper.ajaxRequest(strGetUserUrl, { userId: strUserId }, {
                type: 'get'
            });
            if (pResponse == null) {
                return null;
            }
            let userInfo = pResponse.data;
            let organizations = userInfo.organizations;
            let permissions = userInfo.permissions || [];
            let arrayAreas = [];
            let allAreaData = this._getAreaData(strGetAreaUrl);
            let strWhereSql = '';
            let arrayCodes = [];
            for (let ii = 0; ii < organizations.length; ii++) {
                let pOrgnization = organizations[ii];
                let strAreaId = pOrgnization.areaId;
                let pAreaData = this._getDataFromAreaId(strAreaId, allAreaData.data);
                if (pAreaData != null) {
                    arrayAreas.push(pAreaData);
                }

                //获取查询辖区代码
                let arrayTemp = this._getArrayCodesFromArea(pAreaData);
                if (arrayTemp != null) {
                    arrayCodes = arrayCodes.concat(arrayTemp);
                }
            }
            strWhereSql += arrayCodes.join(',');
            userInfo.whereSql = strWhereSql;
            userInfo.arrayCodes = arrayCodes;
            userInfo.areas = arrayAreas;
            GM.userInfo = userInfo;
            if (GM.userInfo.areas != null && GM.userInfo.areas[0] != null && GM.userInfo.areas[0].childrens != null) {
                GM.userInfo.regions = [GM.userInfo.areas[0]];
                GM.userInfo.regions = GM.userInfo.regions.concat(GM.userInfo.areas[0].childrens);
            } else {
                GM.userInfo.regions = GM.userInfo.areas;
            }
            this._setAreaSql(userInfo.areas);

            //获取用户权限
            GM.userInfo.permissions = [];
            if (permissions && permissions.length > 0) {
                for (let jj = 0; jj < permissions.length; jj++) {
                    GM.userInfo.permissions.push(permissions[jj].permValue);
                }
            }
            //维护机构数据
            this._setOrganization(strOrganizationUrl);

            top.GM.userInfo = top.GM.userInfo || GM.userInfo;
        }
    },
    /**
     * @description 设置组织机构信息
     * @method _setOrganization
     * @param {String} strOrganizationUrl URL地址
     * @private
     */
    _setOrganization (strOrganizationUrl) {
        let pResponse = GM.CommonOper.ajaxRequest(strOrganizationUrl, {}, {
            type: 'get'
        });
        if (pResponse == null) {
            return;
        }
        let pData = pResponse.data;
        let arrayAllData = GM.TreeOper.getAllNodes(pData, 'childrens');
        let arrayOrganizations = [];
        for (let ii = 0; ii < GM.userInfo.organizations.length; ii++) {
            let strId = GM.userInfo.organizations[ii].id;
            for (let jj = 0; jj < arrayAllData.length; jj++) {
                if (arrayAllData[jj].id === strId) {
                    arrayOrganizations.push(arrayAllData[jj]);
                    break;
                }
            }
        }
        GM.userInfo.organizations = arrayOrganizations;
    },
    /**
     * @description 设置权限信息
     * @method _setPermission
     * @param {String} strGetRoleUrl 获取权限地址
     * @private
     */
    _setPermission (strGetRoleUrl) {
        GM.userInfo.permissions = [];
        if (GM.userInfo.roles) {
            let roles = GM.userInfo.roles;
            for (let ii = 0; ii < roles.length; ii++) {
                let pRole = roles[ii];

                //获取角色信息
                let pResponse = GM.CommonOper.ajaxRequest(strGetRoleUrl, { roleId: pRole.id }, {
                    type: 'get'
                });
                if (pResponse) {
                    let roleData = pResponse.data;
                    pRole.roleData = roleData;

                    //获取权限标识符
                    if (roleData.permissions) {
                        for (let jj = 0; jj < roleData.permissions.length; jj++) {
                            GM.userInfo.permissions.push(roleData.permissions[jj].permValue);
                        }
                    }
                }
            }
        }
    },
    /**
     * @description 设置区域对应的SQL
     * @method _setAreaSql
     * @param {Array} areas 要设置的区域数组
     * @private
     */
    _setAreaSql (areas) {
        if (areas == null || areas.length <= 0) {
            return;
        }
        for (let ii = 0; ii < areas.length; ii++) {
            let pArea = areas[ii];
            let arrayTemp = this._getArrayCodesFromArea(pArea);
            if (arrayTemp != null) {
                pArea.whereSql = arrayTemp.join(',');
            }
            if (pArea.childrens) {
                this._setAreaSql(pArea.childrens);
            }
        }
    },
    /**
     * @description 使用ajax获取辖区数据
     * @method _getAreaData
     * @param {String} strAreaId 辖区ID
     * @param {String} strGetAreaUrl 后台服务路径
     * @return {object||null} 成功返回辖区数据，不成功返回null
     * @private
     */
    _getAreaData (strGetAreaUrl) {
        let pResponse = GM.CommonOper.ajaxRequest(strGetAreaUrl, {
            type: 'get'
        });
        if (pResponse) {
            return pResponse;
        }
    },
    /**
     * @description 根据辖区ID获取辖区数据
     * @method _getDataFromAreaId
     * @param {String} strAreaId
     * @param {Array} arrayData
     * @return {object||null} 成功返回辖区数据，不成功返回null
     * @private
     */
    _getDataFromAreaId (strAreaId, arrayData) {
        if (arrayData == null) {
            return null;
        }
        for (let ii = 0; ii < arrayData.length; ii++) {
            let pData = arrayData[ii];
            if (pData.id === strAreaId) {
                return pData;
            } else {
                if (pData.childrens) {
                    let result = this._getDataFromAreaId(strAreaId, pData.childrens);
                    if (result != null) {
                        return result;
                    }
                }
            }
        }
    },
    /**
     * @description 根据辖区数据获取相应的sql
     * @param {Object} pAreaData 辖区数据
     * @return {String||null} 成功就返回相应的sql,不成功返回null
     * @private
     */
    _getArrayCodesFromArea (pAreaData) {
        if (pAreaData == null) {
            return null;
        }
        if (pAreaData.code.substring(2) === '0000') {
            //省级不做筛选
            return;
        }
        let result = null;
        if (pAreaData.childrens) {
            //市级，如果有子辖区，则拼接子辖区对应的代码
            let arrayCode = [];
            for (let ii = 0; ii < pAreaData.childrens.length; ii++) {
                arrayCode.push("'" + pAreaData.childrens[ii].code + "'");
            }
            result = arrayCode;
        } else {
            result = ["'" + pAreaData.code + "'"];
        }
        return result;
    }
};
/**
 * @description 数据字典操作
 * @class GM.SysDicOper
 * @static
 */
GM.SysDicOper = {
    /**
     * @description 获取数据字典值
     * @method getSysdic
     * @param {String} strUrl 后台服务地址
     * @param {String} strAppId 通用后台管理中子系统对应的ID值
     */
    getSysdic (strUrl, strAppId) {
        GM.SysDicOper.dicData = GM.SysDicOper.dicData || top.GM.SysDicOper.dicData;
        if (GM.SysDicOper.dicData == null) {
            let pResponse = GM.CommonOper.ajaxRequest(strUrl, { appId: strAppId }, {
                type: 'get'
            });
            if (pResponse && pResponse.data) {
                this.recordDic(pResponse.data);
            }
        }
    },
    /**
     * @description 记录数据字典
     * @method recordDic
     * @param {Array} pData 要记录的数据数组
     */
    recordDic (pData) {
        GM.SysDicOper.dicData = GM.SysDicOper.dicData || top.GM.SysDicOper.dicData;
        if (!GM.SysDicOper.dicData) {
            GM.SysDicOper.dicData = {};
            for (let ii = 0; ii < pData.length; ii++) {
                this._getLeafNodes(pData[ii], GM.SysDicOper.dicData);
            }
            if (top.GM.SysDicOper.dicData == null) {
                top.GM.SysDicOper.dicData = GM.SysDicOper.dicData;
            }
        }
    },
    /**
     * @description 获取数据字典对应的label值
     * @method getLabel
     * @param {String} strType 数据字典类型
     * @param {String} strValue 数据字典值
     * @return {String} 数据字典显示值
     */
    getLabel (strType, strValue) {
        if (!strType || !strValue) {
            return null;
        }

        if (GM.SysDicOper.dicData) {
            strValue = strValue.toString();
            const arrValues = strValue.split(',');
            let arrayData = GM.SysDicOper.dicData[strType];

            if (arrayData) {
                let labels = [];
                for (let jj = 0; jj < arrValues.length; jj++) {
                    for (let ii = 0; ii < arrayData.length; ii++) {
                        if (String(arrayData[ii].value) === String(arrValues[jj])) {
                            labels.push(arrayData[ii].label);
                            break;
                        }
                    }
                }

                return labels.join(',');
            }
        }
        return null;
    },
    /**
     * @method _getLeafNodes 向指定对象添加数组数据（函数名有点问题）
     * @param {Array} pData 要添加的数据数组
     * @param {Object} pResult 要添加数据的对象
     */
    _getLeafNodes (pData, pResult) {
        if (pData.childrens) {
            for (let ii = 0; ii < pData.childrens.length; ii++) {
                let pChildItem = pData.childrens[ii];
                if (pChildItem.childrens != null) {
                    this._getLeafNodes(pChildItem, pResult);
                } else {
                    if (pChildItem.type != null && pChildItem.value != null) {
                        if (!pResult[pChildItem.type]) {
                            pResult[pChildItem.type] = [];
                        }
                        pResult[pChildItem.type].push(pChildItem);
                    }
                }
            }
        }
        if (pData.type != null && pData.value != null) {
            if (!pResult[pData.type]) {
                pResult[pData.type] = [];
            }
            pResult[pData.type].push(pData);
        }
    }
};
/**
 * @description 树节点操作类
 * @class GM.TreeOper
 * @type {{}}
 */
GM.TreeOper = {
    /**
     * @description 获取树形节点所有节点集合
     * @method getAllNodes
     * @param {Array} arrayNodes 节点集合
     * @param {String} attChildren 子节点属性名称,默认为‘children’
     * @return {Array} 节点集合
     */
    getAllNodes (arrayNodes, attChildren) {
        if (arrayNodes == null) {
            return [];
        }
        attChildren = attChildren == null ? 'children' : attChildren;
        let result = [];
        for (let ii = 0; ii < arrayNodes.length; ii++) {
            let pNode = arrayNodes[ii];
            result.push(pNode);
            if (pNode[attChildren]) {
                let arrayTempNodes = this.getAllNodes(pNode[attChildren], attChildren);
                result = result.concat(arrayTempNodes);
            }
        }
        return result;
    },
    /**
     * @description 根据参数获取节点集合
     * @method getNodesByParam
     * @param {Array} arrayNodes 节点集合
     * @param {String} strName 属性名称
     * @param {Object} pValue 属性值
     * @param {String} attChildren 子节点属性名称,默认为‘children’
     * @return {Array} 节点集合
     */
    getNodesByParam (arrayNodes, strName, pValue, attChildren) {
        let result = [];
        attChildren = attChildren == null ? 'children' : attChildren;
        let listNodes = this.getAllNodes(arrayNodes, attChildren);
        for (let ii = 0; ii < listNodes.length; ii++) {
            let pNode = listNodes[ii];
            if (String(pNode[strName]) === String(pValue)) {
                result.push(pNode);
            }
        }
        return result;
    },
    /**
     * @description 根据参数获取节点集合(不完全匹配)
     * @method getNodesLikeParam
     * @param {Array} arrayNodes 节点集合
     * @param {String} strName 属性名称
     * @param {Object} pValue 属性值
     * @param {String} attChildren 子节点属性名称,默认为‘children’
     * @return {Array} 节点集合
     */
    getNodesLikeParam (arrayNodes, strName, pValue, attChildren) {
        let result = [];
        attChildren = attChildren == null ? 'children' : attChildren;
        let listNodes = this.getAllNodes(arrayNodes, attChildren);
        for (let ii = 0; ii < listNodes.length; ii++) {
            let pNode = listNodes[ii];
            if (pNode[strName] && pNode[strName].indexOf(pValue) >= 0) {
                result.push(pNode);
            }
        }
        return result;
    },
    /**
     * @description 设置节点的父节点
     * @method setParentNode
     * @param {Array} arrayNodes 节点集合
     * @param {Object} pParent 父节点
     * @param {String} attChildren 子节点属性名称,默认为‘children’
     */
    setParentNode (arrayNodes, pParent, attChildren) {
        if (arrayNodes == null) {
            return;
        }
        attChildren = attChildren == null ? 'children' : attChildren;
        for (let ii = 0; ii < arrayNodes.length; ii++) {
            let pItem = arrayNodes[ii];
            if (pItem[attChildren]) {
                this.setParentNode(pItem[attChildren], pItem, attChildren);
            }
        }
    },
    /**
     * @description 获取父节点
     * @method getParentNode
     * @param {Array} arrayNodes 节点集合
     * @param {Object} pNode 当前节点
     * @param {String} attChildren 子节点属性名称,默认为‘children’
     * @return {Object} 父节点对象
     */
    getParentNode (arrayNodes, pNode, attChildren) {
        if (arrayNodes == null) {
            return null;
        }
        let arrayChildrenNodes = [];
        attChildren = attChildren == null ? 'children' : attChildren;
        if (GM.CommonOper.isArray(arrayNodes)) {
            arrayChildrenNodes = arrayNodes;
        } else {
            arrayChildrenNodes = arrayNodes[attChildren];
        }
        for (let ii = 0; ii < arrayChildrenNodes.length; ii++) {
            let pItemNode = arrayChildrenNodes[ii];
            if (pNode === pItemNode) {
                if (GM.CommonOper.isArray(arrayNodes)) {
                    return null;
                } else {
                    return arrayNodes;
                }
            }
            if (pItemNode[attChildren]) {
                let pTempParentNode = this.getParentNode(pItemNode, pNode, attChildren);
                if (pTempParentNode != null) {
                    return pTempParentNode;
                }
            }
        }
        return null;
    },
    /**
     * @description 删除树结点
     * @method removeNode
     * @param {Array} arrayNodes 节点集合
     * @param {Object} pNode     树结点
     * @param {String} attChildren 子节点属性字符串
     * @return {Boolean} 是否删除成功
     */
    removeNode (arrayNodes, pNode, attChildren) {
        let pParentNode = this.getParentNode(arrayNodes, pNode, attChildren);
        attChildren = attChildren == null ? 'children' : attChildren;
        let bRt = true;
        if (pParentNode) {
            bRt = GM.CommonOper.removeItemFromArray(pParentNode[attChildren], pNode);
        } else {
            bRt = GM.CommonOper.removeItemFromArray(arrayNodes, pNode);
        }
        return bRt;
    },
    /**
     * @description 更新树结点的勾选状态
     * @method updateNodeChecked
     * @param {Array} arrayNodes 节点集合
     * @param {String} attChildren 子节点属性名称
     * @param {String} attCheck 勾选状态属性名称
     */
    updateNodeChecked (arrayNodes, attChildren, attCheck) {
        if (arrayNodes == null) {
            return;
        }
        attChildren = attChildren == null ? 'children' : attChildren;
        attCheck = attCheck == null ? 'check' : attCheck;
        for (let ii = 0; ii < arrayNodes.length; ii++) {
            let pNode = arrayNodes[ii];
            if (pNode[attChildren]) {
                //先维护子节点的勾选状态
                this.updateNodeChecked(pNode[attChildren], attChildren, attCheck);

                //再依据子节点的选中状态更新自身的选中状态
                let bChecked = null;
                for (let jj = 0; jj < pNode[attChildren].length; jj++) {
                    let pChildNode = pNode[attChildren][jj];
                    pChildNode[attCheck] = pChildNode[attCheck] == null ? false : pChildNode[attCheck];
                    if (bChecked == null) {
                        bChecked = pChildNode[attCheck];
                    } else if (bChecked !== pChildNode[attCheck]) {
                        bChecked = null;
                        pNode.checkMix = true;
                        break;
                    }
                }
                if (bChecked != null) {
                    pNode.checkMix = false;
                    pNode[attCheck] = bChecked;
                }
            }
        }
    },
    /**
     * @method setNodesLevel 设置树节点的等级值
     * @param  {Array} arrayNodes 树节点集合
     * @param {String} attChildren="children" 子节点属性名称
     * @param {String} strLevelName="level" 等级属性名称
     * @param {Number} nLevel=0 设置当前节点等级
     * @return {Boolean} 是否设置成功
     */
    setNodesLevel (arrayNodes, attChildren, strLevelName, nLevel) {
        strLevelName = strLevelName == null ? 'level' : strLevelName;
        attChildren = attChildren == null ? 'children' : attChildren;
        nLevel = nLevel == null ? 0 : nLevel;
        if (arrayNodes == null) {
            return false;
        }
        for (let ii = 0; ii < arrayNodes.length; ii++) {
            let pNode = arrayNodes[ii];
            pNode[strLevelName] = nLevel;
            let childrenNodes = pNode[attChildren];
            this.setNodesLevel(childrenNodes, attChildren, strLevelName, pNode[strLevelName] + 1);
        }
    }
};
export default GM;
