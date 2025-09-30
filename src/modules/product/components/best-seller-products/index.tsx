import React from 'react'
import ProductCard from '../product-card';
import ProductSlider from '../product-slider';
import { PRODUCT_LIST } from '@/lib/helper/testData';


const BestSellerProducts: React.FC = () => {
    const data = PRODUCT_LIST
    // here will be api call for the best seller product

    return (
        <ProductSlider title="Best Sellers" products={data}>
            {(product) => <ProductCard product={product} cardType="ratting" />}
        </ProductSlider>
    )
}

export default BestSellerProducts;
