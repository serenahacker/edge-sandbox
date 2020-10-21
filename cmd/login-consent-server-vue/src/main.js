import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import routes from "./router/index";
import "@/assets/css/tailwind.css";

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas, fab)
dom.watch()

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes,
  linkExactActiveClass: "nav-item active"
});

Vue.use(VueRouter);

new Vue({
  el: "#app",
  render: h => h(App),
  router
});