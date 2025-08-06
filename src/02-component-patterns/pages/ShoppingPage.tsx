import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/index"
import '../styles/custom-styles.css'; // Importamos los estilos personalizados
const product ={
    id: "1", //ID del producto
    title: "Coffee Mug - Card", //Nombre del producto
    img: '/coffee-mug.png' //Imagen del producto
}

export const ShoppingPage = () => {
    return (
        <div  >
            <h1>Shopping Store</h1>
            <hr/>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>
                {/* Una una tecnica diferente de hacerlo */}
                <ProductCard
                    product={product}
                    className="bg-dark text-white"
                    >
                    <ProductImage className="custom-image"/>
                    <ProductTitle 
                    title={product.title}
                    className="text-bold" 
                    />
                    <ProductButtons className="custom-button"/>
                </ProductCard>

                <ProductCard 
                    product={product}
                    className="bg-dark text-white"
                    >
                    <ProductCard.Image 
                    className="custom-image"
                    />
                    <ProductCard.Title 
                    title={product.title}
                    className="text-bold"
                    />
                    <ProductCard.Buttons 
                    className="custom-button"
                    />
                </ProductCard> 

                <ProductCard 
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
                </ProductCard>

                

            </div>
        </div>

    )


    
}