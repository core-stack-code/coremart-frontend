import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setCategory } from '@/store/slices/productSlice';
import type { Category } from '@/types/products';

import Icon from '@/components/ui/icons'
import { cn } from '@/lib/utils'

const CATEGORY: { id: Category; name: string; image: string }[] = [
    { id: 'casual', name: 'Casual', image: 'category1.svg' },
    { id: 'formal', name: 'Formal', image: 'category1.svg' },
    { id: 'sportswear', name: 'Sports Wear', image: 'category1.svg' },
    { id: 'sleepwear', name: 'Sleep Wear', image: 'category1.svg' },
    { id: 'outerwear', name: 'Outer Wear', image: 'category1.svg' },
    { id: 'workoutwear', name: 'workout Wear', image: 'category1.svg' },
]


const CategoryQueue: React.FC<{ isRedirect?: boolean }> = ({ isRedirect = false }) => {
    const category = useAppSelector(state => state.product.category);
    const navigate = useNavigate()
    const dispatch = useAppDispatch();

    const handleCategoryChange = (category: Category) => {
        dispatch(setCategory(category));
        if(isRedirect) {
            navigate('/product/category');
        }
    }

    return (
        <div className='w-full flex flex-col gap-4'>
            <div className='w-full flex gap-5 items-center'>
                <Icon name='categories' width={24} height={24} />
                <span className='text-lg font-bold text-primary'>Categories</span>
            </div>
            <div className='w-full flex justify-between'>
                {CATEGORY.map((item) => {
                    const isSelected = category === item.id;

                    return(
                        <div key={item.id} className='flex flex-col items-center gap-3 hover:text-accent/70'>
                            <div 
                                className={cn(
                                    'w-35 h-35 rounded-full flex items-center justify-center border-4 border-white',
                                    'shadow-[0_-6px_12px_rgba(0,0,0,0.1),0_6px_12px_rgba(0,0,0,0.1)] hover:shadow-accent/70 cursor-pointer',
                                    isSelected && 'shadow-accent/70'
                                )}
                                onClick={() => handleCategoryChange(item.id)}
                            >
                                <img src={`/src/assets/images/${item.image}`} alt={item.name} className='w-full h-full rounded-full overflow-hidden object-cover' />
                            </div>
                            <span className={cn('text-base font-medium', isSelected && "text-accent")}>{item.name}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CategoryQueue