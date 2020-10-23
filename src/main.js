import Vue from 'vue'
import ElementUI from 'element-ui';
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css';
import analytics from "@/components/analytics";
import auth from "@/components/auth";


import App from './App.vue'

Vue.use(ElementUI);
Vue.use(VueRouter);

Vue.config.productionTip = false


const routes = [
    {path: '', component: auth},
    {path: '/analytics', component: analytics}
]

const router = new VueRouter({
    routes
})


new Vue({
    el: '#app',
    router,
    render: h => h(App),
}).$mount('#app')



