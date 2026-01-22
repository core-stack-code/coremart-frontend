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
                description: product.description,
            },
            quantity: 1,
            itemTotal: product.price * 1
        };

        disPatch(getCardDetails(data))
    }

    return (
        <div className='flex flex-col gap-5'>
            <h1 className='text-xl font-bold'>Urban Wild: Illustrated Graphic T-shirt by Nike</h1>
            <p className='text-lg'>T-Shirt</p>

            <ProductMeta
                rating={product.rating}
                reviewnumber={product.numReviews}
                sold={product.sold}
            />

            <div className='grid grid-cols-4 text-muted'>
                <ProductAttributes label='Brand' value={product.brand} />
                <ProductAttributes label='Color' value='White' />
            </div>

            <StockStatus isOutOfStock={isOutOfStock} />

            <div className='flex gap-2 items-center text-muted'>
                <p>Total Price : </p>
                <p className='text-xl text-accent font-bold'>₹ {product.price}</p>
            </div>

            <SizeSelection sizes={product.sizes} />

            <div className='grid grid-cols-3 gap-10'>
                <Button variant='outline' className='rounded-rad' size='sm' disabled={isOutOfStock}>Save for later</Button>
                <AddCartButton productId={product.id} getCardData={() => { getDetailsData() }} />
                <Button variant='default' className='rounded-rad text-white' size='sm' disabled={isOutOfStock}>Buy Now</Button>
            </div>

            <ProductSpecification />

        </div>
    )
}

export default ProductInfo