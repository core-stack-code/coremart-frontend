import AddSubButton from '@/components/ui/add-sub-btn';
import Icon from '@/components/ui/icons';
import { Typography } from '@/components/ui/typography';
import { useProductState } from '@/store/state';
import type { CartItemType } from '@/types/products'
import React from 'react'

interface cartProductCardProps {
    product: CartItemType;
}


const CartProductCard: React.FC<cartProductCardProps> = ({ product }) => {

    const increaseQuantity = useProductState(state => state.increaseQuantity);
    const decreaseQuantity = useProductState(state => state.decreaseQuantity);

    return (
        <div className="w-full h-52 flex justify-between items-center gap-8 hover:shadow-md rounded-rad overflow-hidden p-4 bg-white">
            <div className='w-1/4 h-full'>
                <img
                    // src={product.product.image}
                    src='/hero1.png'
                    alt="product image"
                    className="w-full h-full object-cover rounded-rad" />
            </div>

            <div className="w-full flex flex-col gap-10 ">
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-between'>
                        <Typography variant="large" className="uppercase">
                            {/* {product.product.name}  */}Demo</Typography>

                        <Typography variant="large" className="uppercase">
                            {/* {product.product.price}  */}$ 999.00</Typography>

                    </div>

                    <div className="flex items-center gap-2">
                        <div className='bg-muted/20 px-3 py-1 rounded-2xl'>
                            <Typography variant='small' className='text-black'>Size : L</Typography>
                        </div>
                        <div className='bg-muted/20 px-3 py-1 rounded-2xl'>
                            <Typography variant='small' className='text-black'>Color : White</Typography>
                        </div>
                    </div>

                    <Typography variant='muted'>Estimate Delivery : Oct 12 - Oct 14</Typography>
                </div>
                <div className="flex justify-between">
                    <AddSubButton count={product.quantity ?? 1} addAction={() => { increaseQuantity(product.product.id) }} subAction={() => { decreaseQuantity(product.product.id) }} />
                    <Icon name='delete' width={20} height={20} />
                </div>
            </div>
        </div >
    )
}

export default CartProductCard