import React from 'react'
import { cn } from '@/lib/utils';

import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import Icon from '../ui/icons'
import AddSubButton from '../ui/add-sub-btn';
import ListItem from '../ui/list-item';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { decreaseQuantity, increaseQuantity, removeProduct } from '@/store/slices/productSlice';


const CartPopover: React.FC = () => {
    const [open, setOpen] = React.useState<boolean>(false);
    const isLoading = false;

    const cartProduct = useAppSelector(state => state.product.cart);
    const disPatch = useAppDispatch();

    const getContent = () => {
        if (isLoading) {
            return <div>Loading...</div>
        }
        else if (cartProduct.items.length === 0) {
            return (
                <div className='w-full min-w-70 flex items-center justify-center text-sm font-normal text-muted min-h-20'>
                    <span>Your cart is empty</span>
                </div>
            )
        }
        else {
            return (
                <>
                    {cartProduct.items.map(({ product, quantity }) => (
                        <ListItem
                            key={product._id}
                            deleteIcon={<Icon name='delete' width={12} height={12} className='text-error hover:text-error/60 cursor-pointer'  stroke='currentColor' fill='none' onClick={() => disPatch(removeProduct(product._id))} />}
                            addSubBtn={<AddSubButton count={quantity} addAction={() => {disPatch(increaseQuantity(product._id))}} subAction={() => {disPatch(decreaseQuantity(product._id))}} />}
                            product={product}
                        />
                    ))}
                    <div className='w-full flex flex-col gap-2 px-2'>
                        <div className='w-full flex items-center justify-between'>
                            <div className='flex gap-1'>
                                <span className='text-sm font-normal text-muted'>Total quantity:</span>
                                <span className='text-sm font-medium text-muted'>{cartProduct.totalQuantity}</span>
                            </div>
                            <div className='flex gap-1'>
                                <span className='text-sm font-normal text-muted'>Total amount:</span>
                                <span className='text-sm font-medium text-muted'>₹{cartProduct.totalPrice.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                    <Separator />
                    <div className='w-full px-2 flex justify-between gap-4'>
                        <Button variant='outline' size='sm' className='w-30'>
                            View Cart
                        </Button>
                        <Button variant='default' size='sm' className='w-30'>
                            Checkout
                        </Button>
                    </div>
                </>
            )
        }
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger 
                className={cn(
                    'hover:text-primary/60 cursor-pointer',
                    open ? 'text-primary/60' : 'text-muted'
                )}
            >
                <Icon name="cart" width={20} height={20} fill='none' stroke='currentColor' />
            </PopoverTrigger>
            <PopoverContent className='rounded-2xl p-2 w-full'>
               <div className='w-full h-full flex flex-col gap-2'>
                    {getContent()}
               </div>
            </PopoverContent>
        </Popover>
    )
}

export default CartPopover
