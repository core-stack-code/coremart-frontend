import React from 'react'
import ProductSlider from '../product-slider'
import { PRODUCT_LIST } from '@/lib/helper/testData'
import ProductGrid from '../product-grid'


const NewArrivalsProducts: React.FC = () => {
    const data = PRODUCT_LIST
    // here will be api call for the new arriaval product

    return (
        <ProductSlider title="New Arrivals" products={data} redirectLink="/products">
            {/* {(product) => <ProductCard product={product} cardType="new" />} */}
            {() => <ProductGrid products={data} cardType="new" columns={4} />}
        </ProductSlider>

    )
}

export default NewArrivalsProducts
