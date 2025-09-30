import React from 'react'
import ProductSlider from '../product-slider'
import ProductCard from '../product-card'
import { PRODUCT_LIST } from '@/lib/helper/testData'


const NewArrivalsProducts: React.FC = () => {
    const data = PRODUCT_LIST
    // here will be api call for the new arriaval product

    return (
        <ProductSlider title="New Arrivals" products={data}>
            {(product) => <ProductCard product={product} cardType="new" />}
        </ProductSlider>
    )
}

export default NewArrivalsProducts
