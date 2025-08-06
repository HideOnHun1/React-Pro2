import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export interface ProductTitleProps {
    title?: string,
    className?: string
    style?: React.CSSProperties;
}


const ProductTitle = ({title, className, style}:ProductTitleProps) => { //TITULO DEL PRODUCTO
    const { product } = useContext( ProductContext ); // Obtenemos el producto del contexto

    return(
        <span 
            className={`${styles.productDescription} ${className}`}
            style={style} // Aplicamos estilos personalizados
        >
            {title ? title : product.title}
        </span>
    )
}

export default ProductTitle; // Exportamos el componente por defecto