import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

const ProductTitle = ({title}: {title: string}) => { //TITULO DEL PRODUCTO
    const { product } = useContext( ProductContext ); // Obtenemos el producto del contexto

    return(
        <span className={styles.productDescription}>
            {title ? title : product.title}
        </span>
    )
}

export default ProductTitle; // Exportamos el componente por defecto