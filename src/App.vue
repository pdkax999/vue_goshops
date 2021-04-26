<template>
  <div>
    <router-view/>
    <FooterGuide v-show="$route.meta.isGuidePitch"/>
  </div>
</template>

<script type="text/ecmascript-6">
import FooterGuide from "@components/FooterGuide";

  export default {
    components:{
      FooterGuide
    },
    mounted(){

    /*   this.$store.dispatch('getAddress'); */
      this.$store.dispatch('getShops');

    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
 
</style>
