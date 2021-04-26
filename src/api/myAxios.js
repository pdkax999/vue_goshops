import axios from "axios";

import qs from "querystring";


const myAxios = axios.create({
  baseURL: '/api',
  timeout: 5000,
});



myAxios.interceptors.request.use(function (config) {

  if(config.data instanceof Object){
    console.log('1');
    
    config.data = qs.stringify(config.data)
  }
  
  return config;

});


myAxios.interceptors.response.use(function (response) {
 


  return response.data;

}, function (error) {


  alert('请求出错'+error.message);

  return  new Promise(()=>{});
});

export default myAxios