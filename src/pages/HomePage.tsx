import React from "react";
import HeroSection from "@/components/hero-section";
import CardHeader from "@/modules/Products-1/components/Home/card-header";
import DiscountLabel from "@/modules/Products-1/components/Home/discount-dsa";
import Carousel from "@/modules/Products-1/components/Home/carousel";
import AboutusBadge from "@/components/ui/aboutus-badge";
import CategoryQueue from "@/modules/product/components/category-queue";
import NewArrivalsProducts from "@/modules/product/components/new-arrivals-products";
import Banner from "@/modules/product/components/banner";
import BestSellerProducts from "@/modules/product/components/best-seller-products";
import RecommendedProducts from "@/modules/product/components/recommended-products";
import RecentlyViewProducts from "@/modules/product/components/recently-view-products";


const HomePage: React.FC = () => {

    return (
        <div className="w-full h-full flex flex-col">
            <HeroSection />

            <div className="flex flex-col gap-6">
                <CategoryQueue />
        
                <NewArrivalsProducts />

                <Banner />

                <NewArrivalsProducts />

                <BestSellerProducts />

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

                <RecommendedProducts />

                <RecentlyViewProducts />

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
        </div>
    )
}

export default HomePage;
