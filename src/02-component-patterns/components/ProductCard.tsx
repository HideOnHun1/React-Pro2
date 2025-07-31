import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductContextProps, ProductCardprops } from '../interfaces/interfaces';



export const ProductContext = createContext({} as ProductContextProps);// Creamos el contexto con un valor por defecto
const { Provider } = ProductContext;

const ProductCard = ({children, product}:ProductCardprops) => {

    const { counter, increaseBy } = useProduct(); // Custom hook de poder aumentar y disminuir el contador del producto
    //Aqui lo hago con if, pero se puede hacer con una sola linea como arriba
    // const onAdd = () => {
    //     setCounter(counter +1);
    // }
    // const onMinus = () => {
    //     if (counter > 0) {
    //         setCounter(counter - 1);
    //     }
    // }

    return (
        <Provider value={{
            increaseBy,
            counter, 
            product
            }}>
            <div className={styles.productCard}>
                {children}
                {/*<img className={ styles.productImg } src="/coffee-mug.png" alt="Coffee Mug" />*/}
                {/* <ProductImage/>
                <ProductTitle title={product.title} />
                <ProductButtons 
                    increaseBy={increaseBy}  //Aca le paso la funcion del custom hook
                    counter={counter} //Aca le paso el contador del custom hook
                /> */}
        </div>
        </Provider>



    )
}

export default ProductCard; // Exportamos el componente por defecto