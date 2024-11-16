import { getCartProductFromLS } from "./getCartProductFromLS";
import { updateCartValue} from "./updateCartValue";

export const removeCartProduct=(id)=>{
    let cartProducts=getCartProductFromLS();
    let updatedCart=cartProducts.filter((curProd)=>curProd.id!=id)
    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
    
    let removeProduct=document.querySelector(`#card${id}`)
    if(removeProduct)
    {
        removeProduct.remove()
    }
    updateCartValue(cartProducts)
}