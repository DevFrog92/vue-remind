import axios from "axios"

// 1. HTTP Request & Response의 관련 기본 설정
const config = {
  baseUrl: "https://api.hnpwa.com/v0",
}

// 2. API 함수들을 정리
function fetchUserInfo(userName) {
  return axios.get(`${config.baseUrl}/user/${userName}.json`)
}

function fetchAskItem(itemId) {
  return axios.get(`${config.baseUrl}/item/${itemId}.json`)
}

async function fetchList(pageName) {
  try {
    const response = await axios.get(`${config.baseUrl}/${pageName}/1.json`)

    return response
  } catch (error) {
    console.log(error)
  }
}

export {
  fetchUserInfo,
  fetchAskItem,
  fetchList,
}
