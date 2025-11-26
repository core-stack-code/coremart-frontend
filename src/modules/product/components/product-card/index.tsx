import React from 'react'
import type { CartType, ProductType } from '@/types/products'
import Icon from '@/components/ui/icons'
import AddCartButton from '../add-cart-btn'
import Ratting from '../ratting'
import { useDispatch } from 'react-redux'
import { getCardDetails } from '@/store/slices/productSlice'

type ProductCardType = "new" | "discount" | "ratting" | "normal"

interface ProductCardProps {
    product: ProductType
    cardType?: ProductCardType
}

const ProductCard: React.FC<ProductCardProps> = ({ product, cardType = "normal" }) => {

    const disPatch = useDispatch();

    const getCardData = () => {
        const data = {
            items: [
                {
                    product: {
                        _id: product._id,
                        name: product.name,
                        slug: product.slug,
                        category: product.category,
                        price: product.price,
                        image: product.images[0],
                    },
                    quantity: 0,
                    itemTotal: 0,
                }
            ],
            totalPrice: 0,
            totalQuantity: 0

        }

        disPatch(getCardDetails(data))
    }

    const isRightBagde = cardType === "new" || cardType === "discount"
    const rightBadge = cardType === "new"
        ? "New"
        : ((product.price - 100) * 100) / 1000 // discount % logic (have to change)

    const getContent: Record<ProductCardType, React.ReactNode> = {
        new: null,
        discount: <DiscountSection originalPrice={1000} price={product.price} />,
        normal: <PriceBtnSections id={product._id} price={product.price} getCardData ={getCardData} />,
        ratting: <RateSection rate={product.rating} />
    }

    return (
        <div className='w-full max-h-fit min-h-fit flex items-center justify-center'>
            <div className='flex flex-col w-full h-full rounded-3xl'>
                <div className='relative w-full h-70 rounded-3xl'>
                    <img
                        src={product.images[0]}
                        alt={product.name}
                        className='w-full h-full object-cover rounded-t-3xl overflow-hidden'
                    />

                    <div className='absolute top-3 right-3 text-muted'>
                        <Icon
                            name='heart'
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
                            <span className='bg-primary py-1.5 px-4 rounded-xl text-white text-xs flex items-center justify-center'>
                                {rightBadge}
                            </span>
                        </div>
                    )}
                </div>
                <div className='flex h-full flex-col gap-3 p-3.5 border-b border-x border-border rounded-b-3xl bg-white'>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-base font-medium text-foreground'>{product.name}</h3>
                        <p className='text-xs text-muted'>{product.category}</p>
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
            <p className='text-xs text-muted'>24 Reviews</p>
            <div className='flex w-full items-center gap-2'>
                <Ratting rate={rate} />
                <p className='text-xs text-muted'>({rate}/5)</p>
            </div>
        </div>
    )
}

const PriceBtnSections: React.FC<{ price: number; id: string, getCardData: () => void}> = function ({ id, price, getCardData }) {
    return (
        <div className='flex items-center justify-between'>
            <span className='text-base font-semibold text-muted'>${price}</span>
            <AddCartButton productId={id} getCardData={getCardData} />
        </div>
    )
}

const DiscountSection: React.FC<{ price: number; originalPrice: number }> = ({ price, originalPrice }) => {
    const savePrice = originalPrice - price;
    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <span className='text-base font-semibold text-accent'>${price}</span>
                <span className='text-base font-thin text-muted line-through'>${originalPrice}</span>
            </div>
            <span className='text-[0.625rem] bg-primary/30 text-primary py-1.5 px-2 rounded-xl font-normal'>
                Save ${savePrice}
            </span>
        </div>
    )
}