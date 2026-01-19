import React from "react";

import HeroSection from "@/modules/home/components/hero-section";
import CategoryQueue from "@/modules/category/components/category-queue";
import Banner from "@/modules/home/components/banner";
import NormalCard from "@/modules/home/components/normal-card";
import TestimonialSlider from "@/modules/home/components/testimonial-slider";
import AboutBadge from "@/components/ui/about-badge";

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
