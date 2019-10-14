import AreaManager from './application.vue'

AreaManager.install = (Vue) => {
    Vue.component(AreaManager.name, AreaManager);
};
export default AreaManager;
