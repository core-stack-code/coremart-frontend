import React from 'react'
import ProductSlider from '../product-slider';
import ProductCard from '../product-card';
import { PRODUCT_LIST } from '@/lib/helper/testData';


const RecommendedProducts: React.FC = () => {
    const data = PRODUCT_LIST
    // here will be api call for recommended product

    return (
        <ProductSlider title="Recommended Products" products={data}>
            {(product) => <ProductCard product={product} />}
        </ProductSlider>
    )
}

export default RecommendedProducts;
