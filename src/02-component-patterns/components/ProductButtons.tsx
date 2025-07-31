import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';


const ProductButtons = () => {  //BOTONES
    const { increaseBy , counter} = useContext( ProductContext ); // Custom hook de poder aumentar y disminuir el contador del producto
    return (
        <div className={styles.buttonsContainer}>
            <button className={styles.buttonMinus} onClick={ ()=> increaseBy(-1)}>-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button className={styles.buttonAdd} onClick={()=> increaseBy(+1)}>+</button>
        </div>
    )

}
export default ProductButtons; // Exportamos el componente por defecto