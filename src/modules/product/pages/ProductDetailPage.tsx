import React from 'react';
import { useParams } from 'react-router-dom';
import { Log } from '@/lib/utils';
import ProductDetailComponent from '../components/product-detail-component';
import SimilarProduct from '../components/similar-product';
import { PRODUCT_DETAIL} from '@/lib/helper/testData';


const ProductDetails: React.FC = () => {
    // here we call the api to fetch that product from the slug
    const param = useParams();
    Log("param", param);

    const product  = PRODUCT_DETAIL

    // loading componet till api fetch

    // error componet if product not found or other error

    return (
        <>
            <ProductDetailComponent product={product[0]} />
            <SimilarProduct />
        </>
    )
}

export default ProductDetails