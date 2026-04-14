import React from 'react'
import OrderSummary from '../order-summary'
import type { CartType } from '@/types/products';
import CartProductCard from '../cart-product-card';

interface cartProductListProps {
    cartItems: CartType;
}

const CartProductList: React.FC<cartProductListProps> = ({ cartItems }) => {
    return (
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-7">
            <div className="w-full flex flex-col gap-4">
                {cartItems.items.map((cartProduct, index) => (
                    <CartProductCard key={index} product={cartProduct} />
                ))}
            </div>

            <OrderSummary title="Cart Summary" subtotal={2000} discount={150} tax={50} shipping={150} />

        </div>
    )
}

export default CartProductList