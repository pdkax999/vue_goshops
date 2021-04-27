import Vue from 'vue'

import  "lib-flexible";

import "./validate";
import  * as API from "@/api";
import App from './App.vue'
import router from "./router";
import Header from "@components/Header/Header";
import store from "@/vuex/store";

import {Button} from "mint-ui";

Vue.component(Button.name, Button);
Vue.config.productionTip = false

Vue.component('Header',Header)

Vue.prototype.API = API 


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
