<template>
  <div>
    <h1>
      {{ item.title }}
    </h1>
    <p class="item_content" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemContentElem: null,
    }
  },
  computed: {
    item() {
      return this.$store.state.askItem
    },
  },
  watch: {
    item() {
      this.setContent()
    },
  },
  mounted() {
    this.itemContentElem = document.querySelector(".item_content")
    this.setContent()
  },
  created() {
    const itemId = this.$route.params.id

    this.$store.dispatch("FETCH_ASK_ITEM", itemId)
  },
  methods: {
    setContent() {
      console.log(this.item)
      this.itemContentElem.innerHTML = this.item.content
    },
  },
}
</script>

<style>

</style>
