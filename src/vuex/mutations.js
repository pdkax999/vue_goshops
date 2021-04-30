import {RECEIVE_CATEGORY,RECEIVE_ADDRESS,RECEIVE_SHOPS,RECEIVE_TOKEN, RECEIVE_USER,REMOVE_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  FOOD_COUNT_REDUCE,
  FOOD_COUNT_ADD,
  CLEAR_CART_FOODS
} from "./mutations-types";
import Vue from "vue";
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


  },
  [RECEIVE_GOODS](state,goods){
    
    state.goods = goods

  },
  [RECEIVE_RATINGS](state,ratings){
    
    state.ratings = ratings

  },
  [RECEIVE_INFO](state,info){
    
    state.info = info

  },
  [FOOD_COUNT_ADD](state,food){
    
     let count = food.count

     if(!count){
      
      Vue.set(food,'count',1)
       
     }else{
      
      food.count++

     }
 
     if(food.count==1){
      
      state.CartFood.push(food)

     }

  },
  [FOOD_COUNT_REDUCE](state,food){
    
   if(food.count>0){
      food.count--
   }  
    
   if(food.count==0){

    state.CartFood.splice(state.CartFood.indexOf(food),1)

   }
  
  },
  [CLEAR_CART_FOODS](state){

    state.CartFood.forEach(food => {

      food.count=0

    });

    state.CartFood=[]

  }
}