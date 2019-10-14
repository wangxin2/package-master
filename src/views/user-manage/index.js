import UserManage from './index.vue'

UserManage.install = (Vue) => {
    Vue.component(UserManage.name, UserManage);
};
export default UserManage;
