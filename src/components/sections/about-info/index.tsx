import { Typography } from '@/components/ui/typography'
import React from 'react'

const AboutInfo: React.FC = () => {
    return (
        <div className='flex flex-col gap-8 p-6 border border-border border-l-primary/60 border-l-4 shadow-xl rounded-rad'>

            <Typography variant='h1'>About
                <Typography asChild variant='h1' className="text-primary">
                    <span> Coremart</span>
                </Typography>
            </Typography>

            <div className="flex flex-col text-muted text-justify gap-7">
                <Typography>
                    At Coremart, we believe fashion should be effortless, expressive and accessible to everyone. Our mission is to bring you high quality, trendy and comfortable clothing that fits your unique style.
                </Typography>
                <Typography>
                    We are passionate about quality, sustainability and customer satisfaction. Every piece is carefully curated to reflect the latest fashion trends without compromising on comfort and durability.
                </Typography>
                <Typography>
                    Thank you for being a part of our journey. Let's make fashion more fun, inclusive and inspiring together.
                </Typography>
            </div>
        </div>
    )
}

export default AboutInfo