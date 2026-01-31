import { Typography } from '@/components/ui/typography'
import React from 'react'

interface productAttributesProps {
    label: string,
    value: string | number
}

const ProductAttributes: React.FC<productAttributesProps> = ({ label, value }) => {
    return (
        <div className='flex gap-2 items-center'>
            <Typography className='text-muted'>{label}:</Typography>
            <Typography className='text-foreground font-semibold'>{value}</Typography>
        </div>
    )
}

export default ProductAttributes