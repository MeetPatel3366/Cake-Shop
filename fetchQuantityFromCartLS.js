import { getCartProductFromLS } from "./getCartProductFromLS"

export const fetchQuantityFromCartLS=(id,price)=>{
    let cartProducts=getCartProductFromLS();

    let existingProduct=cartProducts.find((curProd)=>curProd.id==id)
    let quntity=1;

    if(existingProduct)
    {
        // console.log(existingProduct);
        quntity=existingProduct.quantity
        price=existingProduct.price

        // console.log(quntity,price);
    }
    
    return {quntity,price};
}