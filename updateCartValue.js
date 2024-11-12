const cartValue=document.querySelector("#cartValue")

export const updateCartValue=(cartProducts)=>{
   return (cartValue.innerHTML=`<i class="fa-light fa-cart-shopping">${cartProducts.length}</i>`)
}