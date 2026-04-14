import React from 'react'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icons'
import { useToast } from '@/hooks/useToast'

interface addCartButtonProps {
    productId: string,
    getCardData: () => void
}


const AddCartButton: React.FC<addCartButtonProps> = ({ getCardData }) => {
    const toast = useToast()

    return (
        <Button variant="none" size="sm" onClick={(e) => { e.stopPropagation(); getCardData(), toast.success("Product added to cart") }} className='rounded-rad'>
            <div className='w-8 h-8 flex justify-center items-center bg-muted/20 hover:bg-muted/5 rounded-full'>
                <Icon name='addCart' width={12} height={12} className='hover:text-primary' />
            </div>
            {/* <Typography className='text-xs font-normal'>Add to Cart</Typography> */}
        </Button>
    )
}

export default AddCartButton
