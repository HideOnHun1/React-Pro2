import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/index"
import '../styles/custom-styles.css'; // Importamos los estilos personalizados
import { products } from "../data/products";
import { useShopping } from "../hooks/useShopping";



export const ShoppingPage = () => {
    //Los Hooks solo se pueden usar dentro de un componente de React
    const { onProductCounterChange, shoppingCart } =useShopping();
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr/>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>

                {
                    products.map( product => (
                        <ProductCard 
                            key={ product.id }
                            product={ product }
                            className="bg-dark text-white"
                            onChange={ onProductCounterChange }
                            value={ shoppingCart[product.id]?.count || 0 } // Pasamos el valor del contador al ProductCard
                        >
                            <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }

                <div className="shopping-cart">

                {
                    Object.entries( shoppingCart ).map( ([ key, product ]) => (
                        <ProductCard 
                            key={ key }
                            product={ product }
                            className="bg-dark text-white"
                            style={{ width: '100px' }}
                            onChange={ onProductCounterChange }
                            value={product.count} // Pasamos el valor del contador al ProductCard
                        >
                            <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                            <ProductButtons 
                                className="custom-buttons"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            />
                        </ProductCard>
                    ))
                }

                    
            </div>

                






                {/* //Haciendolo con props */}

                {/* Una una tecnica diferente de hacerlo */}
                {/* <ProductCard
                    product={product}
                    className="bg-dark text-white"
                    >
                    <ProductImage className="custom-image"/>
                    <ProductTitle 
                    title={product.title}
                    className="text-bold" 
                    />
                    <ProductButtons className="custom-button"/>
                </ProductCard> */}
                    {/* //Haciendolo con style */}

                {/* <ProductCard 
                    product={product2}
                    className="bg-dark text-white"
                    >
                    <ProductCard.Image 
                    className="custom-image"
                    />
                    <ProductCard.Title 
                    title={product2.title}
                    className="text-bold"
                    />
                    <ProductCard.Buttons 
                    className="custom-button"
                    />
                </ProductCard>  */}

                {/* <ProductCard 
                    product={product}
                    style={{
                        backgroundColor: 'lightblue',
                    }}
                    >
                    <ProductImage style={{boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}} />
                    <ProductTitle style={{ fontWeight: "bold" }} />
                    <ProductButtons
                    style={{
                        color: 'black',
                        display: 'flex',
                        justifyContent: 'end',
                    }} />
                </ProductCard> */}
            </div>
        </div>

    )


    
}