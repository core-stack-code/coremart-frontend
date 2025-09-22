import React, { useState } from "react";

import Icon from "@/components/ui/icons";

import { CATEGORY, PRODUCT_CARD_RESPONSE, type CategoryTypes } from "@/lib/helper/testData";
import CategorySlider from "@/modules/Products/components/category-slider";
import CardHeader from "@/modules/products/components/home/card-header";
import ProductGridCard from "@/modules/products/components/product_category/Product Card";
import CategoryBanner from "@/modules/products/components/product_category/Banner";
import DiscountLabel from "@/modules/products/components/home/discount-ads";
import Carousel from "@/modules/products/components/home/carousel";
import AboutusBadge from "@/components/ui/aboutus-badge";

const cardType = {
    newArrivals: "NewArrivals",
    trendingOffer: "TrendingOffer",
    trendingProduct: "TrendingProduct",
    recommendedRecent: "RecommendedRecent"
}


const HomePage: React.FC = () => {
    const [label, setLabel] = useState<CategoryTypes>("sportswear");

    return (
        <>
            <div className="flex flex-col lg:flex-row justify-between relative px-4 lg:px-10 gap-6">
                <div className="flex flex-col justify-center w-full gap-5 text-center lg:text-left">
                    <div className="flex justify-center">
                        <Icon name="homeadIcon" width={224} height={124} />
                    </div>
                <div>
                    <h1 className="text-3xl sm:text-4xl font-bold">
                        Style That <span className="text-primary"> Speaks </span>for You
                    </h1>
                    <p className="text-base sm:text-lg">
                        Coremart brings you fashion that fits your lifestyle
                    </p>
                </div>
            </div>

            <div className="w-full relative flex  md:justify-center">
                <img
                    src="/home.svg"
                    alt="Home"
                    className="w-136 h-136 object-fill  rounded-xl"
                />

                <div className="absolute top-[75%] left-[5%] sm:left-[-10%] md:left-[8%] lg:left-[-12%] xl:left-[5%] bg-white rounded-full w-[40px] h-[70px] sm:w-[80px] sm:h-[80px] lg:w-[80px] lg:h-[80px] flex justify-center items-center rotate-180 shadow-md">
                    <Icon name="seeallarrowIcon" width={70} height={70} />
                </div>

                <div className="absolute top-[45%] right-2 sm:right-[-10%] md:right-[9%] lg:right-[-10%] xl:right-[6%] bg-white rounded-full w-[40px] h-[70px] sm:w-[80px] sm:h-[80px] lg:w-[80px] lg:h-[80px] flex justify-center items-center shadow-md">
                    <Icon name="seeallarrowIcon" width={70} height={70} />
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <div className="mt-4">
                <div className="flex gap-5">
                    <Icon name="categoriesIcon" width={24} height={25} />
                    <h2 className="text-lg text-primary font-bold mb-4">Categories</h2>
                </div>
                <div className="flex flex-row overflow-x-auto gap-15 scrollbar-hidden">
                    {CATEGORY.map((topwearitem) => {
                        return (
                            <CategorySlider
                                key={topwearitem.category_name}
                                item={topwearitem}
                                label={label}
                                setLabel={(val) => setLabel(val)}
                            />
                        );
                    })}
                </div>
            </div>

            <div className="flex flex-col gap-y-3">
                <div>
                    <CardHeader label="New Arrivals" arrowName="See All" />
                </div>
                <div className="flex justify-start">
                    <div className="grid gap-26 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {PRODUCT_CARD_RESPONSE.data.cart.items
                        .slice(0, 4)
                        .map((productcard, index) => {
                        return (
                            <ProductGridCard
                                key={index}
                                item={productcard}
                                cardType={cardType.newArrivals}
                            />
                        );
                        })}
                    </div>
                </div>
            </div>

            <div className="flex justify-center w-full">
                <CategoryBanner />
            </div>

            <div className="flex flex-col gap-y-3">
                <div>
                    <CardHeader label={"Trending Offers"} arrowName={"See All"} />
                </div>
                <div className="flex justify-start">
                    <div className="grid gap-26 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5">
                    {PRODUCT_CARD_RESPONSE.data.cart.items
                        .slice(0, 4)
                        .map((productcard, index) => {
                        return (
                            <ProductGridCard
                            key={index}
                            item={productcard}
                            cardType={cardType.trendingOffer}
                            />
                        );
                        })}
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-y-3">
                <div>
                    <CardHeader label={"Best Sellers"} arrowName={"See All"} />
                </div>
                <div className="flex justify-start">
                    <div className="grid gap-26 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5">
                    {PRODUCT_CARD_RESPONSE.data.cart.items
                        .slice(0, 4)
                        .map((productcard, index) => {
                        return (
                            <ProductGridCard
                            key={index}
                            item={productcard}
                            cardType={cardType.trendingProduct}
                            />
                        );
                        })}
                    </div>
                </div>
            </div>

            <div className="flex justify-between gap-5 h-auto">
                <DiscountLabel
                    discount={"Flat 20% Discount on selected items "}
                    buttonName={"Shop Now"}
                />
                <DiscountLabel
                    discount={"Free Shipping on orders over ₹ 1000"}
                    buttonName={"Shop Now"}
                />
            </div>

            <div className="flex flex-col gap-y-3 ">
                <div>
                    <CardHeader
                        label={"Customer Testimonials"}
                        arrowName="Read More"
                    />
                </div>

                <div className="flex flex-col justify-center border rounded-radius border-border">
                    <Carousel />
                </div> 
            </div>

            <div className="flex flex-col gap-y-3">
            <div>
                <CardHeader label={"Recommended for you"} arrowName={"See All"} />
            </div>
            <div className="flex justify-start">
                <div className="grid gap-26 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5">
                {PRODUCT_CARD_RESPONSE.data.cart.items
                    .slice(0, 4)
                    .map((productcard, index) => {
                    return (
                        <ProductGridCard
                        key={index}
                        item={productcard}
                        cardType={cardType.recommendedRecent}
                        />
                    );
                    })}
                </div>
            </div>
            </div>

            <div className="flex flex-col gap-y-3">
                <CardHeader label={"Recently Viewed"} arrowName={""} />
            <div className="flex justify-start">
                <div className="grid gap-26 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5">
                    {PRODUCT_CARD_RESPONSE.data.cart.items
                        .slice(0, 4)
                        .map((productcard, index) => {
                        return (
                            <ProductGridCard
                            key={index}
                            item={productcard}
                            cardType={cardType.recommendedRecent}
                            />
                        );
                    })}
                </div>
            </div>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-70 flex-wrap my-23">
            <AboutusBadge
            iconName={"aboutdeliveryIcon"}
            service={"FREE AND FAST DELIVERY"}
            description={"Free delivery for all orders over ₹999"}
            />

            <AboutusBadge
            iconName={"aboutserviceIcon"}
            service={"24/7 CUSTOMER SERVICE"}
            description={"Friendly 24/7 customer support"}
            />

            <AboutusBadge
            iconName={"aboutguaranteeIcon"}
            service={"MONEY BACK GUARANTEE"}
            description={"We return money within 30 days"}
            />
        </div>
            </div>
        </>
  )
}

export default HomePage;
