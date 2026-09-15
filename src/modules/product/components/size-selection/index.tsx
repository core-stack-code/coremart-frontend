import { cn } from '@/lib/utils'
import React, { useState } from 'react'

interface sizeSelectionProps {
    sizes: string[]
}

const SizeSelection: React.FC<sizeSelectionProps> = ({ sizes }) => {

    const [selectedSize, setSelectedSize] = useState<string | null>('L')

    // May be we need to lifting state up or we can also use redux as well to get the selected size

    return (
        <div className='flex flex-col gap-4 border border-border rounded-2xl p-5 bg-white'>
            <h3 className='text-lg font-semibold text-foreground'>Select Size</h3>
            <div className='flex flex-wrap gap-3'>
                {sizes.map((size, index) => (
                    <button
                        key={index}
                        className={cn(
                            'min-w-16 px-6 py-3 rounded-xl font-semibold text-base transition-all duration-200',
                            selectedSize === size 
                                ? 'bg-primary text-white shadow-md scale-105' 
                                : 'bg-white border-2 border-border text-foreground hover:border-primary hover:shadow-sm hover:scale-102'
                        )}
                        onClick={() => setSelectedSize(size)}>
                        {size}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default SizeSelection