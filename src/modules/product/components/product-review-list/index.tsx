import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icons'
import React from 'react'


const reviews = [
    {
        rating: 4,
        title: "Cool and unique design!",
        comment:
            "Really loved the fox illustration—it’s different from the usual prints. Got compliments the first day I wore it. Fits perfectly too!",
        author: "Sachit Dabhi"
    },
    {
        rating: 3,
        title: "Nice but print could be sharper",
        comment:
            "Design is cool, but I expected the colors to pop a bit more in real life. Still a decent tee for everyday use.",
        author: "Jay Moteriya"
    },
    {
        rating: 4,
        title: "Great quality fabric",
        comment:
            "The cotton feels soft and breathable. Print looks durable after a couple of washes. Wish they had more colors though.",
        author: "Maulik Koli"
    },
    {
        rating: 5,
        title: "Love the fox theme!",
        comment:
            "As an animal lover, this was an instant buy. The detailing in the design is amazing and it fits true to size.",
        author: "Kunjesh Patadiya"
    }
];



const ProductReviewList: React.FC = () => {
    return (
        <>
            <hr className='border border-border mx-3 my-2' />
            <div className='flex flex-col gap-7 items-center py-2'>
                {reviews.map((review, index) => {
                    return (
                        <div key={index} className='flex flex-col gap-3'>
                            <div className='flex gap-1'>
                                {[1, 2, 3, 4, 5].map((index) => {
                                    return (
                                        <Icon key={index} name='star' width={24} height={24} />
                                    )
                                })}
                            </div>
                            <p className='text-muted font-bold'>{review.title}</p>
                            <p className='text-muted'>{review.comment}</p>
                            <p className='text-blue-600'>{review.author}</p>
                        </div>
                    )
                })}

                <Button variant={'default'} className='text-white' >View All</Button>
            </div>
        </>
    )
}

export default ProductReviewList