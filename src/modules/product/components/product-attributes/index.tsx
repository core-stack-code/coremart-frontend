import React from 'react'

interface productAttributesProps {
    label: string,
    value: string | number
}

const ProductAttributes: React.FC<productAttributesProps> = ({ label, value }) => {
    return (
        <div className='flex gap-2 items-center'>
            <span className='text-muted'>{label}:</span>
            <span className='text-foreground font-semibold'>{value}</span>
        </div>
    )
}

export default ProductAttributes