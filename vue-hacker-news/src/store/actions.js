import { fetchUserInfo, fetchAskItem, fetchList, } from "../api/index.js"

export default {
  FETCH_USER({commit, }, userName) {
    fetchUserInfo(userName)
      .then(response => {
        commit("SET_USER", response.data)
      })
      .catch(error => {
        throw new Error(error)
      })
  },
  FETCH_ASK_ITEM({ commit, }, askItem) {
    fetchAskItem(askItem)
      .then(response => {
        commit("SET_ASK_ITEM", response.data)
      })
      .catch(error => {
        throw new Error(error)
      })
  },
  FETCH_LIST({commit, }, pageName) {
    fetchList(pageName)
      .then(({data, }) => {
        commit("SET_LIST", data)
      })
      .catch(error => console.log(error))
  },
}
