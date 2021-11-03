s<template>
  <div>
    <section>
      <!-- 사용자 상세 정보 -->
      <user-profile :info="item">
        <div slot="username">
          <router-link
            class="link-text"
            :to="`/user/${item.user}`"
          >
            {{ item.user }}
          </router-link>
        </div>
        <template slot="time">
          {{ `Posted ${item.time_ago}` }}
        </template>
      </user-profile>
    </section>
    <section>
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
import UserProfile from "../components/UserProfile.vue"

export default {
  components: { UserProfile, },
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
