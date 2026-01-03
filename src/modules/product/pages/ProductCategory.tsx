import React from "react"
import CategoryQueue from "@/modules/product/components/category-queue"


const ProductCategory: React.FC = () => {
    return (
        <div className="w-full flex flex-col gap-8 py-8">
            {/* <Banner /> */}

            <CategoryQueue />

            {/* <ProrductCategoryGrid /> */}

            {/* <NewArrivalsProducts /> */}

            {/* <TrendingProducts /> */}
        </div>
    )
}

export default ProductCategory