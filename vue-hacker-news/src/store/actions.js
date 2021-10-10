import { fetchUserInfo, fetchAskItem, fetchList, } from "../api/index.js"

export default {
  async FETCH_USER({ commit, }, userName) {
    // async는 어떤 값을 return하는 것에 관계없이 promise를 반환하게 된다.
    try {
      const response = await fetchUserInfo(userName)

      commit("SET_USER", response.data)

      return response
    } catch (error) {
      throw new Error(error)
    }
  },
  async FETCH_ASK_ITEM({ commit, }, askItem) {
    try {
      const { data, } = await fetchAskItem(askItem)

      commit("SET_ASK_ITEM", data)

      return data
    }
    catch (error) {
      throw new Error(error)
    }
  },
  async FETCH_LIST({ commit, }, pageName) {
    const response = await fetchList(pageName)

    console.log("actions", typeof response)
    commit("SET_LIST", response.data)

    return response
  },
}
