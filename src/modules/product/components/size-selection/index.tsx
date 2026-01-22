import { cn } from '@/lib/utils'
import React, { useState } from 'react'

interface sizeSelectionProps {
    sizes: string[]
}

const SizeSelection: React.FC<sizeSelectionProps> = ({ sizes }) => {

    const [selectedSize, setSelectedSize] = useState<string | null>('L')

    // May be we need to lifting state up or we can also use redux as well to get the selected size

    return (
        <div className='flex flex-col gap-4'>
            <h1 className='font-bold'>Size</h1>
            <div className='flex flex-wrap gap-4'>
                {sizes.map((size, index) => (
                    <button
                        key={index}
                        className={cn(
                            'border border-primary px-8 py-1 rounded-xl hover:bg-primary hover:text-white cursor-pointer',
                            selectedSize === size ? 'bg-primary text-white' : 'text-primary'
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