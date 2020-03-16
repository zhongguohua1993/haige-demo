import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  login: {
    status: false,
    userName: '一只帅哥',
    miniLoginShow: false
  }
}

const mutations = {
  login (state) {
    state.login.status = true
  },
  logout (state) {
    state.login.status = false
  },
  toggleMiniLogin (state, visible) {
    if (visible !== undefined) {
      state.login.miniLoginShow = visible
    } else {
      state.login.miniLoginShow = !state.login.miniLoginShow
    }
  }
}
export default new Vuex.Store({
  state,
  mutations
})
