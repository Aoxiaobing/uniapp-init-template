import App from "./App";
import Vue from "vue";
import store from './store'

Vue.config.productionTip = false;
// App.mpType = "app";

import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

const app = new Vue({
  store,
  ...App,
});

app.$mount();
