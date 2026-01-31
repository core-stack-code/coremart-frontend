import React from 'react'
import OrderSummary from '../order-summary'
import type { CartType } from '@/types/products';
import CartProductCard from '../cart-product-card';
import AddSubButton from '@/components/ui/add-sub-btn';
import { useAppDispatch } from '@/hooks/redux';
import { decreaseQuantity, increaseQuantity } from '@/store/slices/productSlice';
import { Typography } from '@/components/ui/typography';

interface cartProductListProps {
    cartItems: CartType;
}

const CartProductList: React.FC<cartProductListProps> = ({ cartItems }) => {

    const disPatch = useAppDispatch();

    return (
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-15">
            <div className="w-full border border-border rounded-rad p-4 ">
                <div className="grid grid-cols-2 font-bold">
                    <Typography >Product</Typography>
                    <div className="grid grid-cols-3 items-center">
                        <Typography className="mx-auto">Price</Typography>
                        <Typography className="mx-auto">Quantity</Typography>
                        <Typography className="mx-auto">Total Price</Typography>
                    </div>
                </div>

                {cartItems.items.map((cartProduct, index) => (
                    <div key={index} className="grid grid-cols-2 py-3">

                        <CartProductCard product={cartProduct} />

                        <div className=" grid grid-cols-3 items-center">

                            <Typography className="mx-auto">$ {cartProduct.product.price}</Typography>

                            <div className="mx-auto">
                                <AddSubButton count={cartProduct.quantity} addAction={() => { disPatch(increaseQuantity(cartProduct.product._id)) }} subAction={() => { disPatch(decreaseQuantity(cartProduct.product._id)) }} />
                            </div>

                            <Typography className="mx-auto">$ {cartProduct.product.price * cartProduct.quantity}</Typography>
                        </div>
                    </div>
                ))}
            </div>

            <OrderSummary title="Cart Total" subtotal={cartItems.totalPrice} discount={0} />

        </div>
    )
}

export default CartProductList