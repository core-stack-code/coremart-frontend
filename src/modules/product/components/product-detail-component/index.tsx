import React from 'react'
import ProductReviewList from '@/modules/review/components/product-review-list'
import ProductReviewComponent from '@/modules/review/components/product-review'
import ImageGallery from '../image-gallery'
import type { ProductDetailsType } from '@/types/products'
import ProductInfo from '../product-info'
import { reviews } from '@/lib/helper/testData'
import { Button } from '@/components/ui/button'

interface productDetailsProps {
    product: ProductDetailsType
}

const ProductDetailComponent: React.FC<productDetailsProps> = ({ product }) => {

    return (
        <div className='w-full mt-2 grid grid-cols-2 gap-10'>

            <ImageGallery images={product.images} />

            <div className='flex flex-col gap-4'>

                {/* left details component */}
                <ProductInfo product={product} />

                <div className='flex flex-col gap-3 border border-border rounded-2xl px-4 py-6'>

                    <ProductReviewComponent rating={product.rating} reviewCount={product.numReviews} />

                    <hr className='border-border' />

                    {/* review list */}
                    <div className='flex flex-col gap-7 items-center px-4'>
                        {
                            reviews.map((review, index) => {
                                return (<ProductReviewList key={index} review={review} />)
                            })
                        }

                        <Button variant={'default'} className='text-white' >View All</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailComponent
