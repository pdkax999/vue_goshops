import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
import user from "./modules/user";
import shop from "./modules/shop";
import miste from "./modules/miste";

Vue.use(Vuex)


export default new Vuex.Store({
  mutations,
  actions,
  getters,
  modules:{
    user,
    shop,
    miste
  }
})