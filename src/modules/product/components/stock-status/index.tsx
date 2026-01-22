import Icon from '@/components/ui/icons'
import React from 'react'

interface stockStatusProps {
    isOutOfStock: boolean
}

const StockStatus: React.FC<stockStatusProps> = ({ isOutOfStock }) => {
    return (
        isOutOfStock ? (
            <div className='flex gap-2 items-center text-error'>
                <Icon name='outStockIcon' width={20} height={20} strokeWidth={1} />
                <p>Out Of Stock</p>
            </div>
        ) : (
            <div className='flex gap-2 items-center text-success'>
                <Icon name='PackageIcon' width={20} height={20} strokeWidth={1} />
                <p>In Stock</p>
            </div>
        )
    )
}

export default StockStatus