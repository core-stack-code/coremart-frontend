import React from 'react'
import { Typography } from '@/components/ui/typography'
import { CLIENT_REVIEWS } from '@/lib/helper/testData'
import ClientReviewCard from '../client-review-card'


const ClientReviews: React.FC = () => {
    const data = CLIENT_REVIEWS

    // api will be call from here for the the cleint review details

    return (
        <div className='flex flex-col justify-center items-center py-10 px-24 gap-10 rounded-rad bg-primary/80'>
            <div className='flex flex-col gap-4 justify-center items-center'>
                <Typography variant='large' className='text-white text-6xl uppercase'>WHAT OUR CLIENT SAYS</Typography>
                <Typography variant='body' className='max-w-200 text-center text-white'>Incredible styles and impeccable quality! [Brand Name] exceeds expectations. Their fashion resonates with my unique taste, making every wear a confident statement. Truly a brand I trust.</Typography>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10'>
                {data.map((review, index) => (
                    <ClientReviewCard key={index} review={review} />
                ))}
            </div>
        </div>
    )
}

export default ClientReviews