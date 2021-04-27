
import {reqCategory,reqAddress,reqShops,reqAutoLogin} from "@/api/index.js";

import {RECEIVE_CATEGORY,RECEIVE_SHOPS,RECEIVE_ADDRESS,RECEIVE_TOKEN,RECEIVE_USER,REMOVE_USER_INFO} from "./mutations-types";

       

export default {
 
 async getCategory({commit}){

  let result = await reqCategory()

  if(result.code===0){

    commit(RECEIVE_CATEGORY,result.data)

  }

},
 async getAddress({commit,state}){
   console.log('1');
   
  const  {latitude,longitude} = state 
  
  let result = await reqAddress(latitude,longitude)

  if(result.code===0){

    commit(RECEIVE_ADDRESS,result.data);

  }

},
 async getShops({commit,state}){
  
  
  const  {latitude,longitude} = state 

  let result = await reqShops({latitude,longitude})

  if(result.code===0){

    commit(RECEIVE_SHOPS,result.data);

  }

},
/* async gotoLogin({commit},{userInfo,type}){

     let result

  
     if(type){

      result = await reqLoginPsw(userInfo)

     }else{

      result = await reqLoginSms(userInfo)
        
     }

     console.log(result);
     

  if(result.code === 0){
      
     let token = result.data.token

     localStorage.setItem('token_key',token);

      commit(RECEIVE_TOKEN,token)

     delete result.data['token']

     let users = result.data

     commit(RECEIVE_USER,users)

     router.replace('/profile')
     
  }

} */
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

}
}







