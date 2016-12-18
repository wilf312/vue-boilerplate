<template>
  <div :class="pageName">
    <h3>{{ title }}</h3>
    <p class="date">最終更新日 : {{ date }}</p>
    <div v-html="bodyText"></div>

    <table>
      <tr>ブラウザ</tr>
      <td>Internet Explorer 11<br>
Microsoft Edge 最新バージョン<br>
Mozilla Firefox 最新バージョン<br>
Google Chrome 最新バーション<br>
</td>
    </table>

  </div>
</template>

<script>
// ------ 宣言
import { getFileName } from 'util/index'
const componentName = getFileName(__filename)

import moment from 'moment'


export default {
  name: componentName,
  data () {
    return {
      pageName: componentName,
      title: 'このサイトについて',
      bodyText: '<h2>推奨環境について</h2>\n<p>当サイトは、以下の環境でご覧いただくことを推奨いたします。\n推奨環境以外でご利用いただいた場合や、推奨環境下でもお客さまのブラウザの設定等によっては、正しく表示されない場合がありますのでご了承ください。</p>\n',
      updatedAt: '2016-12-01 00:00',
    }
  },
  created () {
    console.log(`created ===> ${this.pageName}`)

  },
  computed: {
    date () {
      return moment(this.updatedAt).format('YYYY/M/D H:mm')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
