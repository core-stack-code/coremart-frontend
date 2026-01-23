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
        <div className='w-full grid grid-cols-2 gap-8'>

            <ImageGallery images={product.images} />

            <div className='flex flex-col gap-6'>

                {/* left details component */}
                <ProductInfo product={product} />

                <div className='flex flex-col gap-6 border border-border rounded-3xl p-6 bg-white shadow-sm'>

                    <ProductReviewComponent rating={product.rating} reviewCount={product.numReviews} />

                    <hr className='border-border' />

                    {/* review list */}
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-col gap-5'>
                            {
                                reviews.map((review, index) => {
                                    return (<ProductReviewList key={index} review={review} />)
                                })
                            }
                        </div>

                        <div className='flex justify-center pt-2'>
                            <Button variant={'outline'} size='default' className='rounded-rad min-w-40 border-primary text-primary hover:bg-primary hover:text-white text-base font-medium' >View All Reviews</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailComponent
