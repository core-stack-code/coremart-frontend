import React from 'react'
import { Link } from 'react-router-dom';
import type { FooterLink } from '@/components/footer';
import { cn } from '@/lib/utils';
import Icon from '../icons';

interface FooterCategoryColumnProps {
  title: string;
  items: FooterLink[];
}


const FooterCategoryColumn: React.FC<FooterCategoryColumnProps> = ({ title, items }) => {
  return (
    <div className='flex flex-col gap-7'>
      <p className='font-xs font-semibold'>{title}</p>

      <div className='flex flex-col gap-4 text-muted'>
        {items.map((item, index) => (
          <div key={index} className={cn(item.icon && "flex items-center gap-2")}>
            {item.icon && <Icon name={item.icon} width={16} height={16} />}

            {item.onClick ? (
              <button
                onClick={() => item.onClick?.(item.value || '')}
                className="hover:text-primary hover:underline cursor-pointer"
              >
                {item.text}
              </button>
            ) : (
              <Link
                to={item.to!}
                className="hover:text-primary hover:underline"
              >
                {item.text}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FooterCategoryColumn