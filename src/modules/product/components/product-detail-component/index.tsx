import Icon from '@/components/ui/icons'
import React, { useState } from 'react'
import type { Size } from '../product-filter'
import { cn } from '@/lib/utils'
import AddCartButton from '../add-cart-btn'
import ProductReviewList from '../product-review-list'
import { Button } from '@/components/ui/button'
import ProductReviewForm from '../product-review-form'
import ProductReviewComponent from '../product-review-component'


const size: Size[] = ['S', 'M', 'L', 'XL', 'XXL']

const productDetails = [
    { name: "Product Name", value: "Urban Wild Fox Graphic T-Shirt" },
    { name: "Brand", value: "Nike" },
    { name: "Color", value: "White" },
    { name: "Material", value: "100% Cotton" },
    { name: "Fit", value: "Regular Fit" },
    { name: "Pattern", value: "Multi-color graphic print" },
    { name: "Collar", value: "Rounded" },
    { name: "Suitable for", value: "Casual wear" },
    {
        name: "Description",
        value: "Stand out in style with this Nike graphic tee featuring a bold illustrated fox design. Made from soft cotton for everyday comfort, perfect for a casual streetwear look."
    }
];


const ProductDetailComponent: React.FC = () => {

    const [selectedSize, setSelectedSize] = useState<Size>('L')
    const [openReviewForm, setOpenReviewForm] = useState<boolean>(false)

    return (
        <div className='w-full mt-2 grid grid-cols-2 gap-10'>
            <div className='w-full flex flex-col gap-10'>
                <div className='w-full h-140'>
                    <img
                        src='/details.svg'
                        alt='not found'
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className='w-full flex'>
                    {
                        [1, 2, 3].map((index) => {
                            return (
                                <div className='w-full h-38 flex'>
                                    <img
                                        key={index}
                                        src='/details.svg'
                                        alt='not found'
                                        className='w-full h-full object-cover' />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='w-full flex flex-col gap-4'>
                {/* left details component */}
                <div className='flex flex-col gap-5'>
                    <h1 className='text-2xl font-bold'>Urban Wild: Illustrated Fox Graphic T-shirt by Nike</h1>
                    <p className='text-lg'>T-Shirt</p>
                    <div className='flex justify-between text-gray-400'>
                        <div className='flex items-center gap-1'>
                            <Icon name='star' width={24} height={24} />
                            <p>4.9 Rating</p>
                        </div>
                        <p>2.3k Reviews</p>
                        <p>2K+ Sold</p>
                    </div>
                    <div className='flex gap-15 text-gray-400'>
                        <p>Brand: <strong className='text-black'>Nike</strong></p>
                        <p>Color: <strong className='text-black'>White</strong></p>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <Icon name='stockIcon' width={24} height={24} />
                        <p className='text-green-400'>In Stock</p>
                    </div>
                    <div className='flex gap-6 items-center'>
                        <p className='text-gray-400'>Total Price</p>
                        <p className='text-2xl text-primary font-bold'>₹ 999</p>
                    </div>
                    <h1 className='font-bold'>Size</h1>
                    <div className='flex flex-wrap gap-3'>

                        {size.map((size, index) => {
                            return (
                                <button
                                    key={index}
                                    className={cn(
                                        'border border-primary px-8 py-1 rounded-xl     hover:bg-primary hover:text-white cursor-pointer',
                                        selectedSize === size ? 'bg-primary text-white' : 'text-primary'
                                    )}
                                    onClick={() => setSelectedSize(size)}>
                                    {size}
                                </button>
                            )
                        })
                        }
                    </div>

                    <div className='flex justify-between mt-3'>
                        <button className='border border-primary px-8 py-3 text-primary rounded-xl cursor-pointer'>Save for later</button>
                        <AddCartButton productId='' getCardData={() => { }} />
                        <button className='px-8 py-3 bg-primary text-white rounded-xl font-bold cursor-pointer'>Buy Now</button>
                    </div>

                    <div className='flex flex-col gap-8 border border-border rounded-2xl px-10 py-6'>
                        <h1 className='text-primary text-lg font-bold'>Product Details</h1>
                        <div className='flex flex-col gap-4'>

                            {productDetails.map((product, index) => {
                                return (
                                    <div key={index} className='flex items-center text-md text-gray-500'>
                                        <p className='w-full font-bold'>{product.name}</p>
                                        <p className='w-full'>{product.value}</p>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
                <div className='border border-border rounded-2xl px-6 py-3'>
                    {/* review component */}
                    <div className='flex items-center gap-2'>
                        <Icon name='starOutline' width={24} height={24} />
                        <h1 className='text-primary text-xl font-bold'>Reviews & Rating</h1>
                    </div>
                    <ProductReviewComponent />

                    {/* review form */}
                    <div className='flex justify-end'>
                        <Button
                            onClick={() => setOpenReviewForm((pre) => !pre)}
                            className='text-white rounded-4xl my-2 mx-6'
                        >
                            Add Review
                        </Button>
                    </div>
                    {openReviewForm && <ProductReviewForm setOpneReviewForm={setOpenReviewForm} />}
                    {/* review list */}
                    <ProductReviewList />
                </div>
            </div>
        </div>
    )
}

export default ProductDetailComponent
