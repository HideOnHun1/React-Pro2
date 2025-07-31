import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg'; // Importamos la imagen por defecto


const ProductImage = ({ img = "" }) => {
    const { product } = useContext(ProductContext); // Obtenemos el producto del contexto
    let imgSrc: string;

    if (img) { // Caso en el que se pasa una imagen
        imgSrc = img;
    } else if (product.img) { // Caso en el que se usa la imagen del producto
        imgSrc = product.img;
    } else {
        imgSrc = noImage; // Caso en el que no hay imagen, se usa la imagen por defecto
    }

    return (
        <img className={styles.productImg} src={imgSrc} alt="Product-Image" />
    );
}
export default ProductImage; // Exportamos el componente por defecto