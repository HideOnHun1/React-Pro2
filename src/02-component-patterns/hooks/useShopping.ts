import { useState } from "react";
import { Product, ProductInCard } from "../interfaces/interfaces";



export const useShopping = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCard }>({});

    const onProductCounterChange = ({count, product}: {count: number , product: Product}) => {
        
        setShoppingCart(oldShoppingCart => {
            console.log({count})
            if (count === 0) {
                const { [product.id]: toDelete, ...rest } = oldShoppingCart; // Desestructuramos para eliminar el producto del carrito si el contador es 0
                return rest; // Retornamos el carrito sin el producto
            }

            return {
                ...oldShoppingCart,
                [ product.id ]: {...product, count}, //Agregamos el producto al carrito de compras, si ya existe lo actualizamos
            }
        })
    }
    return {
        shoppingCart,
        onProductCounterChange
    }

}


