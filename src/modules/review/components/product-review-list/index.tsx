import Icon from '@/components/ui/icons'
import React from 'react'


interface reviewProps {
    rating: number
    title: string
    comment: string
    author: string
}

interface productReviewListProps {
    review: reviewProps
    // we need to change this interface and props based on apis response
}

const ProductReviewList: React.FC<productReviewListProps> = ({ review }) => {
    return (
        <div className='flex flex-col gap-3'>
            <div className='flex gap-1'>
                {Array(review.rating).fill(null).map((index) => {
                    return (
                        <Icon key={index} name='star' width={24} height={24} />
                    )
                })}
            </div>
            <p className='text-muted font-bold'>{review.title}</p>
            <p className='text-muted'>{review.comment}</p>
            <p className='text-secondary'>{review.author}</p>
        </div>
    )
}

export default ProductReviewList