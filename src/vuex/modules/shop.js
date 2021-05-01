import {reqShopGoods,reqShopRatings,reqShopInfo} from "@/api/index.js";


import {
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  FOOD_COUNT_REDUCE,
  FOOD_COUNT_ADD,
  CLEAR_CART_FOODS
} from "../mutations-types";

import Vue from "vue";
const actions={
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

const mutations={
 
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

const  state={
  info:{},
  goods:[],
  ratings:[],
  CartFood:[]


}

const   getters={

  totalFood(state){
    return  state.CartFood.reduce((pre,food)=>food.count+pre,0)
  },
  totalPrice(state){

    return  state.CartFood.reduce((pre,food)=>food.count*food.price+pre,0)
  }

}

export default{

  state,
  mutations,
  actions,
  getters




}