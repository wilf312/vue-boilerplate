<template>
  <div id="app">
    <st-header></st-header>
    <!-- ルートアウトレット -->
    <!-- ルートとマッチしたコンポーネントがここへレンダリングされます -->
    <router-view></router-view>
  </div>
</template>

<script>
import StHeader from './components/common/StHeader'

export default {
  name: 'app',
  components: {
    StHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
