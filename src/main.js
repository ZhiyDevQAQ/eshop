import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";

Vue.config.productionTip = false;

import TypeNav from "@/components/TypeNav/TypeNav.vue";
import "@/mock/mockServer";
import "swiper/css/swiper.css";
Vue.component(TypeNav.name, TypeNav);

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
