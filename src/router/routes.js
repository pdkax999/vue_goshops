import Login from "@/pages/Login/Login";
import Msite from "@/pages/Msite/Msite";
import Order from "@/pages/Order/Order";
import Profile from "@/pages/Profile/Profile";
import Search from "@/pages/Search/Search";


  export default [
   {
     path: '/msite',
     component: Msite,
     meta:{
      isGuidePitch:true
    }
   },
   {
     path: '/login',
     component: Login,
   
   },
   
   {
     path: '/search',
     component: Search,
     meta:{
      isGuidePitch:true
    }
   },
   
   {
     path: '/order',
     component: Order,
     meta:{
      isGuidePitch:true
    }
   },
   {
     path: '/profile',
     component: Profile,
     meta:{
      isGuidePitch:true
    }
   },
   {
     path: '',
     redirect:'/msite'
   }   
  ]