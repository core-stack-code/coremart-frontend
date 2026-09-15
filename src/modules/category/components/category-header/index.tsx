import React, { useState } from 'react'
import SelectField from '@/components/ui/form/select-field';
import { CATEGORY_SORT_OPTIONS } from '@/constants/product';

interface CategoryPageHeaderProps {
    title?: string;
    subtitle?: string;
    productCount: number;

}

// have to add logic that handle sort value with URL query params
// that work in category page and product list page both

const CategoryPageHeader: React.FC<CategoryPageHeaderProps> = ({ productCount, title, subtitle }) => {
    const [sortValue, setSortValue] = useState<string>(CATEGORY_SORT_OPTIONS[1].value)
    // most probably have to lift this state up
    // or have to lift select menu up
    // or move state to redux
    
    return (
        <div className='flex items-center justify-between gap-2'>
            <div className='flex flex-col gap-2'>
                <h2 className='text-lg font-semibold'>{title}</h2>
                <p className=" text-md text-muted">{subtitle}</p>
            </div>
            <div className='flex items-center gap-4'>
                <p className="text-muted">Showing 1–15 of {productCount} Products</p>
                <div className='flex items-center gap-2'>
                    <p className="text-muted whitespace-nowrap">Sorted By:</p>
                    <SelectField
                        value={sortValue}
                        options={CATEGORY_SORT_OPTIONS}
                        onValueChange={(value) => setSortValue(value)}
                    />
                </div>
            </div>
        </div>
    )
}

export default CategoryPageHeader
