import { useEffect, useState } from "react";
import { onChanceArgs, Product } from "../interfaces/interfaces";

interface UseProductProps {
    product: Product;
    onChange?: (args: onChanceArgs) => void; // Callback para cuando el contador cambia
    value?: number
}

export const useProduct = ({onChange, product, value=0}: UseProductProps) => {
    const [ counter, setCounter ] = useState(value);

    const increaseBy = ( value: number ) => {     
        const newValue =Math.max( counter + value, 0)
        setCounter( newValue); //El Math.Max toma el valor maximo entre el valor actual del counter y el 0
        onChange && onChange({count: newValue, product}); // Si onChange existe, lo llamamos con el nuevo valor del contador y el producto
    }
    useEffect(() => {
        setCounter(value); // Si el valor inicial cambia, actualizamos el contador del carrito lateral
    }, [value]);
    return {
        counter,
        increaseBy
    }
}