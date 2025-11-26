import React from 'react'
import { PRODUCT_LIST } from '@/lib/helper/testData'
import ProductSlider from '../product-slider'
import ProductGrid from '../product-grid'

const RecentlyViewProducts: React.FC = () => {
   const data = PRODUCT_LIST
    // here will be api call for the recently viewed product

    return (
        <ProductSlider title="Recently Viewed" products={data} redirectLink="/products">
            {() => <ProductGrid products={data} cardType="new" columns={4} />}
        </ProductSlider>
    )
}

export default RecentlyViewProducts
