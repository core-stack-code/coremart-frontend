import type { CartItemType, ProductType } from '@/types/products'
import React from 'react'
import AddCartButton from '../add-cart-btn'
import Icon from '@/components/ui/icons'
import { useAppDispatch } from '@/hooks/redux'
import { getCardDetails } from '@/store/slices/productSlice'
import { Typography } from '@/components/ui/typography'

interface ProductListCardProps {
    product: ProductType
}

const ProductListCard: React.FC<ProductListCardProps> = ({ product }) => {
    const disPatch = useAppDispatch();

    const getCardData = () => {
        const data: CartItemType = {
            product: {
                _id: product._id,
                name: product.name,
                slug: product.slug,
                category: product.category,
                price: product.price,
                image: product.images[0],
                color: product.color,
                size: product.size,
                description: product.description,
            },
            quantity: 1,
            itemTotal: product.price * 1
        };

        disPatch(getCardDetails(data))
    }


    return (
        <div className='w-full h-52 flex flex-row border border-border rounded-3xl gap-7'>
            <div className='w-1/3 h-full'>
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className='w-full h-full object-fit rounded-3xl overflow-hidden'
                />
            </div>
            <div className=' w-full flex flex-col gap-2 py-5 px-3'>
                <div className='flex justify-between items-start gap-2'>
                    <div className='w-full flex justify-between items-center '>
                        <Typography variant='large'>{product.name}</Typography>
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
                </div>
                <Typography variant='small'>{product.brand}</Typography>
                <div className='max-w-155 flex flex-col gap-3'>
                    <Typography variant='small' className='line-clamp-3 tracking-wide! leading-5!'>{product.description}</Typography>
                    <div className='flex items-center gap-4 mt-auto pt-2'>
                        <Typography variant='large' className='font-semibold text-primary'>$ {product.price}</Typography>
                        <AddCartButton productId={product._id} getCardData={getCardData} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductListCard
