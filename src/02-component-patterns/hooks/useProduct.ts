import { useEffect, useRef, useState } from "react";
import { InitialValuesProps, onChanceArgs, Product } from "../interfaces/interfaces";

interface UseProductProps {
    product: Product;
    onChange?: (args: onChanceArgs) => void; // Callback para cuando el contador cambia
    value?: number
    initialValues?: InitialValuesProps; // Valores iniciales del contador y maxCount
}

export const useProduct = ({onChange, product, value=0,initialValues}: UseProductProps) => {
    const [ counter, setCounter ] = useState<number>(initialValues?.count || value);
    const isMounted = useRef(false);
    console.log(initialValues?.count)
    const increaseBy = ( value: number ) => {     
        if(initialValues?.maxCount !== undefined && initialValues?.maxCount > 0 && initialValues?.maxCount < counter + value) return; // Si el maxCount es menor que el valor a aumentar, no hacemos nada
        const newValue =Math.max( counter + value, 0)
        setCounter( newValue); //El Math.Max toma el valor maximo entre el valor actual del counter y el 0
        onChange && onChange({count: newValue, product}); // Si onChange existe, lo llamamos con el nuevo valor del contador y el producto
        console.log("Valor de counter",counter,"Valor de value", value)
        
    }
    const reset =() => {
        setCounter  (initialValues?.count || value); // Resetea el contador al valor inicial
    }
    useEffect(() => {
        if(!isMounted.current) return; // Evita que se ejecute en el primer renderizado
        setCounter(value); // Si el valor inicial cambia, actualizamos el contador del carrito lateral
    }, [value]);
    useEffect(() => {
        isMounted.current = true; // Marca que el componente ya se ha montado

    },[])
    // console.log(isMounted.current)
    
    return {
        counter,
        isMaxCountReached: !!initialValues?.maxCount && counter === initialValues.maxCount,
        maxCount: initialValues?.maxCount,

        reset,
        increaseBy,
    }
}