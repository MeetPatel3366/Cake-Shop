import { getCartProductFromLS } from "./getCartProductFromLS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

//get cart data from localStorage
getCartProductFromLS();


//add tdata ino localStorage
export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLS();
  const currentProdElem = document.querySelector(`#card${id}`);
  console.log(currentProdElem);

  let quantity = currentProdElem.querySelector(".productQuantity").innerText;
  let price = currentProdElem.querySelector(".productPrice").innerText;

  console.log(quantity, price);

  price = price.replace("₹", "");
  console.log(quantity, price);

  let existingProd=arrLocalStorageProduct.find((curProd)=>curProd.id==id)

  if(existingProd && quantity>1)
  {
    quantity=Number(existingProd.quantity)+Number(quantity);
    price=Number(price*quantity);
    let updatedCart={id,quantity,price}
    console.log("u1 : ",updatedCart);
    updatedCart=arrLocalStorageProduct.map((curProd)=>{
      return (curProd.id==id)?updatedCart:curProd;
    })
    console.log("u2 ",updatedCart);

    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));

  }

  if(existingProd)
  {
    return false;
  }

  price = Number(price * quantity);
  quantity = Number(quantity);
  console.log(quantity, price);

  // let updateCart={id,quantity,price};

  arrLocalStorageProduct.push({ id, quantity, price });

  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  //update the cart button value
  updateCartValue(arrLocalStorageProduct)

  //show toast when product added to the 
  showToast("add",id)
};
