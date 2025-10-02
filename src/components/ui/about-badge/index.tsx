import React from 'react'
import type { CombinedIconName } from '../icons';
import Icon from '../icons';

type AboutBadeType = {
    id: number;
    title: string;
    subtitles: string;
    iconName: CombinedIconName;
}

const ABOUT_BADGE_DATA: AboutBadeType[] = [
    {
        id: 1,
        title: "FREE AND FAST DELIVERY",
        subtitles: "Free delivery for all orders over ₹999",
        iconName: "truck"
    },
    {
        id: 2,
        title: "24/7 CUSTOMER SERVICE",
        subtitles: "Friendly 24/7 customer support",
        iconName: "headphone"
    },
    {
        id: 3,
        title: "MONEY BACK GUARANTEE",
        subtitles: "We return money within 30 days",
        iconName: "shieldRight"
    },
]


const AboutBade: React.FC = () => {
    return (
        <div className='w-full h-full flex items-center justify-between py-12'>
            {ABOUT_BADGE_DATA.map((badge) => (
                <div key={badge.id} className='flex flex-col gap-2.5 items-center'>
                    <div className='flex items-center justify-center border-[1rem] border-primary/30 rounded-full'>
                        <div className='w-20 h-20 max-w-20 max-h-20 flex items-center justify-center rounded-full bg-primary'>
                            <Icon name={badge.iconName} width={46} height={46} />
                        </div>

                     </div>   
                    <div className='flex flex-col items-center gap-1'>
                        <span className='capitalize font-bold text-xl text-black'>{badge.title}</span>
                        <span className='text-sm text-black font-normal'>{badge.subtitles}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AboutBade
