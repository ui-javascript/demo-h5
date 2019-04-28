// import "../../utils/timing";
import "../../lib/flexible_css.debug";
import "../../lib/flexible.debug";
import Vue from "vue";
import store from "../../store/index";
import VueToast from "../../plugins/vue-toast/toast";
import { post, fetch, patch, put } from "../../http";
import Demo from "./demo.vue";

Vue.use(VueToast);
// 定义全局变量
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;

Vue.config.productionTip = false;
window.CURRENTMODE = process.env.VUE_APP_CURRENTMODE;

new Vue({
    store,
    render: h => h(Demo)
}).$mount("#app");
