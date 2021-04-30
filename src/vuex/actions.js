
import {reqCategory,reqAddress,reqShops,reqAutoLogin,reqShopGoods,reqShopRatings,reqShopInfo} from "@/api/index.js";

import {RECEIVE_CATEGORY,RECEIVE_SHOPS,RECEIVE_ADDRESS,RECEIVE_TOKEN,RECEIVE_USER,REMOVE_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  FOOD_COUNT_REDUCE,
  FOOD_COUNT_ADD,
  CLEAR_CART_FOODS
} from "./mutations-types";

       

export default {
 
 async getCategory({commit}){

  let result = await reqCategory()

  if(result.code===0){

    commit(RECEIVE_CATEGORY,result.data)

  }

},
 async getAddress({commit,state}){
   
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

},
async getShopGoods({commit}){
 
 let result = await reqShopGoods()
  
  if(result.code ===0){

     
    commit(RECEIVE_GOODS,result.data)

  }

},
async getShopRatings({commit}){
 
 let result = await reqShopRatings()
  
  if(result.code ===0){

     
    commit(RECEIVE_RATINGS,result.data)

  }

},
async getShopInfo({commit}){
 
 let result = await reqShopInfo()
  
  if(result.code ===0){

     
    commit(RECEIVE_INFO,result.data)

  }

},
operationCount({commit},{food,type}){
  if(type){

    commit(FOOD_COUNT_ADD,food)

  }else{

    commit(FOOD_COUNT_REDUCE,food)
  }
},
clearFoods({commit}){

  commit(CLEAR_CART_FOODS)

}
}







