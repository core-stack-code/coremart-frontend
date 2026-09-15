import { Button } from '@/components/ui/button'
import type { CartItemType } from '@/types/products'
import React from 'react'

interface cartProductCardProps {
    product: CartItemType;
}


const CartProductCard: React.FC<cartProductCardProps> = ({ product }) => {
    return (
        <div className="w-full h-42 flex justify-between gap-3 items-center border border-border shadow-lg rounded-rad overflow-hidden">
            <div className='w-1/2 h-full'>
                <img
                    src={product.product.image}
                    alt="product image"
                    className="w-full h-full object-cover rounded-rad" />
            </div>

            <div className="w-full flex flex-col gap-4 p-3">

                {/* Category & Title */}
                <div className="flex flex-col gap-1">
                    <p className="text-base font-medium text-muted uppercase">
                        {product.product.name}
                    </p>
                    <p className="text-sm font-semibold text-foreground leading-snug">
                        {product.product.category}
                    </p>
                </div>

                <div className="flex gap-2 text-sm">
                    <div className="flex flex-col gap-2 text-muted">
                        <span>Size :</span>
                        <span>Color :</span>
                    </div>

                    <div className="flex flex-col gap-2 text-foreground">
                        <span className="font-normal">{product.product.size}</span>
                        <span className="font-normal">{product.product.color}</span>
                    </div>
                </div>

                <div className="flex justify-end">
                    <Button variant="outline" size="sm">Save for later</Button>
                </div>
            </div>
        </div>
    )
}

export default CartProductCard