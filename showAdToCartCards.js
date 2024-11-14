import { getCartProductFromLS } from "./getCartProductFromLS";
import products from "./api/products.json";

let cartProducts=getCartProductFromLS();

let filterProducts=products.filter((curProd)=>{
   return cartProducts.some((curEle)=>curEle.id==curProd.id)
})

console.log(filterProducts);