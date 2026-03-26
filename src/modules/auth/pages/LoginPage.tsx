import React from 'react'
import LoginForm from '../components/login-form'
import AuthHeading from '../components/auth-heading'
import { Typography } from '@/components/ui/typography'

const LoginPage: React.FC = () => {
    return (
        <>
            <div className='w-full max-h-screen bg-[url(/login-avtar.svg)] bg-cover bg-no-repeat'>
                <div className='w-full h-full flex flex-col justify-end gap-2 p-5'>
                    <Typography variant='h3' className='text-white font-bold'>COREMART</Typography>
                    <Typography variant='lead' className='text-white'>THE DIGITAL COUTURE EXPERIENCE</Typography>
                </div>
            </div>
            <div className='w-full min-h-full flex flex-col justify-center items-center'>
                <div className='w-full flex flex-col gap-10 px-33'>
                    <AuthHeading
                        title={<Typography variant='h3' className='font-bold'>Welcome Back</Typography>}
                        description={<Typography variant='small'>Please enter your details to access your atelier.</Typography>}
                    />
                    <LoginForm />
                </div>
            </div>
        </>
    )
}

export default LoginPage
