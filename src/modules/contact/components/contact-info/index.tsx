import React from 'react'
import Icon from '@/components/ui/icons'
import { Typography } from '@/components/ui/typography'

const INFO = {
    phone: '+91 1234567890',
    email: 'coremart@corestack.com',
}


const ContactInfo: React.FC = () => {
    return (
        <div className='w-full flex flex-col gap-6 p-5'>

            <div className="flex gap-5">
                <div className="flex items-center rounded-full gap-2">
                    <div className='w-10 h-10 flex justify-center items-center rounded-full bg-primary/20'>
                        <Icon name="phoneIcon" width={20} height={20} />
                    </div>
                </div>
                <div className="text-muted text-base flex flex-col gap-2">
                    <Typography variant='large' className="text-black">Call to us</Typography>
                    <Typography>We are available 24/7.</Typography>
                    <a>
                        <Typography variant='link' className='hover:text-primary hover:border-b'>{INFO.phone}</Typography>
                    </a>
                </div>
            </div>

            <hr className='text-muted' />

            <div className="flex gap-5">
                <div className="flex items-center rounded-full gap-2">
                    <div className='w-10 h-10 flex justify-center items-center rounded-full bg-primary/10'>
                        <Icon name="mailIcon" width={20} height={20} />
                    </div>
                </div>
                <div className="text-muted text-base flex flex-col gap-3">
                    <Typography variant='large' className="text-black text-lg font-bold">Write to us</Typography>
                    <Typography>Fill out our form and we will contact you within 24 hours.</Typography>
                    <a>
                        <Typography variant='link' className='hover:text-primary hover:border-b' >
                            {INFO.email}
                        </Typography>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo