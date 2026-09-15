import React from 'react'
import ProductSlider from '../product-slider'
import ProductCard from '../product-card'
import { PRODUCT_LIST } from '@/lib/helper/testData'


const RecentlyViewProducts: React.FC = () => {
   const data = PRODUCT_LIST
    // here will be api call for the recently viewed product

    return (
        <ProductSlider title="Recently Viewed" products={data} redirectLink="/products">
             {(product) => <ProductCard product={product} />}
        </ProductSlider>
    )
}

export default RecentlyViewProducts
