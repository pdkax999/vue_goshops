import {reqAutoLogin} from "@/api/index.js";


import {RECEIVE_TOKEN,RECEIVE_USER,REMOVE_USER_INFO,

} from "../mutations-types";
const actions={

  saveUsers({commit},userInfo){

    let token = userInfo.token
  
    localStorage.setItem('token_key',token);
  
     commit(RECEIVE_TOKEN,token)
  
    delete userInfo['token']
  
    commit(RECEIVE_USER,userInfo)
  
  }, 
  
async reqAutoLogin({state,commit}){
  
  if(state.token && !state.user._id){

  let result = await  reqAutoLogin()

   if(result.code === 0){

    commit(RECEIVE_USER,result.data)
    
  }  
    
  }
},
removeUser({commit}){


  commit(REMOVE_USER_INFO)

},

}

const mutations={
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


  },
}

const  state={
  user:{},
  token: localStorage.getItem('token_key') || '',

}

const   getters={


}

export default{

  state,
  mutations,
  actions,
  getters




}