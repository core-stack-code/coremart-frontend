import type { CartItemType } from '@/types/products'
import React from 'react'

interface ListItemProps {
    deleteIcon?: React.ReactNode
    addSubBtn?: React.ReactNode
    product: CartItemType['product']
}

const ListItem: React.FC<ListItemProps> = ({ deleteIcon, addSubBtn, product }) => {

    return (
        <div className='w-full h-full p-1 rounded-xl border border-border flex items-center justify-between gap-2'>
            <div className='w-25 h-25 flex items-center justify-center rounded-md'>
                <img src={product.image} alt='cartitem' className='w-full h-full rounded-md object-cover' />
            </div>
            <div className='w-full h-25 flex flex-col gap-3 justify-between p-2'>
                <div className='flex justify-between gap-2'>
                    <div className='flex flex-col gap-2'>
                        <span className='text-sm font-normal text-foreground max-w-40 line-clamp-2'>{product.name}</span>
                        <span className='text-xs font-normal text-muted'>{product.category}</span>
                    </div>
                    {deleteIcon}
                </div>
                <div className='flex items-center justify-between gap-2'>
                    <div className='flex items-center gap-1'>
                        <span className='text-xs font-normal text-muted'>Price : </span>
                        <span className='text-xs font-medium text-primary'>₹{product.price}</span>
                    </div>
                    {addSubBtn}
                </div>
            </div>
        </div>
    )
}

export default ListItem
