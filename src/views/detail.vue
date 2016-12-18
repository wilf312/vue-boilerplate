<template>
  <div :class="pageName">
    <h3>{{ title }}</h3>
    <p class="date">更新日 : {{ date }}</p>
    <div v-html="bodyText"></div>
  </div>
</template>

<script>
// ------ 宣言
import { getFileName } from 'util/index'
const componentName = getFileName(__filename)

import { mapState } from 'vuex'
import router from 'vue-router'



export default {
  name: componentName,
  data () {
    return {
      pageName: componentName,
      title: '',
      date: '',
      bodyText: '',
    }
  },
  created () {
    console.log(`created ===> ${this.pageName}`)
    console.log(this.$route.params.id)

    const pageId = this.$route.params.id

    const pageData = this.postList.find((val) => {
      if (pageId === val.id) {
        return val
      }
    })
    console.log('pageData -> ', pageData);
    console.log('undefined -> ', typeof pageData === 'undefined');
    if ( typeof pageData === 'undefined' ) {
      this.$router.replace({ name: 'Home' })
      return
    }

    this.title = pageData.title
    this.date = pageData.date
    this.bodyText = pageData.text
  },
  computed: {
    ...mapState([
      'postList'
    ])
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
