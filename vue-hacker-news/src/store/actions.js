import { fetchUserInfo, fetchAskItem, fetchList, } from "../api/index.js"

export default {
  FETCH_USER({commit, }, userName) {
    return fetchUserInfo(userName)
      .then(response => {
        commit("SET_USER", response.data)
      })
      .catch(error => {
        throw new Error(error)
      })
  },
  FETCH_ASK_ITEM({ commit, }, askItem) {
    return fetchAskItem(askItem)
      .then(response => {
        commit("SET_ASK_ITEM", response.data)
      })
      .catch(error => {
        throw new Error(error)
      })
  },
  // 2
  FETCH_LIST({ commit, }, pageName) {
    return fetchList(pageName)
      .then((response) => {
        commit("SET_LIST", response.data)

        return response
      })
      .catch(error => console.log(error))
  },
}
