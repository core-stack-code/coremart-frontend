import Icon from '@/components/ui/icons'
import { Typography } from '@/components/ui/typography'
import React from 'react'

interface ratingBadgeProps {
  label: string,
  rating: number
}

const RatingBadge: React.FC<ratingBadgeProps> = ({ label, rating }) => {
  return (
    <div className='flex items-center gap-1.5'>
      {rating == 0 ?
        <Icon name='starOutline' width={20} height={20} /> :
        rating <= 5 ?
          <Icon name='starHalf' width={20} height={20} /> :
          <Icon name='star' width={20} height={20} />
      }
      <Typography variant='small' className='font-semibold text-foreground'>{rating}</Typography>
      <Typography variant='small' className='text-muted'>{label}</Typography>
    </div>
  )
}

export default RatingBadge