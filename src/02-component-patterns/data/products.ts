import { Product } from "../interfaces/interfaces";


const product1 ={
    id: "1", //ID del producto
    title: "Coffee Mug - Card", //Nombre del producto
    img: '/coffee-mug.png' //Imagen del producto
}
const product2 ={
    id: "2", //ID del producto
    title: "Coffee Mug - Meme", //Nombre del producto
    img: '/coffee-mug2.png' //Imagen del producto
}
export const products: Product[] = [product1, product2];