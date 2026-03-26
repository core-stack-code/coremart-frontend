import React from 'react'
import Icon from '@/components/ui/icons'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

const CollectionBanner: React.FC = () => {
    return (
        <div className='w-full min-h-166 flex flex-col justify-center items-center gap-14 px-29 bg-[url(/collection.svg)] bg-cover rounded-rad'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <Typography variant='large' className='uppercase text-white text-6xl text-center'>Embrace Style with Our Exclusive Collection, and Order our items now</Typography>
                <Typography variant='body' className='text-white text-center'>Elevate your fashion game today! Explore our curated collection and make a statement with timeless style. Embrace the extraordinary – shop now for a wardrobe that speaks volumes.</Typography>
            </div>
            <div className='flex gap-3'>
                <Button className='text-white px-15 py-7 rounded-full'>Buy Now</Button>
                <button className='bg-white p-4 rounded-full hover:bg-primary hover:text-white hover:cursor-pointer'>
                    <Icon name='MoveUpRight' />
                </button>
            </div>
        </div>
    )
}

export default CollectionBanner