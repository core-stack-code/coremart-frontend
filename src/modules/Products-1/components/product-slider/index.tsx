import React from 'react'
import type { ProductType } from '@/types/products'

// TODO: add title, see all button, slider (for cards)
// add swiper lib

interface ProductSliderProps {
    title: string,
    redirectTo?: string
    products: ProductType[]
}

const ProductSlider: React.FC<ProductSliderProps> = ({ title, redirectTo, products }) => {
  return (
    <div>
      
    </div>
  )
}

export default ProductSlider
