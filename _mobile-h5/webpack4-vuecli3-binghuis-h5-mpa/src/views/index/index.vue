<template>
  <div class="index">
      <div class="toDemoPage" @click="toDemoPage">
          这是个去demo页的button
      </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: "index",
    data: function() {
        return {};
    },
    created() {},
    mounted() {},
    methods: {
        toDemoPage() {
            window.location.href = "demo.html";
        }
    },
    components: {}
};
</script>

<style scoped lang="scss">
@import url("./index.sass");
</style>
