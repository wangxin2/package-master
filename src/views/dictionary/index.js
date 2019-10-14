import dictionary from './dictionary.vue'

dictionary.install = (Vue) => {
    Vue.component(dictionary.name, dictionary);
};
export default dictionary;
