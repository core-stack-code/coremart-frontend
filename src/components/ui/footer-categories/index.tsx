import { cn } from '@/lib/utils';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCategory } from '@/store/slices/productSlice';
import type { Category } from '@/types/products';

interface FooterCategoryColumnProps {
  title: string;
  items?: { text: string, redirect: string, icon?: React.ReactNode }[];
}

const FooterCategoryColumn: React.FC<FooterCategoryColumnProps> = ({ title, items }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCategorySelect = (item: Category) =>{
      dispatch(setCategory(item))
      navigate('/product/category')
  }

  return (
    <div>
      <p className='font-xs font-semibold'>{title}</p>

      <div className='flex flex-col gap-3 mt-7 text-muted'>
        {
          items?.map((item, index) => (
            <div
              key={index}
              className={cn(
                item.icon && "flex items-center gap-2")}>
              {item.icon && item.icon}
              <button
               className="hover:text-primary hover:underline hover:cursor-pointer"
               onClick={() => handleCategorySelect(item.text as Category)}
               >
                {item.text}
                </button>
            </div>
          )
          )
        }
      </div>
    </div>
  )
}

export default FooterCategoryColumn
