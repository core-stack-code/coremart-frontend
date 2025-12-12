import React from "react"
import ProductCard from "@/modules/product/components/product-card"
import ProductGrid from "@/modules/product/components/product-grid"
import CategoryPageHeader from "@/modules/product/components/category-header"
import { PRODUCT_LIST } from "@/lib/helper/testData"


const ProrductCategoryGrid: React.FC = () => {
    const data = PRODUCT_LIST
    // here will be api call for the new arriaval product

    return (
        <div className="flex flex-col gap-6 mt-6">
            <CategoryPageHeader
                title="All Products"
                subtitle="Explore our diverse range of products across various categories."
                productCount={200}
            />
            <ProductGrid columns={4} className="gap-x-18 gap-y-15">
                {data.map((product) => (
                    <ProductCard key={product._id} product={product} cardType="normal" />
                ))}
            </ProductGrid>
        </div>
    )
}

export default ProrductCategoryGrid