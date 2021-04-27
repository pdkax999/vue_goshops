import {RECEIVE_CATEGORY,RECEIVE_ADDRESS,RECEIVE_SHOPS,RECEIVE_TOKEN, RECEIVE_USER,REMOVE_USER_INFO} from "./mutations-types";

export default {

  [RECEIVE_CATEGORY](state,categorys){

    state.categorys =categorys

  },
  [RECEIVE_ADDRESS](state,address){

    state.address = address

  },
  [RECEIVE_SHOPS](state,shops){

    state.shops = shops

  },
  [RECEIVE_TOKEN](state,token){

    state.token = token

  },
  [RECEIVE_USER](state,user){

    state.user = user

  },
  [REMOVE_USER_INFO](state){

    state.user={}

    state.token={}

    localStorage.removeItem('token_key');


  }
}