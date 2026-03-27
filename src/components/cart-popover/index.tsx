import React from 'react'
import { cn } from '@/lib/utils';

import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import Icon from '../ui/icons'
import AddSubButton from '../ui/add-sub-btn';
import ListItem from '../ui/list-item';
import { useNavigate } from 'react-router-dom';
import { Typography } from '../ui/typography';
import { useProductState } from '@/store/state';


const CartPopover: React.FC = () => {
    const [open, setOpen] = React.useState<boolean>(false);
    const isLoading = false;

    const increaseQuantity = useProductState(state => state.increaseQuantity);
    const decreaseQuantity = useProductState(state => state.decreaseQuantity);
    const removeProduct = useProductState(state => state.removeProduct);
    const cartProduct = useProductState(state => state.cart);
    const navigate = useNavigate();

    const getContent = () => {
        if (isLoading) {
            return <div>Loading...</div>
        }
        else if (cartProduct.items.length === 0) {
            return (
                <div className='w-full min-w-70 flex items-center justify-center text-sm font-normal text-muted min-h-20'>
                    <Typography variant='muted'>Your cart is empty</Typography>
                </div>
            )
        }
        else {
            return (
                <>
                    {cartProduct.items.map(({ product, quantity }) => (
                        <ListItem
                            key={product._id}
                            deleteIcon={<Icon name='delete' width={12} height={12} className='text-error hover:text-error/60 cursor-pointer' stroke='currentColor' fill='none' onClick={() => removeProduct(product._id)} />}
                            addSubBtn={<AddSubButton count={quantity} addAction={() => { increaseQuantity(product._id) }} subAction={() => { decreaseQuantity(product._id) }} />}
                            product={product}
                        />
                    ))}
                    <div className='w-full flex flex-col gap-2 px-2'>
                        <div className='w-full flex items-center justify-between'>
                            <div className='flex gap-1'>
                                <Typography variant='muted'>Total quantity:</Typography>
                                <Typography variant='muted' className='font-semibold'>{cartProduct.totalQuantity}</Typography>
                            </div>
                            <div className='flex gap-1'>
                                <Typography variant='muted'>Total amount:</Typography>
                                <Typography variant='muted' className='font-semibold'>₹{cartProduct.totalPrice.toFixed(2)}</Typography>
                            </div>
                        </div>
                    </div>
                    <Separator />
                    <div className='w-full px-2 flex justify-between gap-4'>
                        <Button variant='outline' size='sm' className='w-30' onClick={() => navigate('/me/cart')}>
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
