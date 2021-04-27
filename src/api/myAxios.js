
import axios from "axios";

import qs from "querystring";

import router from "../router/index.js";

import store from "../vuex/store";

import {Toast} from 'mint-ui';

const myAxios = axios.create({
  baseURL: '/api',
  timeout: 5000,
});



myAxios.interceptors.request.use(function (config) {

  if(config.data instanceof Object){
    
    config.data = qs.stringify(config.data)

  }

  let token = store.state.token
   
   if(token){

    config.headers['Authorization']=token;

   }else{

      if(config.headers.needCheck===true){

        throw new Error('没有登陆,不发请求');

      }
   }
  

  return config;

});


myAxios.interceptors.response.use(function (response) {
 
 
  return response.data;

}, function (error) {
     
   let {response} = error
  
  if(!response){
    
    let path = router.currentRoute.path
    
    if(path !== '/login'){

      router.replace('/login')
      Toast(error.message)
    }

  }else if(response.status === 401){ // token过期,  
       
    let path = router.currentRoute.path

    if(path !== '/login'){
      
      Toast(response.data.message || 'token过期请重新登录')
      
      router.replace('/login')

      store.dispatch('removeUser')

    }

  }else if(response.status === 404){

     Toast('请求资源不存在')


  }else{

    Toast('请求出错'+error.message);
    

  }
  return  new Promise(()=>{});
});

export default myAxios