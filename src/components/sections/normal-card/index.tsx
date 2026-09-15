import React from 'react'
import { Button } from '@/components/ui/button'

const NormalCard: React.FC = () => {
    return (
        <div className='w-full h-full flex items-center justify-center gap-12 my-4'>
            <div className='w-full flex items-center justify-center p-8 bg-primary/50 rounded-3xl'>
                <div className='flex flex-col items-center gap-3'>
                    <span className='text-base text-background'>Flat 20% Discount on winter cloathes</span>
                    <Button variant="card" className='rounded-2xl max-w-50 w-24 text-sm py-1 px-4 h-8 max-h-8' size="sm">
                        Shop Now
                    </Button>
                </div>
            </div>
            <div className='w-full flex items-center justify-center p-8 bg-primary/50 rounded-3xl'>
                <div className='flex flex-col items-center gap-3'>
                    <span className='text-base text-background'>Free Shipping on orders over ₹ 1000</span>
                    <Button variant="card" className='rounded-2xl max-w-50 w-24 text-sm py-1 px-4 h-8 max-h-8' size="sm">
                        Shop Now
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default NormalCard
