import React from 'react'
import type { CartItemType, ProductType } from '@/types/products'
import Icon from '@/components/ui/icons'
import AddCartButton from '../add-cart-btn'
import Ratting from '../ratting'
import { getCardDetails } from '@/store/slices/productSlice'
import { useAppDispatch } from '@/hooks/redux'
import { useNavigate } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Typography } from '@/components/ui/typography'

type ProductCardType = "new" | "discount" | "ratting" | "normal"

interface ProductCardProps {
    product: ProductType
    cardType?: ProductCardType
    isRedirect?: boolean
}

const ProductCard: React.FC<ProductCardProps> = ({ product, cardType = "normal", isRedirect = false }) => {
    const navigate = useNavigate();
    const disPatch = useAppDispatch();

    const handleRedirect = () => {
        if (isRedirect) {
            navigate(`/product/${product.slug}`);
        }
    }


    const getCardData = () => {
        const data: CartItemType = {
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

        disPatch(getCardDetails(data))
    }

    const isRightBagde = cardType === "new" || cardType === "discount"
    const rightBadge = cardType === "new"
        ? "New"
        : ((product.price - 100) * 100) / 1000 // discount % logic (have to change)

    const getContent: Record<ProductCardType, React.ReactNode> = {
        new: null,
        discount: <DiscountSection originalPrice={1000} price={product.price} />,
        normal: <PriceBtnSections id={product._id} price={product.price} getCardData={getCardData} />,
        ratting: <RateSection rate={product.rating} />
    }

    return (
        <div
            onClick={handleRedirect}
            className={cn(
                'w-full max-h-fit min-h-fit flex items-center justify-center',
                isRedirect && 'cursor-pointer hover:shadow-lg rounded-3xl transition-shadow duration-200'
            )}
        >
            <div className='flex flex-col w-full h-full rounded-3xl'>
                <div className='relative w-full h-70 rounded-3xl'>
                    <img
                        src={product.images[0]}
                        alt={product.name}
                        className='w-full h-full object-cover rounded-t-3xl overflow-hidden'
                    />

                    <div className='absolute top-3 right-3 text-muted'>
                        <Icon
                            name='Heart'
                            width={24}
                            height={24}
                            stroke={product.isFav ? "#EF4444" : 'currentColor'}
                            strokeWidth={2}
                            fill={product.isFav ? "#EF4444" : "none"}
                            className='cursor-pointer'
                        />
                    </div>

                    {isRightBagde && (
                        <div className='absolute top-3 left-3'>
                            <Typography className='bg-primary py-1.5 px-4 rounded-xl text-white text-xs flex items-center justify-center'>
                                {rightBadge}
                            </Typography>
                        </div>
                    )}
                </div>
                <div className='flex h-full flex-col gap-3 p-3.5 border-b border-x border-border rounded-b-3xl bg-white'>
                    <div className='flex flex-col gap-2'>
                        <Typography variant='large'>{product.name}</Typography>
                        <Typography variant='small'>{product.category}</Typography>
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
            <Typography>{rate}</Typography>
            <div className='flex w-full items-center gap-2'>
                <Ratting rate={rate} />
                <Typography variant='muted'>({rate}/5)</Typography>
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
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <Typography variant='small' className='font-semibold text-accent'>${price}</Typography>
                <Typography variant='small' className='font-thin text-muted line-through'>${originalPrice}</Typography>
            </div>
            <Typography variant='small' className='text-[0.625rem] bg-primary/30 text-primary py-1.5 px-2 rounded-xl font-normal'>
                Save ${savePrice}
            </Typography>
        </div>
    )
}