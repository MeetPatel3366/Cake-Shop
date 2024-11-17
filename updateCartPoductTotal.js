import { getCartProductFromLS } from "./getCartProductFromLS";

export const updateCartPoductTotal=()=>{
    let productSubTotal=document.querySelector(".productSubTotal");
    let productFinalTotal=document.querySelector(".productFinalTotal")

    let arrLocalStorageProduct = getCartProductFromLS();

    let totalProductPrice=arrLocalStorageProduct.reduce((accum,curProd)=>{
        let productPrice=(curProd.price)||0
        return accum+=productPrice;
    },0)
    // totalProductPrice= totalProductPrice 
    let finalTotal=(totalProductPrice+50);
    console.log(totalProductPrice);

    productSubTotal.innerText=`₹${totalProductPrice.toFixed(2)}`
    productFinalTotal.innerText=`₹${finalTotal.toFixed(2)}`
}