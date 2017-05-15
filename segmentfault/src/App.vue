<template>
  <div id="app">
    <transition name="fade">
      <router-view class="mainContent"></router-view>
    </transition>
    <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/commonComps/Tabbar'
export default {
  name: 'app',
  data () {
    return {}
  },
  components: {
    'tabbar': Tabbar
  }
}
</script>

<style>
.mainContent{
  transition: all .2s ease-out;
}
.fade-leave-active,.fade-enter-active {
  opacity: 0.4;
}
</style>
