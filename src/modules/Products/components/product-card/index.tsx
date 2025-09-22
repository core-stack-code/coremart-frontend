import type { ProductType } from '@/types/products'
import React from 'react'

// TODO: leftlabel (change), right icon, titl, categoru, image, random text (just drop ), price rating, add card button, 

type CardType = "new" | "rate" | "cart-btn" | "price"

interface ProdcutCardProps {
    product: ProductType,
    leftLabel?: string,
    type: CardType // make card according to need just send num value
}

const ProductCard: React.FC = () => {
    return (
        <div>
        
        </div>
    )
}

export default ProductCard
