import React from 'react'
import Icon, { type CombinedIconName } from '../icons';

interface FooterCategoryColumnProps {
  title: string;
  items?: string[];
  contactItems?: { icon: CombinedIconName, title: string, width: number, height: number}[];
}


const FooterCategoryColumn: React.FC<FooterCategoryColumnProps> = ({ title, items, contactItems }) => {
  return (
    <div>
      <p className='font-xs font-semibold'>{title}</p>

      <div className='flex flex-col gap-3 mt-7 text-muted'>
        {
          contactItems ? (
            contactItems.map((item, index) => (
              <div key={index} className='flex items-center gap-2'>
                <Icon name={item.icon} width={item.width} height={item.height} />
                <span>{item.title}</span>
              </div>
            ))
          ) : (
            items?.map((item, index) => (
              <span key={index}>{item}</span>
            ))
          )
        }
      </div>
    </div>
  )
}

export default FooterCategoryColumn