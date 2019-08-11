import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const types = {
  SETPAGEID: 'SETPAGEID',
  SETCVSTORE: 'SETCVSTORE'
}

const rootStore = {
  state: {
    pageId: '',
    cvStore: ''
  },
  getters: {
    getPageId: state => state.pageId,
    getCvStore: state => state.cvStore
  },
  actions: {
    setPageId ({ commit }, pageId) {
      commit(types.SETPAGEID, pageId)
    },
    setCvStore ({ commit }, cvStore) {
      commit(types.SETCVSTORE, cvStore)
    }
  },
  mutations: {
    /**
     *
     * 設定pageId
     * @param {String} pageId
     */
    [types.SETPAGEID] (state, pageId) {
      state.pageId = pageId
    },
    /**
     *
     * 設定 cvStore
     * @param {String} cvStore
     */
    [types.SETCVSTORE] (state, cvStore) {
      state.cvStore = cvStore
    }
  }
}

export default new Vuex.Store({
  ...rootStore,

  // 嚴格模式，禁止直接修改state
  strict: false
})
