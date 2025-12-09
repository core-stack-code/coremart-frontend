import { PRODUCT_LIST } from "@/lib/helper/testData"
import ProductCard from "@/modules/product/components/product-card"
import ProductGrid from "@/modules/product/components/product-grid"

// data (success res)
// error (error res)
// loading

// prop driling


const ProrductCategoryGrid: React.FC = () => {
    const data = PRODUCT_LIST
    // here will be api call for the new arriaval product

    return (
        <ProductGrid columns={4} className="gap-x-18 gap-y-15">
            {data.map((product) => (
                <ProductCard key={product._id} product={product} cardType="normal" />
            ))}
        </ProductGrid>
    )
}

export default ProrductCategoryGrid