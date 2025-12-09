import React from 'react'
import ProductSlider from '../product-slider';
import { PRODUCT_LIST } from '@/lib/helper/testData';
import ProductCard from '../product-card';


const RecommendedProducts: React.FC = () => {
    const data = PRODUCT_LIST
    // here will be api call for recommended product

    return (
        <ProductSlider title="Recommended Products" products={data} redirectLink="/products">
            {(product) => <ProductCard product={product} />}
            {/* {() => <ProductGrid products={data}  columns={4} />} */}
        </ProductSlider>
    )
}

export default RecommendedProducts;
