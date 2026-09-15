import Banner from '@/components/sections/banner'
import React from 'react'
import CategoryQueue from '../components/category-queue'
import ProrductCategoryGrid from '@/modules/category/components/product-category-grid'
import NewArrivalsProducts from '@/modules/product/components/new-arrivals-products'
import TrendingProducts from '@/modules/product/components/trending-products'


const CategoryPage: React.FC = () => {
    return (
       <div className="w-full flex flex-col gap-8 py-8">
            <Banner />

            <CategoryQueue />

            <ProrductCategoryGrid />

            <NewArrivalsProducts />

            <TrendingProducts />
        </div>
    )
}

export default CategoryPage
