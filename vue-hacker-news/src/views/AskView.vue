<template>
  <div>
    <h1>Ask List</h1>
    <div
      v-for="item in ask"
      :key="item.id"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import { fetchAskList, } from "../api"
export default {
  data() {
    return {
      ask: [],
    }
  },
  created() {
    console.log("defore request", this)

    // return axios.get
    // return new Promise
    // then을 연결할 수 있다.
    fetchAskList()
      .then((response) => {
        this.ask = response.data
      })
      .catch(error => console.log(error))
  },
  bofreMount() {

  },
  mounted() {
    // mounte에서 data요청을 하면 vue의 reactivity system 때문에 화면이 다시 그려지게 된다.
  },
}
</script>

<style scoped>

</style>
