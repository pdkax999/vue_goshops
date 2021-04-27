
import myAxios from "./myAxios";

export const reqCategory =()=> myAxios.get('/index_category',{
  headers: {
    needCheck: true
  }
});

export const reqShops =(data)=> myAxios.get('/shops',{

  headers: {
    needCheck: true
  },

  params:data
});

export const reqAddress =(latitude,longitude)=> myAxios.get(`/position/${latitude},${longitude}`);

export const reqLoginPsw =({pwd,name,captcha})=> myAxios.post(`/login_pwd`,{
  pwd,name,captcha
});

export const reqLoginSms =({phone,code})=> myAxios.post(`/login_sms`,{
  phone,code
});


export const reqSendCode = (phone)=> myAxios.get('/sendcode',{
  params:{
    phone
  }
});
export const reqAutoLogin = ()=> myAxios.get('/auto_login',{
  

});