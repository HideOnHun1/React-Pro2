import { ReactElement } from "react";

export interface ProductCardprops {
    product: Product
    children?: ReactElement | ReactElement[] //children es opcional, puede ser un elemento o un arreglo de elementos
}
export interface Product {
    id: string,
    title: string,
    img?: string
}
export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;   
}