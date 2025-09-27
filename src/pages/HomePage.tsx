import React, { useState } from "react";
import Icon from "@/components/ui/icons";
import { CATEGORY, PRODUCT_CARD_RESPONSE, type CategoryTypes } from "@/lib/helper/testData";
import CardHeader from "@/modules/products/components/home/card-header";
import DiscountLabel from "@/modules/products/components/home/discount-ads";
import Carousel from "@/modules/products/components/home/carousel";
import AboutusBadge from "@/components/ui/aboutus-badge";
import CategorySlider from "@/modules/products/components/category-slider";
import ProductGridCard from "@/modules/products/components/product-category/Product Card";
import CategoryBanner from "@/modules/products/components/product-category/Banner";
import HeroSection from "@/components/hero-section";
import ProductCard from "@/modules/products/components/product-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper/modules";

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
            <div>
                <HeroSection />
            </div>



            <div className="flex flex-col gap-5">
                <div className="mt-4">
                    <div className="flex gap-5">
                        <Icon name="categoriesIcon" width={24} height={25} />
                        <h2 className="text-lg text-primary font-bold mb-4">Categories</h2>
                    </div>
                    <div className="flex flex-row gap-23">
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
                    <div className="w-full flex overflow-x-auto scrollbar-hidden scroll-smooth">
                        <div>

                            <Swiper
                                slidesPerView="auto"
                                spaceBetween={100}
                                freeMode={true}
                                grabCursor={true}
                                modules={[FreeMode, Scrollbar]}
                                className="mySwiper"
                            >
                                {PRODUCT_CARD_RESPONSE.data.cart.items.slice(0, 8).map((item) => (
                                    <SwiperSlide key={item.product._id} className="!w-auto">
                                        <ProductCard item={item} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

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
                   <div className="w-full flex overflow-x-auto scrollbar-hidden scroll-smooth">
                        <div>

                            <Swiper
                                slidesPerView="auto"
                                spaceBetween={100}
                                freeMode={true}
                                grabCursor={true}
                                modules={[FreeMode, Scrollbar]}
                                className="mySwiper"
                            >
                                {PRODUCT_CARD_RESPONSE.data.cart.items.slice(0, 8).map((item) => (
                                    <SwiperSlide key={item.product._id} className="!w-auto">
                                        <ProductCard item={item} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-y-3">
                    <div>
                        <CardHeader label={"Best Sellers"} arrowName={"See All"} />
                    </div>
                    <div className="w-full flex overflow-x-auto scrollbar-hidden scroll-smooth">
                        <div>

                            <Swiper
                                slidesPerView="auto"
                                spaceBetween={100}
                                freeMode={true}
                                grabCursor={true}
                                modules={[FreeMode, Scrollbar]}
                                className="mySwiper"
                            >
                                {PRODUCT_CARD_RESPONSE.data.cart.items.slice(0, 8).map((item) => (
                                    <SwiperSlide key={item.product._id} className="!w-auto">
                                        <ProductCard item={item} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

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
                    <div className="w-full flex overflow-x-auto scrollbar-hidden scroll-smooth">
                        <div>

                            <Swiper
                                slidesPerView="auto"
                                spaceBetween={100}
                                freeMode={true}
                                grabCursor={true}
                                modules={[FreeMode, Scrollbar]}
                                className="mySwiper"
                            >
                                {PRODUCT_CARD_RESPONSE.data.cart.items.slice(0, 8).map((item) => (
                                    <SwiperSlide key={item.product._id} className="!w-auto">
                                        <ProductCard item={item} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-y-3">
                    <div>
                    <CardHeader label={"Recently Viewed"} arrowName={""} />
                    </div>
                    <div className="w-full">
                        <div>

                            <Swiper
                                slidesPerView="auto"
                                spaceBetween={100}
                                freeMode={true}
                                grabCursor={true}
                                modules={[FreeMode, Scrollbar]}
                                className="mySwiper"
                            >
                                {PRODUCT_CARD_RESPONSE.data.cart.items.slice(0, 4).map((item) => (
                                    <SwiperSlide key={item.product._id} className="!w-auto">
                                        <ProductCard item={item} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

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

        </>
    )
}

export default HomePage;
