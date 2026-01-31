import { Typography } from '@/components/ui/typography'
import React from 'react'

const ProfileInfo: React.FC = () => {
    return (
        <div className="flex justify-start ">
            <div className="w-1/4 flex flex-col justify-center items-center gap-3">
                <img
                    src="/All-Category/Top-Wear/2NA22S0CA-K11@10.jpg"
                    alt="Profile not found"
                    className="w-32 h-32 object-cover rounded-full"
                />
                <Typography variant='large' >Sachit Dabhi</Typography>
            </div>


            <div className="w-full flex flex-col gap-6 justify-start">

                <div className="flex gap-6">
                    <div className="flex flex-col gap-2">
                        <Typography variant='small'>Full Name</Typography>
                        <Typography >Sachit Dabhi</Typography>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Typography variant='small'>Phone Number</Typography>
                        <Typography>+91 1234567890</Typography>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <Typography variant='small'>Email Address</Typography>
                    <Typography>corestack@gmail.com</Typography>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo