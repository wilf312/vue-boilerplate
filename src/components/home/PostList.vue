<template>
  <div :class="pageName">
    <ul>
      <li v-for="data in postList">
        <router-link :to="{ name: 'Detail', params: { id: data.id } }">
          <md-card :md-with-hover="true">
            <md-card-header>
              <md-card-header-text>
                <div class="md-title" v-text="data.title"></div>
                <div class="md-subhead" v-text="data.date">Subtitle here</div>
              </md-card-header-text>
            </md-card-header>

            <md-card-media>
              <img :src="img" alt="People">
            </md-card-media>

            <md-card-content v-text="data.text"></md-card-content>
          </md-card>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// ------ 宣言
import { getFileName } from 'util/index'
const componentName = getFileName(__filename)


import img from 'assets/cat.jpg'
import { mapState } from 'vuex'

export default {
  name: componentName,
  computed: {
    ...mapState([
      'postList'
    ])
  },
  data () {
    return {
      pageName: componentName,
      img: img,
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
li
  list-style: none

  a
    &:hover
      color black


</style>
