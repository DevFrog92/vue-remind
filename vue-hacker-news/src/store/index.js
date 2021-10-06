import Vue from "vue"
import Vuex from "vuex"
import actions from "./actions"
import mutations from "./mutations"

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: {},
    askItem: {},
    lists: [],
  },
  getters: {
    fetchedAsk(state) {
      return state.ask
    },
    fetchedItem(state) {
      return state.askItem
    },
  },
  mutations,
  actions,
})
