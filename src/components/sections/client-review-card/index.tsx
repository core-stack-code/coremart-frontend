import React from 'react'
import Ratting from '@/modules/product/components/ratting'
import { Typography } from '@/components/ui/typography'

interface reviewProps {
    avtar: string,
    description: string,
    accountName: string,
    name: string,
    rate: number
}


interface clientReviewCardProps {
    review: reviewProps
}

const ClientReviewCard: React.FC<clientReviewCardProps> = ({ review }) => {

    const { avtar, description, accountName, name, rate } = review

    return (
        <div className='w-full h-full flex flex-col justify-center items-center gap-6 rounded-rad bg-white px-10 py-6'>
            <div className='flex justify-center items-center'>
                <img src={avtar} alt='avtar' className='w-17 h-17 rounded-full object-cover' />
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <Typography variant='small' className='text-center'>{description}</Typography>
                <Typography variant='body'>@{accountName}</Typography>
            </div>
            <div className='flex flex-col gap-2'>
                <Typography variant='large' className='uppercase'>{name}</Typography>
                <div className='flex w-full items-center gap-2'>
                    <Ratting rate={rate} />
                    <Typography variant='muted'>{rate}/5</Typography>
                </div>
            </div>
        </div>
    )
}

export default ClientReviewCard