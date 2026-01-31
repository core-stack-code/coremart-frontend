import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icons'
import { Typography } from '@/components/ui/typography'
import { useAppDispatch } from '@/hooks/redux'
import AddCartButton from '@/modules/product/components/add-cart-btn'
import { getCardDetails } from '@/store/slices/productSlice'
import type { CartItemType, ProductType } from '@/types/products'
import React from 'react'

export type cardVariant = "whislist" | "saved"

interface WhislistSavedCardProps {
    product: ProductType,
    variant?: cardVariant
}

const WhislistSavedCard: React.FC<WhislistSavedCardProps> = ({ product, variant = "whislist" }) => {

    const isCardWhislist = variant === "whislist";

    const dispatch = useAppDispatch();

    const getCardData = () => {
        const payload: CartItemType = {
            product: {
                _id: product._id,
                name: product.name,
                slug: product.slug,
                category: product.category,
                price: product.price,
                color: product.color,
                size: product.size,
                image: product.images[0],
                description: product.description,
            },
            quantity: 1,
            itemTotal: product.price * 1
        };

        dispatch(getCardDetails(payload))
    }

    return (
        <div className="max-h-60 w-full flex justify-between rounded-3xl overflow-hidden border border-border">

            <div className="w-100 h-full rounded-2xl flex justify-center items-center">
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full rounded-2xl object-cover"
                />
            </div>

            <div className="w-full flex flex-col gap-4 px-3 py-3">
                <div className="flex justify-between items-start gap-3">
                    <div className="flex flex-col gap-1">
                        <Typography variant='large'>
                            {product.name}
                        </Typography>
                        <Typography  className="text-muted">
                            {product.category}
                        </Typography>
                    </div>

                    <Icon
                        name="Heart"
                        width={22}
                        height={22}
                        stroke={product.isFav ? "#EF4444" : "currentColor"}
                        strokeWidth={2}
                        fill={product.isFav ? "#EF4444" : "none"}
                        className="cursor-pointer"
                    />
                </div>

                <div className="flex gap-2 text-sm">
                    <div className="flex flex-col gap-1 text-muted">
                        <Typography variant='small'>Size :</Typography>
                        <Typography variant='small'>Color :</Typography>
                    </div>
                    <div className="flex flex-col gap-1 text-foreground font-medium">
                        <Typography variant='small' className='text-black'>{product.size}</Typography>
                        <Typography variant='small' className='text-black'>{product.color}</Typography>
                    </div>
                </div>

                <span className="text-sm font-bold text-primary">$ {product.price} </span>

                <div className="flex flex-col gap-2">
                    <AddCartButton productId={product._id} getCardData={() => { getCardData() }} />

                    {isCardWhislist &&
                        <Button variant="outline" size="sm"> Save for later </Button>
                    }
                </div>
            </div>
        </div>

    )
}

export default WhislistSavedCard