import { getCartProductFromLS } from "./getCartProductFromLS";
import products from "./api/products.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { removeCartProduct } from "./removecartProduct";

let cartProducts=getCartProductFromLS();

let filterProducts=products.filter((curProd)=>{
   return cartProducts.some((curEle)=>curEle.id==curProd.id)
})
 
console.log(filterProducts);

const cartElement=document.querySelector("#productCartContainer")
const templateContainer=document.querySelector("#productCartTemplate")

const showCartProduct=()=>{
   filterProducts.forEach((curProd)=>{
      const {
         id,
         name,
         category,
         flavours,
         price,
         stock,
         image,
       } = curProd;
      
       let productClone=document.importNode(templateContainer.content,true);

       let lsActualData=fetchQuantityFromCartLS(id,price)
       
       productClone.querySelector("#cardValue").setAttribute("id",`card${id}`)
       productClone.querySelector(".category").textContent=category
       productClone.querySelector(".productImage").src=image
       productClone.querySelector(".productName").textContent=name
       
       productClone.querySelector(".productPrice").textContent=lsActualData.price
       productClone.querySelector(".productQuantity").textContent=lsActualData.quntity
       
       productClone.querySelector(".remove-to-cart-button").addEventListener("click",()=>{
          removeCartProduct(id);
       })


       cartElement.appendChild(productClone)
   })
}

showCartProduct();
