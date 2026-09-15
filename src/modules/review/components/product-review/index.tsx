import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icons'
import React, { useState } from 'react'
import ProductReviewForm from '../review-form';
import RatingDistributionBar from '../rating-distribution-bar';


interface productRevirwComponentProps {
    rating: number
    reviewCount: number
}


const ProductReviewComponent: React.FC<productRevirwComponentProps> = ({ rating, reviewCount }) => {

    const [openReviewForm, setOpenReviewForm] = useState<boolean>(false)

    return (
        <>
            <div>
                <div className='flex items-center gap-2 mb-6'>
                    <Icon name='ratingReviewStarIcon' width={26} height={26} />
                    <h2 className='text-primary text-xl font-semibold'>Reviews & Rating</h2>
                </div>

                <div className='grid grid-cols-2 gap-8'>
                    <div className='flex flex-col justify-center items-start gap-3 bg-surface rounded-2xl p-5 border border-border'>
                        <div className='flex gap-3 items-center'>
                            <p className='text-5xl font-bold text-primary'>{rating}</p>
                            <Icon name='star' width={40} height={40} />
                        </div>
                        <p className='text-base text-muted font-medium'>{reviewCount} Reviews</p>
                    </div>

                    <RatingDistributionBar />

                </div>

                {/* review form */}
                <div className='flex justify-end mt-4'>
                    <Button
                        size='default'
                        variant='default'
                        onClick={() => setOpenReviewForm((pre) => !pre)}
                        className='text-white rounded-rad px-6 text-base font-medium'
                    >
                        Write a Review
                    </Button>
                </div>
            </div>

            {openReviewForm && <ProductReviewForm setOpneReviewForm={setOpenReviewForm} />}

        </>
    )
}

export default ProductReviewComponent