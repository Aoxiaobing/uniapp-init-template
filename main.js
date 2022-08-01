import App from "./App";
import Vue from "vue";
import store from "./store";

Vue.config.productionTip = false;

/**
 * uView UI
 */
import uView from "@/uni_modules/uview-ui";
Vue.use(uView);

/**
 * interceptor
 */
import { actionInterCeptor } from "./interceptor";
actionInterCeptor();


const app = new Vue({
  store,
  ...App,
});

app.$mount();
