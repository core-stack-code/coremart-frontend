import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../ui/icons'
import FooterCategoryColumn from '../ui/footer-categories';
import { Separator } from '../ui/separator';

 

const shopItems: { text: string, redirect: string }[] = [
    { text: 'casual', redirect: '/product/category' },
    { text: 'formal', redirect: '/product/category' },
    { text: 'sportswear', redirect: '/product/category' },
    { text: 'sleepwear', redirect: '/product/category' },
    { text: 'outerwear', redirect: '/product/category' },
    { text: 'workoutwear', redirect: '/product/category' }
];

const CustomerAccountItems: { text: string, redirect: string }[] = [
    { text: 'My Account', redirect: '/' },
    { text: 'Order History', redirect: '/' },
    { text: 'Whislist', redirect: '/' },
    { text: 'Track Order', redirect: '/' },
    { text: 'Returns & Exchanges', redirect: '/' }
];

const CustomerSupportItems: { text: string, redirect: string }[] = [
    { text: 'Contact us', redirect: '/' },
    { text: 'FAQs', redirect: '/' },
    { text: 'Shipping Information', redirect: '/' },
    { text: 'Return Policy', redirect: '/' }
];


const ContactItems: { text: string, redirect: string, icon: React.ReactNode }[] = [
    { text: 'contact@gmail.com', redirect: '/', icon: <Icon name='mailIcon' width={18} height={18} /> },
    { text: '+91 1234567890', redirect: '/', icon: <Icon name='phoneIcon' width={18} height={18} /> },
    { text: 'Gujarat,india', redirect: '/', icon: <Icon name='locationIcon' width={23} height={23} /> }
]


const Footer: React.FC = () => {

    return (
        <>
            <div className='w-full flex flex-col justify-start px-30 mt-17'>
                <div className='flex '>
                    <div>
                        <div>
                            <Link to="/">
                                <Icon name='logo' width={64} height={64} />
                            </Link>
                        </div>
                        <div className='mt-6'>
                            <span >Fashion made easy  for everyone, everywhere.</span>
                        </div>

                        <div className='flex mt-6 gap-4'>
                            <Icon name='instagramIcon' width={35} height={35} />
                            <Icon name='facebookIcon' width={35} height={35} />
                            <Icon name='linkdinIcon' width={35} height={35} />
                            <Icon name='twitterIcon' width={35} height={35} />
                        </div>
                    </div>


                    <div className='ml-30'>
                        <div className='flex gap-15'>

                            <FooterCategoryColumn title='Shop Categories' items={shopItems} />

                            <FooterCategoryColumn title='Customer Account' items={CustomerAccountItems} />

                            <FooterCategoryColumn title='Customer Support' items={CustomerSupportItems} />

                            <FooterCategoryColumn title='Contact Us' items={ContactItems} />

                        </div>
                    </div>

                </div>

                <hr className='border-muted mt-18 mb-4'></hr>
                <div className='flex justify-between items-center font-xs mb-16 px-3'>
                    <div className='px-3'>
                        <p>Copyright © 2025 CoreStack</p>
                    </div>
                    <div className='flex gap-2 h-4 '>
                        <p>All Rights Reserved</p>
                        <Separator orientation='vertical' className='h-full border border-muted' />
                        <p className='text-primary border-b'>Terms and Conditions</p>
                        <Separator orientation='vertical' className='h-full border border-muted' />
                        <p className='text-primary border-b'>Privacy Policy</p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Footer
