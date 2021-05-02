import {reqShopDetail} from "@/api/index.js";

import {getShopCart} from '@/utils/storageCart'

import {
  FOOD_COUNT_REDUCE,
  FOOD_COUNT_ADD,
  CLEAR_CART_FOODS,
  RECEIVE_SHOP_DETAIL,
 
} from "../mutations-types";

import Vue from "vue";
 

export default{
  actions:{

    async getShopdetail({commit,state},id){
        
      if(state.shop.id===id){
        
        return 
      }
      console.log('请求');
      
        //有id清楚或者刷新时不清楚  
        //commit(CLEAR_SHOP_DETAIL)  有问题  scroll报错
     /*  if(state.shop.id){  
        
           commit(RECEIVE_SHOP_DETAIL,{})
          console.log('调用了');
        
      } */
      let result = await reqShopDetail(id)
       
       if(result.code ===0){
          
        let CartFood = getShopCart(id,result.data.goods)
           
        console.log('读取了数据',CartFood);
        

         commit(RECEIVE_SHOP_DETAIL,{shop:result.data,CartFood})
     
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
  },
  getters:{

    totalFood(state){
      return  state.CartFood.reduce((pre,food)=>food.count+pre,0)
    },
    totalPrice(state){
  
      return  state.CartFood.reduce((pre,food)=>food.count*food.price+pre,0)
    }
  
  },
  mutations:{
 
    [RECEIVE_SHOP_DETAIL](state,{shop={},CartFood=[]}){
      
      state.shop=shop
  
      state.CartFood = CartFood
  
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
    
  
  },
  state:{
    shop:{},
    CartFood:[]
  },
}