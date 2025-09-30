import React from 'react'
import { PRODUCT_LIST } from '@/lib/helper/testData'
import ProductSlider from '../product-slider'
import ProductCard from '../product-card'

const RecentlyViewProducts: React.FC = () => {
   const data = PRODUCT_LIST
    // here will be api call for the recently viewed product

    return (
        <ProductSlider title="Recently Viewed" products={data}>
            {(product) => <ProductCard product={product} />}
        </ProductSlider>
    )
}

export default RecentlyViewProducts
