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
        <div className='flex flex-col gap-3 p-4 rounded-2xl bg-surface border border-border hover:shadow-sm transition-shadow'>
            <div className='flex gap-1'>
                {Array(review.rating).fill(null).map((_, index) => {
                    return (
                        <Icon key={index} name='star' width={18} height={18} />
                    )
                })}
            </div>
            <p className='text-base font-semibold text-foreground'>{review.title}</p>
            <p className='text-base text-muted leading-relaxed'>{review.comment}</p>
            <p className='text-sm text-secondary font-medium mt-1'>{review.author}</p>
        </div>
    )
}

export default ProductReviewList