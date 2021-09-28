<template>
  <div>
    <section>
      <!-- 질문 상세 정보 -->
      <div class="user_container">
        <div>
          <i class="fas fa-user" />
        </div>
        <div class="user_desc">
          <router-link :to="`/user/${item.user}`">
            {{ item.user }}
          </router-link>
          <div class="time">
            {{ item.time_ago }}
          </div>
        </div>
      </div>
      <h2>{{ item.title }}</h2>
      <div class="content" />
    </section>
    <section>
      <!-- 댓글  -->
    </section>
  </div>
</template>

<script>
import { mapGetters, } from "vuex"
export default {
  data() {
    return {
      itemContentElem: null,
    }
  },
  computed: {
    ...mapGetters({
      item: "fetchedItem",
    }),
  },
  watch: {
    item() {
      this.setContent()
    },
  },
  mounted() {
    this.itemContentElem = document.querySelector(".content")
    this.setContent()
  },
  created() {
    const itemId = this.$route.params.id

    this.$store.dispatch("FETCH_ASK_ITEM", itemId)
  },
  methods: {
    setContent() {
      this.itemContentElem.innerHTML = this.item.content
    },
  },
}
</script>

<style scoped>
.user_container {
  padding:0.5rem;
  display: flex;
  align-items: center;
}

.fa-user {
  font-size: 2.5rem;
}

.user_desc {
  padding-left: 8px;
}

.time {
  font-size: 0.7rem;
}
</style>
