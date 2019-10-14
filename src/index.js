// 插件
import './plugins/element';

// styles
import './styles/public.scss';
import './styles/el-public.less';

// 用户管理
import UserManage from './views/user-manage/index.js';
// 权限管理
import Permission from './views/permission/index.js';
// 角色管理
import RoleManage from './views/role-manage/index.js';
// 字典管理
import Dictionary from './views/dictionary/index.js'
// 区域管理
import Orgnization from './views/orgnization/index.js'
// 区域管理
import AreaManager from './views/area/index.js'
// 子系统管理
import App from './views/app-manage/index.js'

const install = function(Vue, opts = {}) {
	Vue.prototype.hasPermission = (strPermission, arrayPermission) => {
       let returnValues = [true, false];
       if (GM.CommonOper.isStrNullOrEmpty(strPermission)) {
           return returnValues[0];
       }
       if (arrayPermission == null) {
          return returnValues[1];
       }
       let strArrayPermission = strPermission.split(',');
       for (let ii = 0; ii < strArrayPermission.length; ii++) {
           if (!GM.CommonOper.isArrayContainsEle(arrayPermission, strArrayPermission[ii])) {
               return returnValues[1];
           }
       }
       return returnValues[0];
	}
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
	install,
	UserManage,
	Permission,
	RoleManage,
	Dictionary,
	Orgnization,
	AreaManager,
	App
};
