import React, { useState } from 'react'
import SelectField from '@/components/ui/form/select-field';
import { CATEGORY_SORT_OPTIONS } from '@/constants/product';
import { Typography } from '@/components/ui/typography';
import { usePaginationState } from '@/store/state';

interface CategoryPageHeaderProps {
    title?: string;
    subtitle?: string;
}

// have to add logic that handle sort value with URL query params
// that work in category page and product list page both

const CategoryPageHeader: React.FC<CategoryPageHeaderProps> = ({ title, subtitle}) => {

    const newpage = usePaginationState(state => state.page);
    const newlimit = usePaginationState(state => state.limit);
    const totalProducts = usePaginationState(state => state.totalItems);

    const start = (newpage - 1) * newlimit + 1;
    const end = Math.min(newpage * newlimit, totalProducts);

    const [sortValue, setSortValue] = useState<string>(CATEGORY_SORT_OPTIONS[1].value)
    // const { updateSort } = useProductFilter();
    // most probably have to lift this state up
    // or have to lift select menu up
    // or move state to redux

    return (
        <div className='flex items-center justify-between gap-2'>
            <div className='flex flex-col gap-2'>
                <Typography variant='large'>{title}</Typography>
                <Typography className='text-muted'>{subtitle}</Typography>
            </div>
            <div className='flex items-center gap-4'>
                <Typography className='text-muted'>Showing {start}–{end} of {totalProducts} Products</Typography>
                <div className='flex items-center gap-2'>
                    <Typography className="text-muted whitespace-nowrap">Sorted By:</Typography>
                    <SelectField
                        value={sortValue}
                        options={CATEGORY_SORT_OPTIONS}
                        // onValueChange={(value) => { updateSort(value), setSortValue(value) }}
                        onValueChange={(value) => { setSortValue(value) }}
                    />
                </div>
            </div>
        </div>
    )
}

export default CategoryPageHeader
