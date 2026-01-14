import { PRODUCT_LIST } from '@/lib/helper/testData'
import React from 'react'
import ProductSlider from '../product-slider'
import ProductCard from '../product-card'
import Icon from '@/components/ui/icons'

const SimilarProduct: React.FC = () => {
    const data = PRODUCT_LIST

    return (
        <div className='border border-border rounded-rad my-4 p-5'>
            <div className='flex gap-1'>
                <Icon name='similarproductIcon' width={29} height={29} />
                <h1 className='text-primary font-bold text-2xl'>Similar Products</h1>
            </div>
            
            <ProductSlider products={data}>
                {(product) => <ProductCard product={product} />}
            </ProductSlider>
        </div>
    )
}

export default SimilarProduct