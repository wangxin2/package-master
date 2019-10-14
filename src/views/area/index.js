import app from './area.vue'

app.install = (Vue) => {
    Vue.component(app.name, app);
};
export default app;
