import React from 'react'
import HeroSection from '@/components/sections/hero-section'
import DiscountTrendingProducts from '@/components/sections/discount-trending-products'
import DiscountBanners from '@/components/sections/discount-banners'
import SellingProducts from '@/components/sections/selling-products'
import MonsoonBanner from '@/components/sections/monsoon-banner'
import ClientReviews from '@/components/sections/client-reviews'
import CollectionBanner from '@/components/sections/collection-banner'

const LandingPage: React.FC = () => {
    return (
        <div className='w-full h-full flex flex-col gap-5'>
            <HeroSection />

            <div className='flex flex-col gap-8'>
                <DiscountTrendingProducts />

                <DiscountBanners />

                <SellingProducts />

                <MonsoonBanner />

                <ClientReviews />

                <CollectionBanner />
            </div>
        </div>
    )
}

export default LandingPage