import type { ProductType } from '@/types/products'
import React from 'react'

interface ProductListCardProps {
    product: ProductType
}

const ProductListCard: React.FC<ProductListCardProps> = ({ product }) => {
    return (
        <div>
            {product.name}
        </div>
    )
}

export default ProductListCard
