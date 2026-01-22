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
            <div className='px-5'>
                <div className='flex items-center gap-3'>
                    <Icon name='ratingReviewStarIcon' width={24} height={24} />
                    <h1 className='text-primary text-lg font-bold'>Reviews & Rating</h1>
                </div>

                <div className='grid grid-cols-2 py-5'>
                    <div className='w-auto flex flex-col justify-center items-start'>
                        <div className='flex gap-3'>
                            <p className='text-4xl'>{rating}</p>
                            <Icon name='star' width={40} height={40} />
                        </div>
                        <p>{rating} Rating & {reviewCount} Reviews</p>
                    </div>

                    <RatingDistributionBar />

                </div>

                {/* review form */}
                <div className='flex justify-end'>
                    <Button
                        size='sm'
                        variant='default'
                        onClick={() => setOpenReviewForm((pre) => !pre)}
                        className='text-white'
                    >
                        Add Review
                    </Button>
                </div>
            </div>

            {openReviewForm && <ProductReviewForm setOpneReviewForm={setOpenReviewForm} />}

        </>
    )
}

export default ProductReviewComponent