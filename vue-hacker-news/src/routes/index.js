import Vue from "vue"
import VueRouter from "vue-router"
import NewsView from "../views/NewsView.vue"
import ItemView from "../views/ItemView.vue"
import UserView from "../views/UserView.vue"
import Nav from "../views/Nav.vue"
import createListView from "../views/CreateListView.js"
import bus from "../utils/bus.js"
import { store, } from "../store/index"

Vue.use(VueRouter)

const fetchData = async(to, from, next) => {
  try {
    bus.$emit("start:spinner")
    const response = await store.dispatch("FETCH_LIST", to.name)

    console.log("loading data")
    console.log(response)
    if (response.status === 200) {
      console.log("fetched data")
      next()
    }
  } catch (error) {
    console.log(error)
  }
}

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/nav",
    },
    {
      path: "/nav",
      name: "nav",
      component: Nav,
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

