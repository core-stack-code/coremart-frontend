import type { CartItemType } from '@/types/products'
import React from 'react'
import AddCartButton from '../add-cart-btn'
import Icon from '@/components/ui/icons'
import { Typography } from '@/components/ui/typography'
import { useProductState } from '@/store/state'
import type { productItem } from '../../apis/types'
import { cn } from '@/lib/utils'
import { useNavigate } from 'react-router-dom'

interface ProductListCardProps {
    product: productItem,
}

const ProductListCard: React.FC<ProductListCardProps> = ({ product }) => {

    const navigate = useNavigate();
    const getCardDetails = useProductState(state => state.getCardDetails);

    const isRedirect = true;

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

    return (
        <div
            onClick={handleRedirect}
            className={cn(
                'w-full h-52 flex flex-row border border-border rounded-3xl gap-7',
                isRedirect && 'cursor-pointer hover:shadow-lg transition-shadow duration-200'
            )}>
            <div className='w-1/3 h-full'>
                <img
                    src={product.thumbnail.url}
                    alt={product.thumbnail.altText}
                    className='w-full h-full object-fit rounded-3xl overflow-hidden'
                />
            </div>
            <div className='w-full flex flex-col gap-2 py-5 px-3'>
                <div className='flex justify-between items-start gap-2'>
                    <Typography variant='large'>{product.name}</Typography>
                    <Icon
                        name='Heart'
                        width={20}
                        height={20}
                        stroke={product.isFavorite ? "#EF4444" : 'currentColor'}
                        strokeWidth={2}
                        fill={product.isFavorite ? "#EF4444" : "none"}
                        className='cursor-pointer text-primary'
                        onClick={(e) => { e.stopPropagation() }}
                    />
                </div>
                {/* <Typography variant='small'>{product.brand}</Typography> */}
                <div className='max-w-155 flex flex-col gap-3'>
                    <Typography variant='small' className='line-clamp-3 tracking-wide! leading-5!'>{product.description}</Typography>
                    <div className='flex items-center gap-4 mt-auto pt-2'>
                        <Typography variant='small' className='font-semibold text-primary'>$ {product.price}</Typography>
                        <AddCartButton productId={product.id} getCardData={getCardData} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductListCard
