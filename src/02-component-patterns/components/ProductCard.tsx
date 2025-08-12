import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext, ReactElement } from 'react';
import { ProductContextProps, Product, onChanceArgs } from '../interfaces/interfaces';



export const ProductContext = createContext({} as ProductContextProps); // Creamos el contexto con un valor por defecto
const { Provider } = ProductContext;

export interface Props {
    product: Product
    children?: ReactElement | ReactElement[] //children es opcional, puede ser un elemento o un arreglo de elementos
    className?: string //Clase opcional para el componente
    style?: React.CSSProperties //Estilo opcional para el componente
    onChange?: (args: onChanceArgs) => void //Manejador de eventos para cuando el contador cambia
    value?: number //Valor inicial del contador
}

export const ProductCard = ({children, product, className, style, onChange, value}:Props) => {

    const { counter, increaseBy } = useProduct({onChange, product, value}); // Custom hook de poder aumentar y disminuir el contador del producto
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
            <div 
                className={`${styles.productCard} ${className}`} 
                style={style}
                >
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
