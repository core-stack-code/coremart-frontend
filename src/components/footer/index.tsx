import React, { useCallback, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/hooks/redux';
import type { Category } from '@/types/products';
import { CATEGORY_ENUM_MAP } from '@/constants/product';

import Icon, { type CombinedIconName } from '../ui/icons'
import FooterCategoryColumn from '../ui/footer-categories';
import { Separator } from '../ui/separator';


export type FooterLink = {
    text: string // to display
    value?: any // actual value
    to?: string
    icon?: CombinedIconName
    onClick?: (value: any) => void
}


const CustomerAccountItems: FooterLink[] = [
    { text: 'My Account', to: '/' },
    { text: 'Order History', to: '/' },
    { text: 'Whislist', to: '/' },
    { text: 'Track Order', to: '/' },
    { text: 'Returns & Exchanges', to: '/' }
];

const CustomerSupportItems: FooterLink[] = [
    { text: 'Contact us', to: '/' },
    { text: 'FAQs', to: '/' },
    { text: 'Shipping Information', to: '/' },
    { text: 'Return Policy', to: '/' }
];

const ContactItems: FooterLink[] = [
    { text: 'contact@gmail.com', to: '/', icon: 'mailIcon' },
    { text: '+91 1234567890', to: '/', icon: 'phoneIcon' },
    { text: 'Gujarat,india', to: '/', icon: 'locationIcon' }
]


const Footer: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleCategoryRedirect = useCallback((cate: Category) => {
        // dispatch(setCategory(cate));
        navigate(`/category/${cate}`);
    }, [dispatch, navigate]);

    const shopItems: FooterLink[] = useMemo(() => [
        { text: "Casual", value: CATEGORY_ENUM_MAP.casual, onClick: handleCategoryRedirect },
        { text: "Formal", value: CATEGORY_ENUM_MAP.formal, onClick: handleCategoryRedirect },
        { text: "Sports Wear", value: CATEGORY_ENUM_MAP.sportswear, onClick: handleCategoryRedirect },
        { text: "Sleep Wear", value: CATEGORY_ENUM_MAP.sleepwear, onClick: handleCategoryRedirect },
        { text: "Outer Wear", value: CATEGORY_ENUM_MAP.outerwear, onClick: handleCategoryRedirect },
        { text: "Workout Wear", value: CATEGORY_ENUM_MAP.workoutwear, onClick: handleCategoryRedirect },
    ], [handleCategoryRedirect]);


    return (
        <div className='flex flex-col py-15 gap-15'>
            <Separator className="" />
            <div className='w-full flex flex-col gap-15 justify-start px-30'>
                <div className='flex gap-30 justify-between'>
                    <div className='flex flex-col gap-6'>
                        <Link to="/">
                            <Icon name='logo' width={64} height={64} />
                        </Link>
                        <span >Fashion made easy  for everyone, everywhere.</span>

                        <div className='flex gap-4 items-center'>
                            <Icon name='instagram' width={24} height={24} className='cursor-pointer' />
                            <Icon name='facebook' width={24} height={24} className='cursor-pointer' />
                            <Icon name='linkdin' width={24} height={24} className='cursor-pointer' />
                            <Icon name='twitter' width={21} height={21} className='cursor-pointer' />
                        </div>
                    </div>


                    <div className='grid grid-cols-4 gap-10'>
                        <FooterCategoryColumn title='Shop Categories' items={shopItems} />
                        <FooterCategoryColumn title='Customer Account' items={CustomerAccountItems} />
                        <FooterCategoryColumn title='Customer Support' items={CustomerSupportItems} />
                        <FooterCategoryColumn title='Contact Us' items={ContactItems} />
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <Separator />

                    <div className='flex justify-between items-center px-3'>
                        <div className='pl-3'>
                            <p>Copyright © 2025 CoreStack</p>
                        </div>
                        <div className='flex gap-2 h-4 '>
                            <p>All Rights Reserved</p>
                            <Separator orientation='vertical' className='h-full' />
                            <p className='text-primary border-b cursor-pointer'>Terms and Conditions</p>
                            <Separator orientation='vertical' className='h-full' />
                            <p className='text-primary border-b cursor-pointer'>Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer