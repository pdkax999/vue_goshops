<template>
<div>
  <div class="goods">
    <div class="menu-wrapper" ref="scrollLeft">  
      <ul ref="menuList">            
        <li class="menu-item" v-for="(go,index) in goods" :key="index" :class="{current:currentIndex==index}" @click="clickItem(index)">
           <img class="icon" v-if="go.icon"  :src="go.icon">
          <span class="text bottom-border-1px">{{go.name}}</span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="scrollRight">
      <ul ref="foodList">
        <li class="food-list-hook" v-for="(go,index) in goods" :key="index" >
          <h1 class="title">{{go.name}}</h1>
          <ul>
            <li class="food-item bottom-border-1px" v-for="(food,i) in go.foods" :key="i" @click='showFoodBig(food)'>
              <div class="icon">
                <img width="57" height="57"
                     :src="food.image">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span></div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                   <CartControl :food='food'/>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <ShopCart/>
  <Food :food='food' ref='currentFood'/>
</div>
</template>

<script type="text/ecmascript-6">
import {mapState} from "vuex";
import BScroll from '@better-scroll/core'
import CartControl from "@components/CartControl/CartControl";
import ShopCart from "@components/ShopCart/ShopCart";
import Food from "@components/Food/Food";

 export default{
   data(){

     return {
       scrollY:0,
       tops:[],
       food:{}
     }

   },
   mounted(){
     
     if(this.goods.length>0){

        this._initScroll()
        this._initTops()

     }
     
   },
   computed:{

     ...mapState({
       'goods':state=>state.shop.shop.goods||[],
     }),
     currentIndex(){
       const {scrollY,tops} = this

        let current = tops.findIndex((food,i)=>{
          
          return   scrollY>=food && scrollY<tops[i+1]
        })

        if(this.index!==current&&  this.scrollLeft){
          
          let li = this.$refs.menuList.children[current]
           
          this.scrollLeft.scrollToElement(li,300)
           /* eslint-disable */
          this.index = current
        }

       return current
     }
   },
    methods:{
     _initTops(){
       let lis = Array.prototype.slice.call(this.$refs.foodList.children);
       let tops = []

        let top = 0

        tops.push(top)

      lis.forEach( li => {

        top+=li.offsetHeight

        tops.push(top)
      });
      
      this.tops = tops 

     },
     _initScroll(){
         
       
     if(!this.scrollRight){
       this.scrollRight =new BScroll(this.$refs.scrollRight,{
        probeType:1,
        click:true
      })
      this.scrollLeft =new BScroll(this.$refs.scrollLeft,{
        click:true

      })

      this.scrollRight.on('scroll', (position) => {
        
        let scrollY = Math.abs(position.y)

        this.scrollY=scrollY
     })
      this.scrollRight.on('scrollEnd', (position) => {
        
        let scrollY = Math.abs(position.y)

        this.scrollY=scrollY
     })
     }else{

       this.scrollLeft.refresh()
       this.scrollRight.refresh()

     }
     },
     clickItem(i){
      
      let y = this.tops[i]

      this.scrollY = y 

      this.scrollRight.scrollTo(0,-y,300)  
    },
    showFoodBig(food){

      this.food = food

      this.$refs.currentFood.toggleShow()
    }
    
    },
    
    watch:{
    'goods'(){

      this.$nextTick(()=>{
          
          this._initTops()
          this._initScroll()

          /* console.log('调用了'); */
      })

    }
    },
    components:{
      CartControl,
      ShopCart,
      Food
    }
 }

</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
  .goods
    display: flex
    position: absolute
    top: 225px
    bottom: 46px
    width: 100%
    background: #fff;
    overflow: hidden
    .menu-wrapper
      flex: 0 0 auto
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          color: $green
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          bottom-border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
 
</style>
