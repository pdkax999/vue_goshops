
import {reqCategory,reqAddress,reqShops,reqLoginPsw} from "@/api/index.js";

import {RECEIVE_CATEGORY,RECEIVE_SHOPS,RECEIVE_ADDRESS,RECEIVE_TOKEN,RECEIVE_USER} from "./mutations-types";

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

async gotoLogin({commit},userInfo){

  let result = await reqLoginPsw(userInfo)

  if(result.code === 0){
      
     let token = result.data.token

      commit(RECEIVE_TOKEN,token)

     delete result.data['token']

     let users = result.data

     commit(RECEIVE_USER,users)
     
  }


 }

 









}