import { ReactElement } from "react";
import { Props as ProductCardProps } from "../components/ProductCard";
import { ProductTitleProps } from "../components/ProductTitle";
import { ProductButtonsProps } from "../components/ProductButtons";
import { ProductImageProps } from "../components/ProductImage";


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

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): ReactElement;
    Image: (Props: ProductImageProps) => ReactElement;
    Title: ( Props: ProductTitleProps) => ReactElement;
    Buttons: (Props:ProductButtonsProps) => ReactElement;
}

export interface onChanceArgs {
    product: Product;
    count: number;
}

export interface ProductInCard extends Product {
    count: number
}