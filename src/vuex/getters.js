
export default{
  
  /* Cartfoods({goods}){
    
    let cartFoodList=[]

    goods.forEach( good => {

      cartFoodList=good.foods.map((food)=>{
           
           
          if(food.count>0){
            
            
            return {count:food.count,price:food.price}

          }
        
      })
      console.log(cartFoodList);
      

    });

    console.log( cartFoodList  );
    

    return  cartFoodList  

  }, */
  totalFood(state){
    return  state.CartFood.reduce((pre,food)=>food.count+pre,0)
  },
  totalPrice(state){

    return  state.CartFood.reduce((pre,food)=>food.count*food.price+pre,0)
  }

}