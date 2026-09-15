import React from "react"
import { useParams } from "react-router-dom"
import { PRODUCT_LIST } from "@/lib/helper/testData"
import { Log } from "@/lib/utils"

import ProductCard from "@/modules/product/components/product-card"
import ProductGrid from "@/modules/product/components/product-grid"
import CategoryPageHeader from "@/modules/category/components/category-header"


const ProrductCategoryGrid: React.FC = () => {
    const category = useParams().category
    const data = PRODUCT_LIST
    // this api will be the same as the product list api but with category filter
    // and pagination and sorting

    Log("Category", category);

    return (
        <div className="flex flex-col gap-6 mt-6">
            <CategoryPageHeader
                title="All Products"
                subtitle="Explore our diverse range of products across various categories."
                productCount={200}
            />
            <ProductGrid columns={4} rows={3} className="gap-x-18 gap-y-15">
                {data.map((product) => (
                    <ProductCard key={product._id} product={product} cardType="normal" />
                ))}
            </ProductGrid>
        </div>
    )
}

export default ProrductCategoryGrid