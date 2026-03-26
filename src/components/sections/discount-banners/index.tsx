import React from 'react'
import { Typography } from '@/components/ui/typography'

const DiscountBanners: React.FC = () => {
    return (
        <div className='w-full flex justify-between gap-7'>
            <div className='w-full min-h-80 flex items-center bg-[url(/discount_banner_1.svg)] bg-cover'>
                <div className='flex flex-col gap-5 px-13'>
                    <Typography variant='small' className='text-black text-md'>Deal of the Week</Typography>
                    <Typography variant='small' className='text-black text-3xl'>Flat 25% OFF</Typography>
                    <Typography variant='small' className='text-black text-md'>Hurry, Limited time Offer!</Typography>
                    <button className='max-w-30 border p-3 cursor-pointer'>Shop Now</button>
                </div>
            </div>
            <div className='w-full min-h-80 flex items-center bg-[url(/discount_banner_2.svg)] bg-cover'>
                <div className='flex flex-col gap-5 px-13'>
                    <Typography variant='small' className='text-black text-md'>Up to 65% Discount</Typography>
                    <Typography variant='small' className='text-black text-3xl'>Everyday Saving</Typography>
                    <Typography variant='small' className='text-black text-md'>In-store limited time Offer!</Typography>
                    <button className='max-w-30 border p-3 cursor-pointer'>Shop Now</button>
                </div>
            </div>
        </div>
    )
}

export default DiscountBanners