import Icon from "@/components/ui/icons"
import AllWear from "../../components/Product-Category/All Wear"
import category from '@/./utils/Category.json'
import ProductCard from '@/modules/Products/components/Product-Category/Product Card'
import CategoryBanner from "../../components/Product-Category/Banner"
import CardHeader from "../../components/Home/Card-Header"
import DiscountLabel from "../../components/Home/Discount-ADS"
import AboutusBadge from "@/components/ui/Aboutus-Badge"
import Carousel from "../../components/Home/Carousel"
import ProductCards from '@/./utils/Main/Product-card.json'
import { useState } from "react"


export const cardType = {
    newArrivals: "NewArrivals",
    trendingOffer: "TrendingOffer",
    trendingProduct: "TrendingProduct",
    recommendedRecent: "RecommendedRecent"

}



const Home = () => {

    const [label, setLabel] = useState("T-Shirts")

    return (
        <>
            <div className='w-[80%] flex flex-col py-5 mx-auto gap-30'>

                <div className="flex flex-col lg:flex-row justify-between relative px-4 lg:px-10 gap-6">
                    {/* Left Section */}
                    <div className="flex flex-col justify-center w-full gap-5 text-center lg:text-left">
                        <div className="flex justify-center">
                            <Icon name="homeadIcon" width={224} height={124} />
                        </div>
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold">
                                Style That <span className="text-[var(--color-primary)]"> Speaks </span>for You
                            </h1>
                            <p className="text-base sm:text-lg">
                                Coremart brings you fashion that fits your lifestyle
                            </p>
                        </div>
                    </div>

                    {/* Right Section - Image with Arrows */}
                    <div className="w-full relative">
                        {/* Image */}
                        <img
                            src="/Home.svg"
                            alt="Home"
                            className="w-full h-[300px] sm:h-[400px] lg:h-[550px]  rounded-xl"
                        />

                        {/* Left Arrow */}
                        <div className="absolute top-[75%] left-[5%] sm:left-1/6 md:left-[23%] lg:left-[-28px] xl:left-[0px] bg-white rounded-full w-[40px] h-[70px] sm:w-[80px] sm:h-[80px] lg:w-[80px] lg:h-[80px] flex justify-center items-center rotate-180 shadow-md">
                            <Icon name="seeallarrowIcon" width={70} height={70} />
                        </div>

                        {/* Right Arrow */}
                        <div className="absolute top-[45%] right-2 sm:right-1/6 md:right-[23%] lg:right-[-30px] xl:right-[0%] bg-white rounded-full w-[40px] h-[70px] sm:w-[80px] sm:h-[80px] lg:w-[80px] lg:h-[80px] flex justify-center items-center shadow-md">
                            <Icon name="seeallarrowIcon" width={70} height={70} />
                        </div>
                    </div>

                </div>


                <div className="flex flex-col gap-5">

                    <div>
                        <div className="flex gap-5">
                            <Icon name="categoriesIcon" width={24} height={25} />
                            <h2 className="text-lg text-[var(--color-primary)] font-bold mb-4">Categories</h2>
                        </div>
                        <div className="flex flex-row overflow-x-auto  gap-15 scrollbar-hidden">
                            {
                                category.map((topwearitem, index) => {
                                    return (
                                        <AllWear key={index}
                                            item={topwearitem}
                                            label={label}
                                            setLabel={setLabel} />
                                    )
                            })
                            }
                        </div>
                    </div>



                    <div className="flex flex-col gap-y-3">
                        <div>
                            <CardHeader label={'New Arrivals'} arrowName={'See All'} />
                        </div>
                        <div className="flex justify-center">
                            <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5">
                                {
                                    ProductCards.data.cart.items.slice(0, 4).map((productcard, index) => {
                                        return (
                                            <ProductCard key={index} item={productcard} cardType={cardType.newArrivals} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>



                    <div className="flex justify-center w-full">
                        <CategoryBanner />
                    </div>

                    <div className="flex flex-col gap-y-3">
                        <div>
                            <CardHeader label={'Trending Offers'} arrowName={'See All'} />
                        </div>
                        <div className="flex justify-center">
                            <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5">

                                {
                                    ProductCards.data.cart.items.slice(0, 4).map((productcard, index) => {
                                        return (
                                            <ProductCard key={index} item={productcard} cardType={cardType.trendingOffer} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-3">
                        <div>
                            <CardHeader label={'Best Sallers'} arrowName={'See All'} />
                        </div>
                        <div className="flex justify-center">
                            <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5">

                                {
                                    ProductCards.data.cart.items.slice(0, 4).map((productcard, index) => {
                                        return (
                                            <ProductCard key={index} item={productcard} cardType={cardType.trendingProduct} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>



                    <div className="flex justify-between gap-5 h-auto">

                        <DiscountLabel discount={'Flat 20% Discount on selected items '} buttonName={'Shop Now'} />
                        <DiscountLabel discount={'Free Shipping on orders over ₹ 1000'} buttonName={'Shop Now'} />

                    </div>




                    <div className="flex flex-col gap-y-3 ">
                        <div>
                            <CardHeader label={'Customer Testimonials'} arrowName={'Read More'} />
                        </div>

                        <div className="flex flex-col justify-center border rounded-[var(--border-radius)] border-[var(--color-border)]">

                            <Carousel />

                        </div>

                    </div>



                    <div className="flex flex-col gap-y-3">
                        <div>
                            <CardHeader label={'Recommended for you'} arrowName={'See All'} />
                        </div>
                        <div className="flex justify-center">
                            <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5">
                                {
                                    ProductCards.data.cart.items.slice(0, 4).map((productcard, index) => {
                                        return (
                                            <ProductCard key={index} item={productcard} cardType={cardType.recommendedRecent} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>



                    <div className="flex flex-col gap-y-3">
                        <CardHeader label={'Recently Viewed'} arrowName={''} />
                        <div className="flex justify-center">
                            <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5">

                                {
                                    ProductCards.data.cart.items.slice(0, 4).map((productcard, index) => {
                                        return (
                                            <ProductCard key={index} item={productcard} cardType={cardType.recommendedRecent} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row justify-around items-center gap-10 flex-wrap">

                    <AboutusBadge iconName={"aboutdeliveryIcon"} service={'FREE AND FAST DELIVERY'} description={'Free delivery for all orders over ₹999'} />

                    <AboutusBadge iconName={"aboutserviceIcon"} service={'24/7 CUSTOMER SERVICE'} description={'Friendly 24/7 customer support'} />

                    <AboutusBadge iconName={"aboutguaranteeIcon"} service={'MONEY BACK GUARANTEE'} description={'We return money within 30 days'} />
                </div>
            </div>
        </>
    )
}

export default Home