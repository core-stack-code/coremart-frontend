import ProductSkeleton from '@/components/product-skeleton'
import { Typography } from '@/components/ui/typography'
import { PRODUCT_LIST } from '@/lib/helper/testData'
import { useGetProductList } from '@/modules/product/apis/queries'
import ProductCard from '@/modules/product/components/product-card'
import ProductGrid from '@/modules/product/components/product-grid'
import React from 'react'

const DiscountTrendingProducts: React.FC = () => {

    const { data, isLoading } = useGetProductList(1);

    // const data = PRODUCT_LIST
    // here we call api for new trending products
    if (isLoading) {
        return <ProductSkeleton row={4} colunms={4} />
    }

    return (
        <div className='flex flex-col gap-6'>
            <Typography variant='large' className='text-3xl'>Shop by Discounts</Typography>
            <ProductGrid columns={4} rows={1} className='gap-8'>
                {data?.data?.products.map((product) => <ProductCard key={product.id} product={product} cardType="discount" isRedirect />)}
            </ProductGrid>
        </div>
    )
}

export default DiscountTrendingProducts