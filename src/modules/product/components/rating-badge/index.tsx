import Icon from '@/components/ui/icons'
import React from 'react'

interface ratingBadgeProps {
  label: string,
  rating: number
}

const RatingBadge: React.FC<ratingBadgeProps> = ({ label, rating }) => {
  return (
    <div className='flex items-center gap-2'>
      {rating == 0 ?
        <Icon name='starOutline' width={24} height={24} /> :
        rating <= 5 ?
          <Icon name='starHalf' width={24} height={24} /> :
          <Icon name='star' width={24} height={24} />
      }
      <span>{rating}</span>
      <span>{label}</span>
    </div>
  )
}

export default RatingBadge