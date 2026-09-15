import { PRODUCT_LIST } from '@/lib/helper/testData'
import React from 'react'
import ProductSlider from '../product-slider'
import ProductCard from '../product-card'
import Icon from '@/components/ui/icons'

const SimilarProduct: React.FC = () => {
    const data = PRODUCT_LIST

    return (
        <div className='border border-border rounded-3xl p-6 bg-white shadow-sm'>
            <div className='flex gap-2 items-center mb-6 pb-4 border-b border-border'>
                <Icon name='similarproductIcon' width={26} height={26} />
                <h2 className='text-primary font-semibold text-xl'>Similar Products</h2>
            </div>
            
            <ProductSlider products={data}>
                {(product) => <ProductCard product={product} isRedirect />}
            </ProductSlider>
        </div>
    )
}

export default SimilarProduct