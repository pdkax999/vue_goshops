import Login from "@/pages/Login/Login";
import Msite from "@/pages/Msite/Msite";
import Order from "@/pages/Order/Order";
import Profile from "@/pages/Profile/Profile";
import Search from "@/pages/Search/Search";
import Shop from "@/pages/Shop/Shop";
import Goods from "@/pages/Shop/Goods";
import Info from "@/pages/Shop/Info";
import Ratings from "@/pages/Shop/Ratings";




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
     path: '/shop/:id',
     component: Shop,
     props:route => ({ id: route.params.id }),
     children:[
       {
         path: 'goods',
         component:Goods
       },
       {
         path: 'info',
         component: Info
       },
       {
         path: 'ratings',
         component: Ratings
       },
       {
        path: '',
        redirect:'goods'
      }
     ]
   },
   {
     path: '',
     redirect:'/msite'
   }   
  ]