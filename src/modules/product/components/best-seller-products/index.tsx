import React from 'react'
import ProductSlider from '../product-slider';
import { PRODUCT_LIST } from '@/lib/helper/testData';
import ProductGrid from '../product-grid';


const BestSellerProducts: React.FC = () => {
    const data = PRODUCT_LIST
    // here will be api call for the best seller product

    return (
        <ProductSlider title="Best Sellers" products={data} redirectLink="/products">
            {/* {(product) => <ProductCard product={product} cardType="ratting" />} */}
            {() => <ProductGrid products={data} cardType="ratting" columns={4} />}
        </ProductSlider>
    )
}

export default BestSellerProducts;
