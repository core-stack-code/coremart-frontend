import { PRODUCT_LIST } from "@/lib/helper/testData"
import ProductCard from "@/modules/product/components/product-card"
import ProductSlider from "@/modules/product/components/product-slider"


const TrendingProductCategory = () => {
  const data = PRODUCT_LIST
  // here will be api call for the new arriaval product

  return (
    <ProductSlider title="Top Wear" subtitle="Check out our top wear" products={data}>
      {(product) => <ProductCard product={product} cardType="new" />}
      {/* {() => <ProductGrid products={data} cardType="new" columns={4}/>} */}
    </ProductSlider>
  )
}

export default TrendingProductCategory