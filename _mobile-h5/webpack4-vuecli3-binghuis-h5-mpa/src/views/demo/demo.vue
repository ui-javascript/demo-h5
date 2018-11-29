<template>
  <div class="demo">
      <div class="flexible" @click="tapHandle">
          一个宽755px的div：测试flexible适配效果
      </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: "demo",
    data: function() {
        return {};
    },
    created() {},
    mounted() {},
    methods: {
        async tapHandle() {
            try {
                this.$toast({ msg: "v-tap", type: "" }); // toast插件type支持success, fail, loadstart, loadend，相对应效果图暂时还没有添加
                let res = await this.$fetch("", { a: 1 });
                console.log(res.data);
            } catch (error) {
                console.log(error);
            }
        }
    },
    components: {}
};
</script>

<style scoped lang="scss">
@import url("./demo.sass");
</style>
