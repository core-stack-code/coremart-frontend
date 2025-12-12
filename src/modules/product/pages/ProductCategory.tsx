import React from "react"
import Banner from "@/modules/product/components/banner"
import CategoryQueue from "@/modules/product/components/category-queue"
import NewArrivalsProducts from '@/modules/product/components/new-arrivals-products'
import TrendingProducts from "@/modules/product/components/trending-products"
import ProrductCategoryGrid from "@/modules/product/components/product-category-grid"


const ProductCategory: React.FC = () => {
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

export default ProductCategory