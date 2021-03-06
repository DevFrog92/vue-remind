import Vue from "vue"
import VueRouter from "vue-router"
import NewsView from "../views/NewsView.vue"
import ItemView from "../views/ItemView.vue"
import UserView from "../views/UserView.vue"
import EventTestView from "../views/EventTestView.vue"
import createListView from "../views/CreateListView.js"
import Nav from "../views/Nav.vue"
import Timer from "../views/Timer.vue"
import bus from "../utils/bus.js"
import verticalCarousel from "../views/verticalCarousel"
import balloonGame from "../views/balloonGame"
import FeedbackModal from "../views/FeedbackModal"
import BeforeMatch from "../views/BeforeMatch"
import Dot from "../views/Dot"
import Dot2 from "../views/Dot2"
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
    },
    {
      path: "/test",
      component: EventTestView,
    },
    {
      path: "/timer",
      component: Timer,
    },
    {
      path: "/carousel",
      component: verticalCarousel,
    },
    {
      path: "/balloon",
      component: balloonGame,
    },
    {
      path: "/sound",
      component: FeedbackModal,
    },
    {
      path: "/wait",
      component: BeforeMatch,
    },
    {
      path: "/dot",
      component: Dot,
    },
    {
      path: "/dot2",
      component: Dot2,
    }
  ],
})

