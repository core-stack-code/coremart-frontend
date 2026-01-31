import React from 'react'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icons'
import { useToast } from '@/hooks/useToast'
import { Typography } from '@/components/ui/typography'

interface addCartButtonProps {
    productId: string,
    getCardData: () => void
}


const AddCartButton: React.FC<addCartButtonProps> = ({ getCardData }) => {

    const toast = useToast()

    return (
        <Button variant="outline" size="sm" onClick={() => { getCardData(), toast.success("Product added to cart") }} className='rounded-rad' >
            <Icon name='addCart' width={12} height={12} className='hover:text-white' />
            <Typography className='text-xs font-normal'>Add to Cart</Typography>
        </Button>
    )
}

export default AddCartButton
