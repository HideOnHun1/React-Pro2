import { useState } from "react";

export const useProduct = () => {
    const [ counter, setCounter ] = useState(0);

    const increaseBy = ( value: number ) => {
        setCounter( prev => Math.max( prev + value, 0)); //El Math.Max toma el valor maximo entre el valor actual del counter y el 0
    }
    return {
        counter,
        increaseBy
    }
}