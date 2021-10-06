<template>
  <ul class="post-wrapper">
    <li
      v-for="item in postList"
      :key="item.id"
      class="post"
    >
      <div class="points">
        {{ item.points || 0 }}
      </div>
      <div>
        <p class="title">
          <template v-if="item.domain">
            <a
              :href="item.url"
              target="_blank"
            >
              {{ item.title }}
            </a>
          </template>
          <template v-else>
            <router-link :to="`ask/${item.id}`">
              {{ item.title }}
            </router-link>
          </template>
        </p>
        <small class="link-text">
          {{ item.time_ago }} by
          <router-link
            v-if="item.user"
            class="link-text"
            :to="`/user/${item.user}`"
          >
            {{ item.user }}
          </router-link>
          <a
            v-else
            :href="item.url"
            target="_blank"
          >
            {{ item.domain }}
          </a>
        </small>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    postList() {
      return this.$store.state.lists
    },
  },
}
</script>

<style scoped>
.post-wrapper {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>
