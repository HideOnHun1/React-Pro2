import { useState } from "react";
import { Product, ProductInCard } from "../interfaces/interfaces";



export const useShopping = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCard }>({});

    const onProductCounterChange = ({count, product}: {count: number , product: Product}) => {
        
        setShoppingCart(oldShoppingCart => {
            //console.log(shoppingCart);
            const productInCart = oldShoppingCart[product.id] || { ...product, count: 0 }; // Si el producto ya existe en el carrito, lo obtenemos, si no, lo inicializamos con count 0

            if( Math.max(productInCart.count + count, 0) > 0 ){
                productInCart.count += count; // Aumentamos el contador del producto en el carrito
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart // Actualizamos el carrito con el producto modificado
                }
            }

            const {[product.id]: toDelete, ...rest} = oldShoppingCart; // Desestructuramos para eliminar el producto del carrito si el contador es 0
            return rest; // Retornamos el carrito sin el producto



            // if (count === 0) {
            //     const { [product.id]: toDelete, ...rest } = oldShoppingCart; // Desestructuramos para eliminar el producto del carrito si el contador es 0
            //     return rest; // Retornamos el carrito sin el producto
            // }

            // return {
            //     ...oldShoppingCart,
            //     [ product.id ]: {...product, count}, //Agregamos el producto al carrito de compras, si ya existe lo actualizamos
            // }
        })
    }
    return {
        shoppingCart,
        onProductCounterChange
    }

}


