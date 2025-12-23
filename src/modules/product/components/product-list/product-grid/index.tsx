import ProductCard from '../../product-card'
import ProductGrid from '../../product-grid'
import { PRODUCT_LIST } from '@/lib/helper/testData'

const ProductGridList = () => {
  const data = PRODUCT_LIST

  return (
    <ProductGrid columns={3} className='gap-x-18 gap-y-15' >
      {
        data.map((product) => (
          <ProductCard key={product._id} product={product} cardType="normal" />
        ))
      }
    </ProductGrid>
  )
}

export default ProductGridList