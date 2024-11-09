import './style.css'
import './swiper.js'
import products from './api/products.json'
import { showProductContainer } from './homeProductCards';

console.log(products);

//call the function to display all cake products as a card
showProductContainer(products);