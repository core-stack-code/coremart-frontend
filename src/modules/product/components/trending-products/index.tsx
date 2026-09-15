import { PRODUCT_LIST } from "@/lib/helper/testData"
import ProductSlider from "../product-slider"
import ProductCard from "../product-card"


const TrendingProducts: React.FC = () => {
  const data = PRODUCT_LIST
  // api calling here for trending products

  return (
    <ProductSlider title="Trending Offer" products={data} redirectLink="/products">
      {(product) => <ProductCard product={product} cardType="discount" />}
    </ProductSlider>
  )
}

export default TrendingProducts