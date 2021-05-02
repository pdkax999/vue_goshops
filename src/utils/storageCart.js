 
export  function setShopCart(shop,CartFood) {
 
   if(CartFood.length==0){  

     return 

   }

 let result = CartFood.reduce((pre,food)=>{
  
  pre[food.id]=food.count
  
  return pre

 },{})

 sessionStorage.setItem('shop_'+shop,JSON.stringify(result))
  
}


export function getShopCart(id,goods) {
    
  
   
  let result = []

  let food_key = JSON.parse(sessionStorage.getItem('shop_'+id)) || {}

  console.log(food_key);
  

  goods.forEach( good => {

    good.foods.forEach((food)=>{

      let count = food_key[food.id]

      if(count>0){

        food.count=count

        result.push(food)

      }
    })
    
  });

  console.log(result);
  
  return  result 
}

/* 
存什么东西, 
统一,分别

{

}
[

]

*/

