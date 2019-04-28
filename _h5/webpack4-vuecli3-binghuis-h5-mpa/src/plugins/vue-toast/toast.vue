<template>
    <transition name="bounce">
        <div class="toast" v-show="theToast">
            {{msg}}
        </div>
    </transition>
</template>
 
<script>
export default {
    data() {
        return {
            theToast: false,
            msg: "",
            type: ""
        };
    }
};
</script>
 
<style lang="css" scoped>
.toast {
  position: fixed;
  top: 40%;
  left: 50%;
  width: 30vw;
  margin-left: -15vw;
  padding: 2vw;
  word-wrap: break-word;
  font-size: 4vw;
  color: #fff;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 2vw;
  z-index: 999;
}

.bounce-enter-active,
.bounce-leave-active {
  transition: all 0.3s ease-in-out;
}
.bounce-enter {
  transform: scale(1.2);
  opacity: 0;
}
.bounce-leave-to {
  transform: scale(0.8);
  opacity: 0;
}
</style>
