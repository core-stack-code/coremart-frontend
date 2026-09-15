import React from 'react'
import Icon from '@/components/ui/icons'

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
                    <p className="text-black text-lg font-bold">Call to us</p>
                    <p>We are available 24/7.</p>
                    <a>
                        <span className='hover:text-primary hover:border-b'>{INFO.phone}</span>
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
                    <p className="text-black text-lg font-bold">Write to us</p>
                    <p>Fill out our form and we will contact you within 24 hours.</p>
                    <a>
                        <span className='hover:text-primary hover:border-b' >
                            {INFO.email}
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo