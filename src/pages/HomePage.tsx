import React from "react";

import HeroSection from "@/components/ui/hero-section";
import CategoryQueue from "@/modules/product/components/category-queue";
import Banner from "@/modules/product/components/banner";
import NormalCard from "@/components/ui/normal-card";
import TestimonialSlider from "@/components/testimonial-slider";
import AboutBade from "@/components/ui/about-badge";

import NewArrivalsProducts from "@/modules/product/components/new-arrivals-products";
import BestSellerProducts from "@/modules/product/components/best-seller-products";
import RecommendedProducts from "@/modules/product/components/recommended-products";
import RecentlyViewProducts from "@/modules/product/components/recently-view-products";
import TrendingProducts from "@/modules/product/components/trending-products";


const HomePage: React.FC = () => {

    return (
        <div className="w-full h-full flex flex-col">
            <HeroSection />

            <div className="flex flex-col gap-8">
                <CategoryQueue />
        
                <NewArrivalsProducts />

                <Banner />

                {/* <NewArrivalsProducts /> */}
                <TrendingProducts/>

                <BestSellerProducts />

                <NormalCard />

                <TestimonialSlider />

                <RecommendedProducts />

                <RecentlyViewProducts />

                <AboutBade />
            </div>
        </div>
    )
}

export default HomePage;
