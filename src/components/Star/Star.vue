<template>
  <div class="star" :class="size">
    <span class="star-item" v-for="(scr,index) in starList" :key="index" :class="scr"></span>
</div>
</template>

<script type="text/ecmascript-6">
  export default {
  props:['score','size'],
  computed:{
  starList(){
   const score = this.score*1

   let result = []  
 
  
   let ons = Math.floor(score)  
   
   
    for(let i=0; i<ons;i++){
   
     
      result.push('on')
    }  
    
    if(score-ons>=0.5){

        result.push('half')
    }
   
    for (let i = 0; i < 5-result.length; i++) {
     
      result.push('off')
      
    }
  
    return result
  }
  
  }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 @import '../../common/stylus/mixins.styl'
 
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./images/star48_on')
        &.half
          bg-image('./images/star48_half')
        &.off
          bg-image('./images/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star36_on')
        &.half
          bg-image('./images/star36_half')
        &.off
          bg-image('./images/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star24_on')
        &.half
          bg-image('./images/star24_half')
        &.off
          bg-image('./images/star24_off')
</style>
