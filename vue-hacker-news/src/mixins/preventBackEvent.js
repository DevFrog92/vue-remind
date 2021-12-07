export default {
  created() {
  },
  methods: {
    preventBackButton() {
      console.log("here")
      window.history.forward()
      this.setWndow()
    },
    setWndow() {
      setTimeout("this.preventBackButton()", 0)
      window.onunload = () => null
    },
  },
}
