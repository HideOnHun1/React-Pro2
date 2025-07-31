import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/index"

const product ={
    id: "1", //ID del producto
    title: "Coffee Mug - Card", //Nombre del producto
    img: '/coffee-mug.png' //Imagen del producto
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr/>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>
                {/* Una una tecnica diferente de hacerlo */}
                <ProductCard product={product}>
                    <ProductImage/>
                    <ProductTitle title={ 'Coffee'}/>
                    <ProductButtons/>
                </ProductCard>

                {/* <ProductCard product={product}>
                    <ProductCard.Image/>
                    <ProductCard.Title title={ ''}/>
                    <ProductCard.Buttons />
                </ProductCard> */}

                

            </div>
        </div>

    )


    
}