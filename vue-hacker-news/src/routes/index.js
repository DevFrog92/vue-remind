import Vue from "vue"
import VueRouter from "vue-router"
import NewsView from "../views/NewsView.vue"
import ItemView from "../views/ItemView.vue"
import UserView from "../views/UserView.vue"
import createListView from "../views/CreateListView.js"
import bus from "../utils/bus.js"
import { store, } from "../store/index"

Vue.use(VueRouter)

const fetchData = (to, from, next) => {
  bus.$emit("start:spinner")
  store.dispatch("FETCH_LIST", to.name)
    .then(() => {
      next()
    })
    .catch((error) => {
      throw new Error(error)
    })
}

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news",
      name: "news",
      component: NewsView,
      beforeEnter: fetchData,
    },
    {
      path: "/ask",
      name: "ask",
      component: createListView("AskView"),
      beforeEnter: fetchData,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: createListView("JobsView"),
      beforeEnter: fetchData,
    },
    {
      path: "/user/:id",
      component: UserView,
    },
    {
      path: "/ask/:id",
      component: ItemView,
    }
  ],
})

