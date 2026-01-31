import Icon from '@/components/ui/icons'
import { Typography } from '@/components/ui/typography'
import React from 'react'

interface stockStatusProps {
    isOutOfStock: boolean
}

const StockStatus: React.FC<stockStatusProps> = ({ isOutOfStock }) => {
    return (
        isOutOfStock ? (
            <div className='flex gap-2 items-center'>
                <Icon name='outStockIcon' width={22} height={22} strokeWidth={1} />
                <Typography variant='small' className='text-error'>Out Of Stock</Typography>
            </div>
        ) : (
            <div className='flex gap-2 items-center text-success'>
                <Icon name='PackageIcon' width={22} height={22} strokeWidth={1} />
                <Typography variant='small' className='text-success'>In Stock</Typography>
            </div>
        )
    )
}

export default StockStatus