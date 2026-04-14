// import React, { useEffect, useState } from 'react'
// import { Button } from '@/components/ui/button';
// import Icon from '@/components/ui/icons'
// import { cn } from '@/lib/utils';
// import SliderComponent from '@/components/ui/form/slider-component';
// import { useSearchParams } from 'react-router-dom';
// import { useDebounce } from '@/hooks/debounce';
// import { Typography } from '@/components/ui/typography';
// import { useProductState } from '@/store/state';

// const SIZE = ['XS', 'S', 'M', 'L', 'XL', 'XXL'] as const;
// export type Size = typeof SIZE[number];

// const SELECT_OPTIONS = [
//     {
//         label: "brand",
//         options: ["Puma", "Adidas", "Nike", "Kappa"],
//     },
//     {
//         label: "type",
//         options: ["T-Shirts", "Jeans", "Dresses", "Jackets"],
//     },
//     {
//         label: "style",
//         options: ["Party Wear", "Active wear", "Formal Wear", "Casual Wear"]
//     }
// ]


// const ProductFilter: React.FC = () => {

//     const setFilters = useProductState(state => state.setFilter);
//     const allFilters = useProductState((state) => state.filter);

//     const [selectedSizes, setSelectedSizes] = React.useState<Size>("L");

//     const [priceRange, setPriceRange] = React.useState<[number, number]>([allFilters.minPrice, allFilters.maxPrice]);

//     const [allTypes, setAllTypes] = useState({
//         brand: allFilters.brand,
//         type: allFilters.type,
//         style: allFilters.style,
//     });

//     const [filter, setFilter] = useState({
//         size: selectedSizes,
//         brand: allTypes.brand,
//         type: allTypes.type,
//         style: allTypes.style,
//         minPrice: allFilters.minPrice,
//         maxPrice: allFilters.maxPrice,
//     });

//     const debouncedFilters = useDebounce(filter, 500);
//     const [searchParams, setSearchParams] = useSearchParams();


//     const handleFilter = (option: typeof SELECT_OPTIONS[number], value: string) => {
//         setFilter(prev => ({
//             ...prev,
//             [option.label]: prev[option.label as keyof typeof prev] === value ? "" : value,
//         }));
//     }

//     useEffect(() => {
//         const params = new URLSearchParams(searchParams);

//         const urlFilters = {
//             size: (params.get("size") as Size) ?? allFilters.size,
//             brand: params.get("brand") ?? allFilters.brand,
//             type: params.get("type") ?? allFilters.type,
//             style: params.get("style") ?? allFilters.style,
//             minPrice: Number(params.get("minPrice") ?? allFilters.minPrice),
//             maxPrice: Number(params.get("maxPrice") ?? allFilters.maxPrice),
//         };

//         setFilters(urlFilters);

//         setSelectedSizes(urlFilters.size);
//         setPriceRange([urlFilters.minPrice, urlFilters.maxPrice]);
//         setAllTypes({
//             brand: urlFilters.brand,
//             type: urlFilters.type,
//             style: urlFilters.style,
//         });
//         setFilter(urlFilters);

//     }, []);



//     useEffect(() => {
//         // const params = new URLSearchParams(searchParams);

//         // Object.entries(debouncedFilters).forEach(([key, value]) => {
//         //     params.set(key, String(value));
//         // });

//         setFilters(debouncedFilters);

//         // setSearchParams(params);

//     }, [debouncedFilters]);


//     return (
//         <div className='w-full rounded-xl border border-border px-4 py-6 flex flex-col gap-6'>
//             <div className='flex items-center justify-between'>
//                 <Typography variant='large'>Filters</Typography>
//                 <Icon name='filter' width={18} height={18} />
//             </div>
//             <div className='flex flex-col gap-3'>
//                 <Typography>Size</Typography>
//                 <div className='w-full rounded-2xl bg-primary/10 flex justify-between items-center'>
//                     {SIZE.map((size) => (
//                         <Button variant="none" key={size}
//                             className={cn(
//                                 'text-xs h-8 w-8',
//                                 selectedSizes === size && "transition-transform scale-125 border border-primary bg-white text-primary font-semibold rounded-full"
//                             )}
//                             onClick={() => {
//                                 setSelectedSizes(size);
//                                 setFilter(prev => ({
//                                     ...prev, size
//                                 }))
//                             }}
//                         >
//                             {size}
//                         </Button>
//                     ))}
//                 </div>
//             </div>
//             {SELECT_OPTIONS.map((option) => (
//                 <div className='flex flex-col gap-3' key={option.label}>
//                     <Typography>{option.label}</Typography>
//                     <div className='flex gap-2 items-center flex-wrap'>
//                         {option.options.map((opt) => (
//                             <Button
//                                 key={opt}
//                                 variant="outline"
//                                 className={cn(
//                                     allTypes[option.label as keyof typeof allTypes] === opt && "bg-primary text-white",
//                                     'text-xs rounded-3xl h-8',
//                                 )}
//                                 onClick={() => { handleFilter(option, opt), setAllTypes(prev => ({ ...prev, [option.label]: prev[option.label as keyof typeof prev] === opt ? "" : opt })) }}
//                             >
//                                 {opt}
//                             </Button>
//                         ))}
//                     </div>
//                 </div>
//             ))}
//             <div className='flex flex-col gap-3'>
//                 <Typography>Price</Typography>
//                 <SliderComponent
//                     onChange={(val) => {
//                         setFilter(prev => ({
//                             ...prev, minPrice: val[0], maxPrice: val[1]
//                         })),
//                             setPriceRange([val[0], val[1]])
//                     }}
//                     defaultValue={priceRange}
//                     value={priceRange}
//                     max={30000}
//                 />
//             </div>
//         </div>
//     )
// }

// export default ProductFilter





























import React from 'react'
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icons'
import { cn } from '@/lib/utils';
import SliderComponent from '@/components/ui/form/slider-component';
import { Typography } from '@/components/ui/typography';
import { useProductFilter } from '@/hooks/useProductFilter';
import type { FilterState } from '@/store/state/productState';

const SIZE = ['XS', 'S', 'M', 'L', 'XL', 'XXL'] as const;
export type Size = typeof SIZE[number];

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
        options: ["Party Wear", "Active wear", "Formal Wear", "Casual Wear"]
    }
]


const ProductFilter: React.FC = () => {

    const { filters, updateFilter, updatePriceRange } = useProductFilter();

    const [priceRange, setPriceRange] = React.useState<[number, number]>([filters.minPrice, filters.maxPrice]);

    return (
        <div className='w-full rounded-xl border border-border px-4 py-6 flex flex-col gap-6'>
            <div className='flex items-center justify-between'>
                <Typography variant='large'>Filters</Typography>
                <Icon name='filter' width={18} height={18} />
            </div>
            <div className='flex flex-col gap-3'>
                <Typography>Size</Typography>
                <div className='w-full rounded-2xl bg-primary/10 flex justify-between items-center'>
                    {SIZE.map((size) => (
                        <Button variant="none" key={size}
                            className={cn(
                                'text-xs h-8 w-8',
                                filters.size === size && "transition-transform scale-125 border border-primary bg-white text-primary font-semibold rounded-full"
                            )}
                            onClick={() => updateFilter("size", size)}
                        >
                            {size}
                        </Button>
                    ))}
                </div>
            </div>
            {SELECT_OPTIONS.map((option) => (
                <div className='flex flex-col gap-3' key={option.label}>
                    <Typography>{option.label}</Typography>
                    <div className='flex gap-2 items-center flex-wrap'>
                        {option.options.map((opt) => (
                            <Button
                                key={opt}
                                variant="outline"
                                className={cn(
                                    filters[option.label as keyof FilterState] === opt && "bg-primary text-white",
                                    'text-xs rounded-3xl h-8',
                                )}
                                onClick={() => { updateFilter(option.label as keyof FilterState, opt) }}
                            >
                                {opt}
                            </Button>
                        ))}
                    </div>
                </div>
            ))}
            <div className='flex flex-col gap-3'>
                <Typography>Price</Typography>
                <SliderComponent
                    onChange={(val) => {
                        updatePriceRange(val[0], val[1])
                        setPriceRange([filters.minPrice, filters.maxPrice]);
                    }}
                    defaultValue={priceRange}
                    value={priceRange}
                    max={30000}
                />
            </div>
        </div>
    )
}

export default ProductFilter
