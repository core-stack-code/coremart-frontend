import React from 'react'
import LoginForm from '../components/login-form'
import AuthHeading from '../components/auth-heading'
import { Typography } from '@/components/ui/typography'

const LoginPage: React.FC = () => {
    return (
        <>
            <div className='w-full h-full flex flex-col gap-16 max-w-102'>
                <AuthHeading
                    title={ (
                        <div className='flex flex-col gap-1'>
                            <Typography variant='h1'>Hey,</Typography>
                            <Typography variant='h1'>Welcome Back</Typography>
                        </div>
                    )}
                />
                <LoginForm />
            </div>
            <div className='w-full h-full max-w-170'>
                <img
                    src="/login-section.svg"
                    alt="Login Section"
                    className="w-full h-full object-contain"
                />
            </div>
        </>
    )
}

export default LoginPage
