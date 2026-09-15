import Icon from '@/components/ui/icons';
import { productSpecification } from '@/lib/helper/testData';
import React from 'react'


const ProductSpecification: React.FC = () => {
    return (
        <div className='flex flex-col gap-5 border border-border rounded-3xl p-6 bg-white shadow-sm'>
            <div className='flex gap-2 items-center pb-2 border-b border-border'>
                <Icon name='detailsSpecificationIcon' width={26} height={26} />
                <h2 className='text-primary text-xl font-semibold'>Product Details</h2>
            </div>
            <div className='flex flex-col gap-3.5'>
                {productSpecification.map((product, index) => (
                    <div key={index} className='grid grid-cols-5 gap-4 text-base'>
                        <p className='font-semibold text-foreground col-span-2'>{product.name}:</p>
                        <p className='text-muted col-span-3'>{product.value}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductSpecification