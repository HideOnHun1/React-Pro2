import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export interface ProductButtonsProps {
    className?: string;
    style?: React.CSSProperties;
}   


const ProductButtons = ({ className, style }: ProductButtonsProps) => {  //BOTONES
    const { increaseBy , counter, maxCount} = useContext( ProductContext ); // Custom hook de poder aumentar y disminuir el contador del producto
    const isMaxReached = useCallback(
        ()=> !!maxCount && counter === maxCount, 
        [counter, maxCount]
    );
    return (
        <div 
            className={`${styles.buttonsContainer} ${className}`}
            style={style}
        >
            <button className={styles.buttonMinus} onClick={ ()=> increaseBy(-1)}>-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}` } onClick={()=> increaseBy(+1)}>+</button>
        </div>
    )

}
export default ProductButtons; // Exportamos el componente por defecto