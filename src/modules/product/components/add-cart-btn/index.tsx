import React from 'react'
import { Button } from '@/components/ui/button'
import { Log } from '@/lib/utils'
import Icon from '@/components/ui/icons'

const AddCartButton: React.FC<{ productId: string }> = ({ productId }) => {

    const handleCartClick = () => {
        Log('add to cart button', productId)
    }

    return (
        <Button variant="outline" size="sm" onClick={handleCartClick} className='rounded-rad' >
            <Icon name='addCart' width={12} height={12} className='hover:text-white' />
            <span className='text-xs font-normal'>Add to Cart</span>
        </Button>
    )
}

export default AddCartButton
