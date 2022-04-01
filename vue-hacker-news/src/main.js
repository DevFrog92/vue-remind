// App의 구조를 한번에 볼 수 있는 청사진이 되어야 한다.

import Vue from "vue"
import App from "./App.vue"
import { router, } from "./routes/index.js"
import { store, } from "./store/index"
import VJsoneditor from "v-jsoneditor"
import ErrorBoundary from "./ErrorBoundary.vue" // 오류를 포착하는 컴포넌트

Vue.use(VJsoneditor)

Vue.config.productionTip = false
Vue.component(ErrorBoundary.name, ErrorBoundary)


Vue.config.errorHandler = (err, vm, info) => {
  console.error("errorHandler err:", err)
  console.error("errorHandler vm:", vm)
  console.error("errorHandler info:", info)
}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app")
