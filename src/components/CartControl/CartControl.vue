<template>
<div class="cartcontrol">
   <transition name="move">
     <div class="iconfont icon-remove_circle_outline" v-if="food.count>0" @click="operaType(false)"></div>
   </transition>
  <div class="cart-count" v-if="food.count>0">{{food.count}}</div>
  <div class="iconfont icon-add_circle" @click="operaType(true)"></div>
</div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:['food'],
    methods:{
    operaType(type){
       
      this.$store.dispatch('operationCount',{type,food:this.food})

    }   
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  @import "../../common/stylus/mixins.styl"
  .cartcontrol
    font-size: 0
    .fade-center-active, .fade-leave-active
     transition: all .5s
    .fade-center,.fade-leave-t0
       opacity 0
       transform translateX(15px) rotateZ(180deg) 
    .cart-decrease
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)
    .icon-remove_circle_outline
      display: inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color $green
      &.move-enter-active, &.move-leave-active
        transition all .5s
      &.move-enter, &.move-leave-to
        opacity 0
        transform translateX(15px) rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .icon-add_circle
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color $green
 
</style>
