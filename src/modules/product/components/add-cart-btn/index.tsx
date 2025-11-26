import React from 'react'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icons'


interface addCartButtonProps {
    productId: string,
    getCardData: () => void
}


const AddCartButton: React.FC<addCartButtonProps> = ({ productId, getCardData  }) => {

    return (
        <Button variant="outline" size="sm" onClick={getCardData} className='rounded-rad' >
            <Icon name='addCart' width={12} height={12} className='hover:text-white' />
            <span className='text-xs font-normal'>Add to Cart</span>
        </Button>
    )
}

export default AddCartButton
