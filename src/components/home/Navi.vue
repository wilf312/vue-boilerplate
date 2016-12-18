<template>
  <div :class="pageName">
    <ul>
      <li v-for="data in postList">
        <router-link :to="{ name: 'Detail', params: { id: data.id } }">
          {{data.title}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// ------ 宣言
import { getFileName } from 'util/index'
const componentName = getFileName(__filename)

import { mapGetters } from 'vuex'

export default {
  name: componentName,
  data () {
    return {
      pageName: componentName
    }
  },
  computed: {
    ...mapGetters([
      'postList',
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
li {
  list-style none
}
</style>
