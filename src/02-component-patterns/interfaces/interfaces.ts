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
    maxCount?: number; // Añadimos maxCount para poder usarlo en el componente ProductButtons
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

export interface InitialValuesProps {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    increaseBy: (value: number) => void;
    reset: () => void;
}