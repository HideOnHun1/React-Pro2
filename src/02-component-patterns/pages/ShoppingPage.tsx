import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components/index";
import "../styles/custom-styles.css"; // Importamos los estilos personalizados
import { products } from "../data/products";
import { useShopping } from "../hooks/useShopping";
import styles from '../styles/styles.module.css';

const product = products[0]; // Ejemplo de producto, puedes usar el que quieras

export const ShoppingPage = () => {
  //Los Hooks solo se pueden usar dentro de un componente de React
  const { onProductCounterChange, shoppingCart } = useShopping();
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 15
        }}
      >
        {
          (args)=> (
              <>
                <ProductImage className="custom-image" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}/>
                <ProductTitle className="text-bold" />
                <ProductButtons className="custom-button" />  
                <button onClick={args.reset}>reset</button> 
                {
                  (args.count !==0 ) && <button onClick={()=> args.increaseBy(-2)}>-2</button>
                }
                {
                  (!args.isMaxCountReached && <button onClick={()=> args.increaseBy(+2)}>+2</button>)
                }
                <span> {args.count} - {args.maxCount}</span>
              </>
          )
        }
      </ProductCard>
        
    </div>
  );
};
