import { Typography } from '@/components/ui/typography'
import { PRODUCT_LIST } from '@/lib/helper/testData'
import ProductCard from '@/modules/product/components/product-card'
import ProductGrid from '@/modules/product/components/product-grid'
import React from 'react'

const DiscountTrendingProducts: React.FC = () => {
    const data = PRODUCT_LIST
    // here we call api for new trending products

    return (
        <div className='flex flex-col gap-6'>
            <Typography variant='large'>Shop by Discounts</Typography>
            <ProductGrid columns={5} rows={1} className='gap-7'>
                {data.map((product) => <ProductCard key={product._id} product={product} cardType="discount" isRedirect />)}
            </ProductGrid>
        </div>
    )
}

export default DiscountTrendingProducts