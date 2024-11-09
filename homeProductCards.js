const productContainer=document.querySelector("#productContainer");
const productTemplate=document.querySelector("#productTemplate");

export const showProductContainer=(products)=>{

    //if product is not exists
    if(!products)
    {
        return false;
    }

    //iterate over products api
    products.forEach((curProd)=>{
        const {id,name,category,flavours,price,stock,description,rating,isVegetarian,image}=curProd

        const productClone=document.importNode(productTemplate.content,true);

        productClone.querySelector(".productName").innerText=name
        productClone.querySelector(".category").innerText=category
        productClone.querySelector(".productImage").src=image
        productClone.querySelector(".productImage").alt=name
        productClone.querySelector(".productRating").innerText=`Rating: ${rating}`
        productClone.querySelector(".isVegetarian").innerText=`isVegetarian: ${isVegetarian}`
        productClone.querySelector(".productDescription").innerText=description
        productClone.querySelector(".productPrice").innerText=`₹${price}`
        productClone.querySelector(".productActualPrice").innerText=`₹${price*4}`
        productClone.querySelector(".productStock").innerText=stock

        productContainer.append(productClone)
    })


    

}