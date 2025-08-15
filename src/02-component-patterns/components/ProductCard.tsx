import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext, ReactElement } from 'react';
import { ProductContextProps, Product, onChanceArgs, InitialValuesProps, ProductCardHandlers } from '../interfaces/interfaces';



export const ProductContext = createContext({} as ProductContextProps); // Creamos el contexto con un valor por defecto
const { Provider } = ProductContext;

export interface Props {
    product: Product
    //children?: ReactElement | ReactElement[] //children es opcional, puede ser un elemento o un arreglo de elementos
    children: (args: ProductCardHandlers )=> ReactElement //children es una función que regresa un elemento o un arreglo de elementos
    className?: string //Clase opcional para el componente
    style?: React.CSSProperties //Estilo opcional para el componente
    onChange?: (args: onChanceArgs) => void //Manejador de eventos para cuando el contador cambia
    value?: number //Valor inicial del contador
    initialValues?: InitialValuesProps
}

export const ProductCard = ({children, product, className, style, onChange, value, initialValues}:Props) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({onChange, product, value, initialValues}); // Custom hook de poder aumentar y disminuir el contador del producto

    return (
        <Provider value={{
            increaseBy,
            counter, 
            product,
            maxCount
            }}>
            <div 
                className={`${styles.productCard} ${className}`} 
                style={style}
                >
            {
                children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    increaseBy,
                    reset,
                })

            }
        </div>
        </Provider>



    )
}
