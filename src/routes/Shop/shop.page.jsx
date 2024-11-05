import'./shop.page.scss'

import { ProductsContext } from '../../contexts/product.context';
import ProductCard from '../../components/Product-card/product-card';
import { useContext } from 'react';
const Shop=()=>{ 
    const {products}=useContext(ProductsContext)
    return(
     <div className='products-container'>
        {products.map((product)=>
        (
            <ProductCard key={product.id} product={product}/>
                

                
                 
        )
        )}



    </div>
    )
}
export default Shop;