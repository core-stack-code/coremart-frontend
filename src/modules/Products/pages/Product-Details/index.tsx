import Icon from '@/components/ui/icons'
import { useState } from 'react';
import ProductCardGrid from '../../components/Product-Category/Product Card';
import Reviews from '@/modules/Products/components/Product-Details/Product-Review'
import Details from '../../components/Product-Details/Product-Details';
import review from '@/utils/Review.json'
import rating from '@/utils/Rating.json'
import Rating from '../../components/Product-Details/Product-Rating';
import Size from '../../components/Product-Details/Product-Size'
import { cardType } from '../Home';
import { Button } from '@/components/ui/button';
import BreadCrumbs from '../../components/Product-Details/Bread-Crumb';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import ProductCard from '@/./utils/Main/Product-card.json'
import '@/./App.css'




const ProductDetails = () => {

    const [reviewOpen, setReviewOpen] = useState(true)

    return (
        <>
            <div className="mx-auto md:w-[80%] lg:w-[90%] xl:w-[90%]  w-[80%] px-4 md:px-10 lg:px-20 py-8 space-y-4">

                <BreadCrumbs />


                {/* Main Section */}
                <div className="flex flex-col lg:flex-row gap-10 h-screen overflow-hidden">


                    {/* Left Product Image */}
                    <div className="w-full h-auto lg:w-1/2 space-y-2 static top-0 h-screen overflow-hidden ">
                        <div className="p-4 flex justify-center ">
                            <img
                                src="/All-Category/Bottom-Wear/125.jpg"
                                alt="product"
                                className="w-[80%] border-[var(--color-border)] border rounded-2xl object-cover h-[400px]" />
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
                    <div className="w-full lg:w-1/2 overflow-y-auto overflow-hidden scrollbar-hide px-6 py-4 space-y-6 scroll-smooth">

                        <h1 className="text-2xl font-bold">Urban Wild: Illustrated Fox Graphic T-shirt by Nike</h1>
                        <p className="text-sm text-[var(--color-muted)]">T-Shirt</p>


                        {/* Offers */}
                        <div className="flex flex-col  gap-4">
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
                            <Button className="flex items-center justify-center gap-3 h-[50px] border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 cursor-pointer text-md px-4 py-2 rounded-2xl w-full sm:w-auto">
                                Save For Later
                            </Button>
                            <Button className="flex items-center justify-center gap-3 h-[50px] border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 cursor-pointer text-md px-4 py-2 rounded-2xl w-full sm:w-auto">
                                <Icon name="addtocartIcon" width={18} height={20} />
                                Add To Cart
                            </Button>
                            <Button className='flex items-center justify-center w-[30%] gap-3 h-[50px] border bg-[var(--color-primary)] text-[var(--color-background)] hover:bg-[var(--color-primary-hover)] cursor-pointer text-md  font-bold px-4 py-2 rounded-2xl'
                            >Buy Now</Button>
                        </div>

                        <Details />


                        {/* Review & Reting */}
                        <div className="w-full p-6 rounded-[20px] border-[#E5E7EB] border">
                            <h2 className="text-xl text-[var(--color-primary)] flex gap-3 font-bold mb-4">
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



                            <div className='flex justify-end my-2'>
                                <Button className='rounded-[var(--border-radius)] text-[var(--color-background)] text-sm px-4 py-2 bg-[var(--color-primary)] cursor-pointer' onClick={() => setReviewOpen(false)}>Add Review</Button>

                            </div>

                            {
                                !reviewOpen ?
                                    <div className='border flex flex-col rounded-[var(--border-radius)] border-[var(--color-border)] p-4 gap-3'>
                                        <div className='flex justify-end'>
                                            <Button className='cursor-pointer' onClick={() => setReviewOpen(true)}>
                                                <Icon name='closeIcon' width={12} height={12} />
                                            </Button>
                                        </div>
                                        <div className='flex flex-col'>
                                            <span>Overall Rating</span>
                                            <div className='flex gap-1'>

                                                {[1, 2, 3, 4, 5].map((index) => {
                                                    return (
                                                        <Icon name='starIcon' width={30} height={30} key={index} />
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <span>Review Title </span>
                                            <Input className='w-full border-[var(--color-border)] border rounded-[var(--border-radius)] px-4 py-1 focus:outline-none focus:ring focus:ring-[var(--color-primary)]' type='text' placeholder='Add review title' />
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <span>Product Review</span>
                                            <Textarea className="w-full h-[100px]" name="productreview" id="productreview" placeholder='Add product review' />


                                        </div>

                                        <div className="flex justify-end">
                                            <button className="bg-[var(--color-primary)] rounded-[var(--border-radius)] px-10 py-2 text-[var(--color-background)] cursor-pointer">Submit</button>
                                        </div>
                                    </div>
                                    : null
                            }

                            <div className="flex flex-col">
                                {review.map((review, index) => (
                                    <Reviews key={index} review={review} />
                                ))}
                                <div className='flex justify-center'>
                                    <button className="bg-[var(--color-primary)] rounded-[var(--border-radius)] px-10 py-2 text-[var(--color-background)] cursor-pointer">View All</button>
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