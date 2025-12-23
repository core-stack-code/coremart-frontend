
import React from 'react'
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icons'
import { cn } from '@/lib/utils';
import SliderComponent from '@/components/ui/form/slider-component';

const SIZE = ['XS', 'S', 'M', 'L', 'XL', 'XXL'] as const;
type Size = typeof SIZE[number];

const SELECT_OPTIONS = [
    {
        label: "brand",
        options: ["Puma", "Adidas", "Nike", "Kappa"],
    },
    {
        label: "type",
        options: ["T-Shirts", "Jeans", "Dresses", "Jackets"],
    },
    {
        label: "style",
        options: ["Party Wear", "Activewear", "Formal Wear", "Casual Wear"]
    }
]


const ProductFilter: React.FC = () => {
    const [selectedSizes, setSelectedSizes] = React.useState<Size>("L");
    const [priceRange, setPriceRange] = React.useState<[number, number]>([0, 30000]);

    return (
        <div className='w-full rounded-xl border border-border px-4 py-6 flex flex-col gap-6'>
            <div className='flex items-center justify-between'>
                <span className='font-medium text-lg'>Filter</span>
                <Icon name='filter' width={18} height={18} />
            </div>
            <div className='flex flex-col gap-3'>
                <span className='text-sm'>Size</span>
                <div className='w-full rounded-2xl bg-primary/10 flex justify-between items-center'>
                    {SIZE.map((size) => (
                        <Button variant="none" key={size} 
                            className={cn(
                                'text-xs h-8 w-8',
                                selectedSizes === size && "transition-transform scale-125 border border-primary bg-white text-primary font-semibold rounded-full"
                            )}
                            onClick={() => setSelectedSizes(size)}
                            >
                            {size}
                        </Button>
                    ))}
                </div>
            </div>
            {SELECT_OPTIONS.map((option) => (
                <div className='flex flex-col gap-3' key={option.label}>
                    <span className='text-sm'>{option.label}</span>
                    <div className='flex gap-2 items-center flex-wrap'>
                        {option.options.map((opt) => (
                            <Button 
                                key={opt} 
                                variant="outline"
                                className='text-xs rounded-3xl h-8'
                            >
                                {opt}
                            </Button>
                        ))}
                    </div>
                </div>
            ))}
            <div className='flex flex-col gap-3'>
                <span className='text-sm'>Size</span>
                <SliderComponent
                    onChange={(val) => setPriceRange([val[0], val[1]])}
                    defaultValue={priceRange}
                    value={priceRange}
                    max={30000}
                />
            </div>
        </div>
    )
}

export default ProductFilter
