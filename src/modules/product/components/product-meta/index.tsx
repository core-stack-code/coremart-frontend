import React from 'react'
import RatingBadge from '../rating-badge'
import MetaItem from '../meta-item'


interface productMetaProps {
    rating: number
    reviewnumber: number,
    sold: number
}

const ProductMeta: React.FC<productMetaProps> = ({ rating, reviewnumber, sold }) => {
    return (
        <div className='grid grid-cols-3 items-center text-muted'>
            <RatingBadge label='Rating' rating={rating} />
            <MetaItem label='Reviews' value={reviewnumber} />
            <MetaItem label='Sold' value={sold} />
        </div>
    )
}

export default ProductMeta