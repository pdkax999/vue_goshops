<template>
 <div class="footer">
    <span class="guide" @click="goto('/msite')" :class="{active:'/msite'== $route.path}">
     
        <span>
          <i class="iconfont icon-waimai"></i>
        </span>
        <span>首页</span>
     
    </span>
    <span class="guide"  @click="goto('/search')" :class="{active:'/search'== $route.path}">
    
        <span>
          <i class="iconfont icon-search"></i>
        </span>
        <span>搜索</span>
      </span>
 
    <span class="guide" @click="goto('/order')" :class="{active:'/order'== $route.path}">
     
        <span>
          <i class="iconfont icon-dingdan"></i>
        </span>
        <span>外卖</span>
     
    </span>
    <span class="guide" @click="goto('/profile')" :class="{active:'/profile'== $route.path}">
      
        <span>
          <i class="iconfont icon-geren"></i>
        </span>
        <span>我的</span>
     
    </span>    
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
   methods:{
     goto(path){

       if(path!== this.$route.path){

          this.$router.replace(path)
       }else{

         location.href = path

       }

     }
   }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
   @import "../common/stylus/mixins.styl"
  .footer  
      top-border-1px(#E8E8E8)  
      position fixed
      left 0
      bottom 0
      height 50px
      box-sizing border-box
      width 100%
      display flex
      background-color #fff
      padding-top 5px
      .guide
        width 25%
        display flex
        flex-direction column
        text-align center
     &>span>i
       font-size  20px !important
     &>span:last-child
        margin-top 2px  
     &> .active
         color $green
</style>
