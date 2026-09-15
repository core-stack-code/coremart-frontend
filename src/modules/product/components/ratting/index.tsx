import Icon from '@/components/ui/icons'
import React from 'react'

interface RattingProps {
    rate: number
}

const Ratting: React.FC<RattingProps> = ({ rate }) => {
  const clampedRate = Math.max(0, Math.min(5, rate))
  
    const stars = Array.from({ length: 5 }, (_, index) => {
        const starPosition = index + 1
        
        if (clampedRate >= starPosition) {
            return 'star'
        } else if (clampedRate >= starPosition - 0.5) {
            return 'starHalf'
        } else {
            return 'starOutline'
        }
    })

    return (
        <div className="flex items-center gap-1">
            {stars.map((starType, index) => (
                <Icon 
                    key={index} 
                    name={starType} 
                    width={20} 
                    height={20}
                />
            ))}
        </div>
    )
}

export default Ratting
