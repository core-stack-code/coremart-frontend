import ProductGrid from '../../product-grid'
import ProductSlider from '../../product-slider'
import { PRODUCT_LIST } from '@/lib/helper/testData'

const ProductGridList = () => {
    const data = PRODUCT_LIST

  return (
     <ProductSlider products={data}>
            {/* {(product) => <ProductCard product={product} cardType="new" />} */}
            {() => <ProductGrid products={data} columns={3} rows={data.length} />}
        </ProductSlider>
  )
}

export default ProductGridList