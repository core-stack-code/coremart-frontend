import { PRODUCT_LIST } from "@/lib/helper/testData"
import ProductGrid from "@/modules/product/components/product-grid"
import ProductSlider from "@/modules/product/components/product-slider"


const TopWearProrductCategory = () => {
    const data = PRODUCT_LIST
    // here will be api call for the new arriaval product

    return (
        <ProductSlider title="Top Wear" subtitle="Check out our top wear" products={data}>
            {/* {(product) => <ProductCard product={product} cardType="new" />} */}
            {() => <ProductGrid products={data} columns={4} rows={data.length} />}
        </ProductSlider>
    )
}

export default TopWearProrductCategory