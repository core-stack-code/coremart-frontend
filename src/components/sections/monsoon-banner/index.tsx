import React from 'react'
import { Typography } from '@/components/ui/typography'
import TimerCountDown from '../timer-countdown'

const MonsoonBanner: React.FC = () => {
    return (
        <div className='w-full min-h-120 flex justify-end items-center px-25 bg-[url(/monsoon-banner.svg)] bg-cover'>
            <div className='max-w-90 flex flex-col gap-5'>
                <Typography variant='small' className='text-black text-md'>GET BIG DISCOUNT!</Typography>
                <Typography variant='small' className='text-black text-3xl'>New Summer Markdowns Up to 55% OFF</Typography>
                {/* <Typography variant='small' className='text-black text-md'>In-store limited time Offer!</Typography> */}
                <TimerCountDown days={10}/>
                <button className='max-w-30 border p-3 cursor-pointer'>Shop Now</button>
            </div>
        </div>
    )
}

export default MonsoonBanner