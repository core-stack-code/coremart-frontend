import Icon from '@/components/ui/icons'
import { useState } from 'react';
import review from '@/utils/Review.json'
import rating from '@/utils/Rating.json'
import { Button } from '@/components/ui/button';
import ProductCard from '@/./utils/Main/Product-card.json'
import '@/./App.css'
import { Controller, useForm } from 'react-hook-form';
import InputComponent from '@/components/ui/form/input-component';
import { zodResolver } from '@hookform/resolvers/zod';
import { reviewSchema, type ProductReviewPayLoad } from '../../schemas/productSchema';
import { productReviewDefaultValues } from '../../schemas/defaultValues';
import TextareaComponent from '@/components/ui/form/textarea-component';
import { useParams } from 'react-router-dom';
import BreadCrumbs from '../../components/product-details/Bread-Crumb';
import Size from '../../components/product-details/Product-Size';
import Details from '../../components/product-details/Product-Details';
import Rating from '../../components/product-details/Product-Rating';
import Reviews from '../../components/product-details/Product-Review';
import ProductCardGrid from '../../components/product-grid';




const ProductDetails = () => {
    const params = useParams()
    console.log(params)

    const [reviewOpen, setReviewOpen] = useState(true)


    const { handleSubmit, control } = useForm({
        resolver: zodResolver(reviewSchema),
        defaultValues: productReviewDefaultValues
    })



    const onSubmit = (formData: ProductReviewPayLoad) => {
        console.log(formData)
    }

    return (
        <>
            <div className="mx-auto w-full">

                <BreadCrumbs />


                {/* Main Section */}
                <div className="flex flex-col mt-4 lg:flex-row gap-23 h-screen overflow-hidden">


                    {/* Left Product Image */}
                    <div className="w-full lg:w-1/2 space-y-2 static top-0 h-screen overflow-hidden ">
                        <div className="p-4 flex justify-center ">
                            <img
                                src="/All-Category/Bottom-Wear/125.jpg"
                                alt="product"
                                className="w-[80%] border-border border rounded-2xl object-fill h-[400px]" />
                        </div>


                        <div className="flex gap-4 justify-around w-[80%] mx-auto">
                            {[1, 2, 3].map((_, index) => (
                                <img
                                    key={index}
                                    src="/All-Category/Bottom-Wear/115.jpg"
                                    alt="thumb"
                                    className="h-20 w-20 object-cover border-[var(--color-border)] border rounded-2xl cursor-pointer"
                                />
                            ))}
                        </div>
                    </div>


                    {/* Right Details */}
                    <div className="w-full lg:w-1/2 overflow-y-auto overflow-hidden scrollbar-hide  py-4 space-y-6 scroll-smooth">

                        <h1 className="text-2xl font-bold">Urban Wild: Illustrated Fox Graphic T-shirt by Nike</h1>
                        <p className="text-sm text-[var(--color-muted)]">T-Shirt</p>


                        {/* Offers */}
                        <div className="flex flex-col  gap-2">
                            <span className="text-sm w-fit flex bg-[var(--color-primary)]/30 text-[var(--color-primary)] px-3 py-1 rounded-full"><Icon name='paymentdiscountIcon' width={24} height={24} />
                                <p className='flex items-center'> 10% OFF on UPI Payments </p>
                            </span>
                            <span className="text-sm w-fit flex bg-[var(--color-primary)]/30 text-[var(--color-primary)] px-3 py-1 rounded-full"><Icon name='purchasediscountIcon' width={24} height={24} />
                                <p className='flex items-center'> Get ₹100 off on First Purchase </p>
                            </span>
                        </div>


                        {/* Ratings & Meta Info */}
                        <div className="flex flex-row justify-between items-center text-sm text-[var(--color-muted)]">
                            <span className='flex gap-4 items-center'><Icon name="starIcon" width={24} height={24} />4.9 Ratings</span>
                            <span>2.3k Reviews</span>
                            <span>2K+ Sold</span>
                        </div>


                        {/* Brand and Availability */}
                        <div className="flex gap-10 text-sm">
                            <span>Brand :<b> Nike</b></span>
                            <span>Color :<b> White</b></span>
                        </div>

                        <div className="flex text-sm text-[var(--color-stock)] items-center gap-2"><Icon name='stockIcon' width={24} height={24} /> In stock</div>


                        {/* Price */}
                        <div className="text-sm">
                            <span >Total Price :
                                <b className='mx-8 text-xl font-bold text-[var(--color-primary)]'>₹ 999</b>
                            </span>
                        </div>


                        {/* Sizes */}
                        <div className="w-full">
                            <h3 className="font-bold text-lg mb-3">Size</h3>

                            <Size />
                        </div>


                        {/* Action Buttons */}

                        <div className="flex flex-row  justify-start grid-cols-2 mt-10 gap-10 mx-auto">
                            <Button className="flex items-center justify-center gap-3 h-[50px] border border-primary text-primary bg-background hover:bg-primary/5 cursor-pointer text-md px-4 py-2 rounded-2xl w-full sm:w-auto">
                                Save For Later
                            </Button>
                            <Button className="flex items-center justify-center gap-3 h-[50px] border border-primary bg-background text-primary hover:bg-primary/5 cursor-pointer text-md px-4 py-2 rounded-2xl w-full sm:w-auto">
                                <Icon name="addtocartIcon" width={18} height={20} />
                                Add To Cart
                            </Button>
                            <Button className='flex items-center justify-center w-[30%] gap-3 h-[50px] border bg-primary text-background hover:bg-background hover:text-primary cursor-pointer text-md  font-bold px-4 py-2 rounded-2xl'
                            >Buy Now</Button>
                        </div>

                        <Details />


                        {/* Review & Reting */}
                        <div className="w-full p-6 rounded-[20px] border-border border">
                            <h2 className="text-xl text-primary flex gap-3 font-bold mb-4">
                                <Icon name='detailsratingstarIcon' width={29} height={29} />
                                Reviews & Rating
                            </h2>

                            <div className=" flex flex-row justify-between gap-6 p-4">
                                {/* Left: Average Rating */}
                                <div className="flex flex-col w-[50%]">

                                    <div className=' flex flex-row gap-2 '>
                                        <p className="text-4xl font-semibold">4.9</p>
                                        <p className="text-[var(--color-star)] font-bold text-4xl">
                                            <Icon name='starIcon' width={40} height={40} /></p>
                                    </div>

                                    <div>
                                        <p className="flex text-lg text-[var(--color-muted)]">5k+ Rating &<br /> 2.3k+ Reviews
                                        </p>
                                    </div>

                                </div>

                                {/* Right: Rating Distribution */}
                                <div className="flex flex-col gap-1 w-full max-w-md">
                                    {rating.map((item, index) => (
                                        <Rating key={index} item={item} />
                                    ))}
                                </div>
                            </div>



                            <div className='flex justify-end my-4'>
                                <Button className='rounded-[var(--border-radius)] text-background text-sm px-4 py-2 bg-primary cursor-pointer' onClick={() => setReviewOpen(false)}>Add Review</Button>
                            </div>
                            {
                                !reviewOpen ?
                                    <form
                                        onSubmit={handleSubmit(onSubmit)}
                                    >

                                        <div className='border flex flex-col rounded-[var(--border-radius)] border-border p-3 gap-3'>

                                                <div className='flex justify-between '>
                                                    <div>
                                                        <span>Overall Rating</span>
                                                        <div className='flex gap-1'>

                                                            {[1, 2, 3, 4, 5].map((index) => {
                                                                return (
                                                                    <Icon name='starIcon' width={30} height={30} key={index} />
                                                                )
                                                            })}
                                                        </div>
                                                    </div>


                                                     <div className=''>
                                                        <Button className='cursor-pointer bg-background hover:bg-background' onClick={() => setReviewOpen(true)}>
                                                            <Icon name='closeIcon' width={12} height={12} />
                                                        </Button>
                                                    </div>
                                                </div>

                                            <div className='flex flex-col gap-2'>
                                                <span>Review Title </span>
                                                <Controller
                                                    name='reviewTitle'
                                                    control={control}
                                                    render={({ field, fieldState }) => {
                                                        return (
                                                            <InputComponent
                                                                {...field}
                                                                type='text'
                                                                placeholder='Add Review Title'
                                                                error={fieldState.error?.message}
                                                                wrapperClassName='w-full'
                                                            />
                                                        )
                                                    }}
                                                />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <span>Product Review</span>
                                                <Controller
                                                    name='productReview'
                                                    control={control}
                                                    render={({ field, fieldState }) => {
                                                        return (
                                                            <TextareaComponent
                                                                {...field}
                                                                name="productreview"
                                                                id="productreview"
                                                                placeholder='Add product review'
                                                                error={fieldState.error?.message}
                                                                wrapperClassName='w-full h-[100px]'
                                                            />
                                                        )
                                                    }}
                                                />
                                            </div>

                                            <div className="flex justify-end">
                                                <Button type='submit' className="bg-primary rounded-[var(--border-radius)] px-10  text-background cursor-pointer" >Submit</Button>
                                            </div>
                                        </div>
                                    </form>
                                    : null
                            }

                            <hr className='border-border my-6'/>

                            <div className="flex flex-col">
                                {review.map((review, index) => (
                                    <Reviews key={index} review={review} />
                                ))}
                                <div className='flex justify-center'>
                                    <Button className="bg-[var(--color-primary)] rounded-[var(--border-radius)] px-10 py-2 text-[var(--color-background)] cursor-pointer">View All</Button>
                                </div>
                            </div>

                        </div>

                    </div >
                </div>


                {/* Card */}
                <div className='border-[var(--color-border)] border rounded-[var(--border-radius)] p-4'>
                    <h2 className="text-xl text-[var(--color-muted)] flex gap-3 font-bold mb-4"><Icon name='similarproductIcon' width={29} height={29} />Similar Products</h2>
                    <div className="flex justify-center">
                        <div className="flex flex-row overflow-x-auto gap-15 scrollbar-hidden scroll-smooth">

                            {
                                ProductCard.data.cart.items.map((productcard, index) => {
                                    return (
                                        <ProductCardGrid key={index} item={productcard} cardType={cardType.recommendedRecent} />
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}

export default ProductDetails