import Permission from './index.vue'

Permission.install = (Vue) => {
    Vue.component(Permission.name, Permission);
};
export default Permission;
