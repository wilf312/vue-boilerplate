import Vuex from 'vuex'
import Vue from 'vue'
import {
  SET_HOME,
  SET_DETAIL,
} from 'vuexDir/mutation-types'

Vue.use(Vuex)


import moment from 'moment'
import _ from 'lodash'


// ----------------- API
function createPost () {

  const randomId = _.random(0, 100000)
  const postData = {
    id: randomId,
    title: '記事のタイトル' + randomId,
    text: `
記事の内容です。
vuejs、vuex、vue-routerのボイラーテンプレートです
    `,
    date: moment('2016-12-18 13:00').format('YYYY/M/D H:mm'),
  }

  return postData
}


// ----------------- Action
const actions = {
  [SET_HOME] ({ commit, state }) {

    commit(SET_HOME, createPost())
  },
  [SET_DETAIL] ({ commit, state }, { webEventId }) {
  },
}


// ----------------- Getter
const getters = {
  postList: state => state.postList,
}


var postList = []
postList.push(createPost())
postList.push(createPost())
postList.push(createPost())
postList.push(createPost())
postList.push(createPost())


export default new Vuex.Store({
  state: {
    postList: postList,
  },
  actions,
  getters,
  mutations: {
    [SET_HOME] (state, data) {
      state.postList.push(data)
    },
    [SET_DETAIL] (state, data) {
    },
  }
})
