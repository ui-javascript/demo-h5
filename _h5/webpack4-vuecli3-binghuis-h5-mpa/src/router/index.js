import Vue from "vue";
import Router from "vue-router";
import Index from "../views/index/index";

Vue.use(Router);
const router = new Router({
    routes: [
        {
            path: "/",
            name: "index",
            component: Index,
            meta: {
                title: "MPA index"
            }
        }
    ]
});
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});
export default router;
