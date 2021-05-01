import Vue from 'vue'
import VueLazyload from "vue-lazyload";
import  "lib-flexible";

import loading from "@/common/img/loading.gif";

import "./validate";
import  * as API from "@/api";
import App from './App.vue'
import router from "./router";
import Header from "@components/Header/Header";
import Star from "@components/Star/Star";
import store from "@/vuex/store";
import  "@/mock/mock-server";
import {Button} from "mint-ui";

Vue.component(Button.name, Button);
Vue.component('Star', Star);
Vue.config.productionTip = false

Vue.component('Header',Header)

Vue.prototype.API = API 

Vue.use(VueLazyload,{
  loading
})


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
