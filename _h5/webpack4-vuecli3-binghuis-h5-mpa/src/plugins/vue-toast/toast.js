import ToastComponent from "./toast.vue"; // 引入先前写好的vue

const Toast = {};

// 注册Toast
Toast.install = function(Vue) {
    // 生成一个Vue的子类
    const ToastConstructor = Vue.extend(ToastComponent);
    // 生成一个该子类的实例
    const instance = new ToastConstructor();

    // 将这个实例挂载在我创建的div上
    // 并将此div加入全局挂载点内部
    instance.$mount(document.createElement("div"));
    document.body.appendChild(instance.$el);

    // 通过Vue的原型注册一个方法
    // 让所有实例共享这个方法
    Vue.prototype.$toast = (ops = {}) => {
        ops = Object.assign(
            {
                msg: "",
                duration: 1250,
                type: "" // success, fail, loadstart, loadend
            },
            ops
        );
        instance.msg = ops.msg;
        instance.type = ops.type;
        instance.theToast = true;
        let t = null;
        switch (instance.type) {
            case "loadstart":
                instance.theToast = true;
                break;
            case "loadend":
                instance.theToast = false;
                break;
            default:
                t = setTimeout(() => {
                    instance.theToast = false;
                    clearTimeout(t);
                }, ops.duration);
                break;
        }
    };
};

export default Toast;
