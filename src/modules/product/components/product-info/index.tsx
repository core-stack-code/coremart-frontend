import React from 'react'
import type { CartItemType, ProductDetailsType } from '@/types/products'
import SizeSelection from '../size-selection'
import ProductMeta from '../product-meta'
import ProductAttributes from '../product-attributes'
import StockStatus from '../stock-status'
import AddCartButton from '../add-cart-btn'
import { Button } from '@/components/ui/button'
import { useAppDispatch } from '@/hooks/redux'
import { getCardDetails } from '@/store/slices/productSlice'
import ProductSpecification from '../product-specification'
import { Typography } from '@/components/ui/typography'


interface productInfoProps {
    product: ProductDetailsType,
}

const ProductInfo: React.FC<productInfoProps> = ({ product }) => {

    const isOutOfStock = product.stock === 0;

    const disPatch = useAppDispatch();

    const getDetailsData = () => {
        const data: CartItemType = {
            product: {
                _id: product.id,
                name: product.name,
                slug: product.slug,
                category: product.category,
                price: product.price,
                image: product.images[0],
                color: 'White',
                size: product.sizes[0],
                description: product.description,
            },
            quantity: 1,
            itemTotal: product.price * 1
        };

        disPatch(getCardDetails(data))
    }

    return (
        <div className='flex flex-col gap-6'>
            {/* Product Title & Category */}
            <div className='flex flex-col gap-3'>
                <Typography variant='h4' className='font-bold text-foreground'>Urban Wild: Illustrated Graphic T-shirt by Nike</Typography>
                <Typography variant='large' className='text-muted'>T-Shirt</Typography>
            </div>

            {/* Rating & Meta Section */}
            <div className='border border-border rounded-2xl p-4 bg-surface'>
                <ProductMeta
                    rating={product.rating}
                    reviewnumber={product.numReviews}
                    sold={product.sold}
                />
            </div>

            {/* Attributes & Stock Section */}
            <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-6 text-base text-muted'>
                    <ProductAttributes label='Brand' value={product.brand} />
                    <ProductAttributes label='Color' value='White' />
                </div>
                <StockStatus isOutOfStock={isOutOfStock} />
            </div>

            {/* Price Section */}
            <div className='border border-border rounded-2xl p-5 bg-surface'>
                <div className='flex items-baseline gap-3'>
                    <Typography variant='large' className=' text-muted '>Total Price:</Typography>
                    <Typography variant='h2' className='text-primary font-bold'>₹{product.price}</Typography>
                </div>
            </div>

            {/* Size Selection */}
            <SizeSelection sizes={product.sizes} />

            {/* Action Buttons */}
            <div className='flex flex-col gap-3'>
                <div className='grid grid-cols-2 gap-3'>
                    <Button variant='outline' className='rounded-rad h-12 text-lg font-medium' disabled={isOutOfStock}>Save for later</Button>
                    <AddCartButton productId={product.id} getCardData={() => { getDetailsData() }} />
                </div>
                <Button variant='default' className='rounded-rad text-white h-12 text-lg font-semibold' disabled={isOutOfStock}>Buy Now</Button>
            </div>

            {/* Product Specification */}
            <ProductSpecification />

        </div>
    )
}

export default ProductInfo