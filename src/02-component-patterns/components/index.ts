import { ProductCardHOCProps } from '../interfaces/interfaces';
import ProductButtons from './ProductButtons';
import {ProductCard as ProductCardHOC } from './ProductCard';
import ProductImage from './ProductImage';
import ProductTitle from './ProductTitle';

export { default as ProductButtons } from './ProductButtons';
//export { default as ProductCard } from './ProductCard';
export { default as ProductImage } from './ProductImage';
export { default as ProductTitle } from './ProductTitle';

export const ProductCard: ProductCardHOCProps = Object.assign(
    ProductCardHOC,{
        Image: ProductImage,
        Title: ProductTitle,
        Buttons: ProductButtons
    }
)

export default ProductCard; // Exportamos el componente por defecto