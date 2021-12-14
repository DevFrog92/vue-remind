// App의 구조를 한번에 볼 수 있는 청사진이 되어야 한다.

import Vue from "vue"
import App from "./App.vue"
import { router, } from "./routes/index.js"
import { store, } from "./store/index"
import VJsoneditor from "v-jsoneditor"

Vue.use(VJsoneditor)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app")
