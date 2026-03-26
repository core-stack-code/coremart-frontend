import React from 'react'
import ProductCard from '@/modules/product/components/product-card'
import ProductGrid from '@/modules/product/components/product-grid'
import { Typography } from '@/components/ui/typography'
import { PRODUCT_LIST } from '@/lib/helper/testData'

const SellingProducts: React.FC = () => {
    const data = PRODUCT_LIST

    // here we call api for top selling products
    
    return (
        <div className='flex flex-col justify-center items-center py-10 px-24 gap-10 rounded-rad bg-surface'>
            <div className='flex flex-col gap-4 justify-center items-center'>
                <Typography variant='large' className='font-bold text-6xl uppercase'>
                    OUR HOT SELLING PRODDUCTS
                </Typography>
                <Typography variant='body' className='max-w-200 text-center text-muted'>
                    Discover a fusion of trend and sophistication in our curated collection. From chic essentials to statement pieces, our fashion embraces individuality, ensuring every wardrobe reflects style, versatility, and timeless elegance.
                </Typography>
            </div>

            <ProductGrid columns={4} rows={1} className='gap-5'>
                {data.map((product) => <ProductCard key={product._id} product={product} cardType="ratting" isRedirect />)}
            </ProductGrid>
        </div>
    )
}

export default SellingProducts