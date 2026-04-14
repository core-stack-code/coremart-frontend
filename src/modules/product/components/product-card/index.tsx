import React from 'react'
import type { CartItemType } from '@/types/products'
import Icon from '@/components/ui/icons'
import AddCartButton from '../add-cart-btn'
import Ratting from '../ratting'
import { useNavigate } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Typography } from '@/components/ui/typography'
import { useProductState } from '@/store/state'
import type { productItem } from '../../apis/types'

type ProductCardType = "new" | "discount" | "ratting" | "normal"

interface ProductCardProps {
    product: productItem
    cardType?: ProductCardType
    isRedirect?: boolean
}

const ProductCard: React.FC<ProductCardProps> = ({ product, cardType = "normal", isRedirect = false }) => {

    const navigate = useNavigate();
    const getCardDetails = useProductState(state => state.getCardDetails)

    const handleRedirect = () => {
        if (isRedirect) {
            navigate(`/product/${product.slug}`);
        }
    }

    const getCardData = () => {
        const data: CartItemType = {
            product: {
                id: product.id,
                name: product.name,
                slug: product.slug,
                price: product.price,
                image: product.thumbnail.url,
                description: product.description,
            },
            quantity: 1,
            itemTotal: product.price * 1
        };

        getCardDetails(data)
    }

    const isRightBagde = cardType === "new" || cardType === "discount"
    const rightBadge = cardType === "new"
        ? "New"
        : ((product.price - 100) * 100) / 1000 // discount % logic (have to change)
    const isNotRatting = cardType !== 'ratting'
    const isLeftBadge = cardType === "ratting"

    const getContent: Record<ProductCardType, React.ReactNode> = {
        new: null,
        discount: <DiscountSection originalPrice={1000} price={product.price} />,
        normal: <PriceBtnSections id={product.id} price={product.price} getCardData={getCardData} />,
        ratting: <RateSection rate={product.rating} />
    }

    return (
        <div
            onClick={handleRedirect}
            className={cn(
                'w-full max-h-fit min-h-fit flex items-center justify-center',
                isRedirect && 'cursor-pointer hover:shadow-lg transition-shadow duration-200'
            )}
        >
            <div className='flex flex-col w-full h-full rounded-3xl'>
                <div className='relative w-full h-70 rounded-3xl'>
                    <img
                        src={product.thumbnail.url}
                        alt={product.thumbnail.altText}
                        className='w-full h-full object-cover overflow-hidden'
                    />

                    {isNotRatting && (
                        <div className='absolute top-2 right-2 text-primary'>
                            <Icon
                                name='Heart'
                                width={20}
                                height={20}
                                stroke={product.isFavorite ? "#EF4444" : 'currentColor'}
                                strokeWidth={2}
                                fill={product.isFavorite ? "#EF4444" : "none"}
                                className='cursor-pointer'
                                onClick={(e) => { e.stopPropagation() }}
                            />
                        </div>
                    )}

                    {isLeftBadge && (
                        <div className='absolute top-2 right-2'>
                            <Typography className='flex gap-1 bg-white py-1.5 px-2 rounded-xl text-[0.625rem] items-center justify-center'>
                                <Icon name='star' width={12} height={12} className='text-primary' />
                                {product.rating}
                            </Typography>
                        </div>
                    )}


                    {isRightBagde && (
                        <div className='absolute top-2 left-2'>
                            <Typography className='bg-primary py-1.5 px-2 rounded-xl text-white text-[0.625rem] flex items-center justify-center'>
                                {rightBadge}% OFF
                            </Typography>
                        </div>
                    )}
                </div>
                <div className='flex h-full flex-col gap-3 p-3.5 bg-white'>
                    <div className='flex flex-col gap-2'>
                        <Typography variant='body' className='font-bold'>{product.name}</Typography>
                        {/* <Typography variant='small'>{product.category}</Typography> */}
                    </div>
                    {getContent[cardType]}
                </div>
            </div>
        </div>
    )
}

export default ProductCard



const RateSection: React.FC<{ rate: number }> = function ({ rate }) {
    return (
        <div className='flex flex-col gap-1.5'>
            <div className='w-full flex items-center gap-2'>
                <Ratting rate={rate} />
                <Typography variant='muted'>({rate} Reviews)</Typography>
            </div>
        </div>
    )
}

const PriceBtnSections: React.FC<{ price: number; id: string, getCardData: () => void }> = function ({ id, price, getCardData }) {
    return (
        <div className='flex items-center justify-between'>
            <Typography variant='small' className='font-semibold text-primary'>${price}</Typography>
            <AddCartButton productId={id} getCardData={getCardData} />
        </div>
    )
}

const DiscountSection: React.FC<{ price: number; originalPrice: number }> = ({ price, originalPrice }) => {
    const savePrice = originalPrice - price;
    return (
        <div className='flex flex-col items-start gap-3'>
            <div className='flex items-center gap-3'>
                <Typography variant='lead' className='font-extrabold text-primary'>${price}</Typography>
                <Typography variant='small' className='font-thin text-muted line-through'>${originalPrice}</Typography>
            </div>
            <Typography variant='small' className='text-[0.625rem] bg-primary/10 text-primary py-1.5 px-2 rounded-md font-bold'>
                Save ${savePrice}
            </Typography>
        </div>
    )
}