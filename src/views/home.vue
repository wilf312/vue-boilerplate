<template>
  <div :class="pageName">
    <div class="main-content">
      <navi></navi>
      <post-list></post-list>
    </div>
  </div>
</template>

<script>
// ------ 宣言
import { getFileName } from 'util/index'
const componentName = getFileName(__filename)

// -- コンポーネント
import Navi from 'components/home/Navi'
import PostList from 'components/home/PostList'


import {
  SET_HOME,
} from 'vuexDir/mutation-types'


export default {
  name: componentName,
  data () {
    return {
      pageName: componentName
    }
  },
  components: {
    Navi,
    PostList
  },
  created () {
    console.log(`created ===> ${this.pageName}`)

    // vuex お知らせバナー、カテゴリ、外部バナーの取得
    this.$store.dispatch(SET_HOME)
  }
}
</script>


<style lang="stylus" scoped>
.Navi
  width: 20%
  float: left

.PostList
  width: 80%
  float: right
</style>
