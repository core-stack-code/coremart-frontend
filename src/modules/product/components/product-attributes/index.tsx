import React from 'react'

interface productAttributesProps {
    label: string,
    value: string | number
}

const ProductAttributes: React.FC<productAttributesProps> = ({ label, value }) => {
    return (
        <div className='flex gap-1'>
            <span>{label} :</span>
            <span className='text-black font-bold'>{value}</span>
        </div>
    )
}

export default ProductAttributes