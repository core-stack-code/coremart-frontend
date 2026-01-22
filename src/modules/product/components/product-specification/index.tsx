import Icon from '@/components/ui/icons';
import { productSpecification } from '@/lib/helper/testData';
import React from 'react'


const ProductSpecification: React.FC = () => {
    return (
        <div className='flex flex-col gap-8 border border-border rounded-2xl px-8 py-4'>
            <div className='flex gap-3 items-center'>
                <Icon name='detailsSpecificationIcon' width={24} height={24} />
                <h1 className='text-primary text-lg font-bold'>Product Details</h1>
            </div>
            <div className='flex flex-col gap-4'>
                {productSpecification.map((product, index) => (
                    <div key={index} className='grid grid-cols-2 items-center text-md text-muted'>
                        <p className='font-bold'>{product.name}</p>
                        <p>{product.value}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductSpecification