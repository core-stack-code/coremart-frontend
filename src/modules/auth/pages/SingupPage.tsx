import React from "react"
import SignUpForm from "../components/signup-form"
import AuthHeading from '../components/auth-heading'
import { Typography } from '@/components/ui/typography'

const SignUpPage: React.FC = () => {
    return (
        <>
            <div className='w-full max-h-screen bg-[url(/signup-avtar.svg)] bg-cover bg-no-repeat'>
                <div className='w-full h-full flex flex-col justify-end gap-2 p-5 bg-linear-to-b from-t-transparent via-transparent to-muted/70'>
                    <Typography variant='h3' className='text-white font-bold'>COREMART</Typography>
                    <Typography variant='lead' className='text-white'>THE DIGITAL COUTURE EXPERIENCE</Typography>
                </div>
            </div>
            <div className='w-full min-h-full flex flex-col justify-center items-center'>
                <div className='w-full flex flex-col gap-10 px-33'>
                    <AuthHeading
                        title={<Typography variant='h3' className='font-bold'>Join the Coremart</Typography>}
                        description={<Typography variant='small'>Experience a curated approach to luxury. Create your account to access exclusive collections and personalized styling</Typography>}
                    />
                    <SignUpForm />
                </div>
            </div>
        </>
    )
}

export default SignUpPage