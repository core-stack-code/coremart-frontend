import React from "react";

import HeroSection from "@/components/sections/hero-section";
import CategoryQueue from "@/modules/category/components/category-queue";
import Banner from "@/components/sections/banner";
import NormalCard from "@/components/sections/normal-card";
import TestimonialSlider from "@/components/sections/testimonial-slider";
import AboutBadge from "@/components/sections/about-badge";

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
                <CategoryQueue isRedirect />
        
                <NewArrivalsProducts />

                <Banner />

                <TrendingProducts/>

                <BestSellerProducts />

                <NormalCard />

                <TestimonialSlider />

                <RecommendedProducts />

                <RecentlyViewProducts />

                <AboutBadge />
            </div>
        </div>
    )
}

export default HomePage;
