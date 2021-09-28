<template>
  <div>
    <p>ID : {{ userInfo.id }}</p>
    <p>Karma : {{ userInfo.karma }}</p>
    <p>Created : {{ userInfo.created }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    userInfo() {
      return this.$store.state.user
    },
  },
  created() {
    const userInfo = this.$route.params.id

    this.$store.dispatch("FETCH_USER", userInfo)
  },
}
</script>

<style>

</style>
