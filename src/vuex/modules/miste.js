import {reqCategory,reqAddress,reqShops} from "@/api/index.js";


import {RECEIVE_CATEGORY,RECEIVE_SHOPS,RECEIVE_ADDRESS

} from "../mutations-types";

const actions={
  
  async getCategory({commit}){
    
    
    let result = await reqCategory()
  
    if(result.code===0){
  
      commit(RECEIVE_CATEGORY,result.data)
  
    }
  
  },async getAddress({commit,state}){
   
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
}

const mutations={

  [RECEIVE_CATEGORY](state,categorys){

    state.categorys =categorys

  },
  [RECEIVE_ADDRESS](state,address){

    state.address = address

  },
  [RECEIVE_SHOPS](state,shops){
    
    
    state.shops = shops

  },



}

const  state={
 latitude:'40.10038',
  longitude:'116.36867',
  categorys:[],
  shops:[],
  address:{},

}

const   getters={


}

export default{
  state,
  mutations,
  actions,
  getters
}