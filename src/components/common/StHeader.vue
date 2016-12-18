<template>
  <div :class="pageName">
    <md-toolbar>
      <p>{{pageName}}</p>
      <router-link :to="{ name: 'Home' }"><p>Home</p></router-link>
      <router-link :to="{ name: 'About' }"><p>About</p></router-link>
    </md-toolbar>
  </div>
</template>

<script>
// ------ 宣言
import { getFileName } from 'util/index'
const componentName = getFileName(__filename)

export default {
  name: componentName,
  data () {
    return {
      pageName: componentName
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
p {
  display inline-block
  margin 0 10px
}
a
  color: #42b983
</style>
