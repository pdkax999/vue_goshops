
import myAxios from "./myAxios";

export const reqCategory =()=> myAxios.get('/index_category');

export const reqShops =(data)=> myAxios.get('/shops',{
  params:data
});

export const reqAddress =(latitude,longitude)=> myAxios.get(`/position/${latitude},${longitude}`);

export const reqLoginPsw =({pwd,name,captcha})=> myAxios.post(`/login_pwd`,{
  pwd,name,captcha
});


export const reqSendCode = (phone)=> myAxios.get('/sendcode',{
  params:{
    phone
  }
});