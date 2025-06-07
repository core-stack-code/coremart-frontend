import React from 'react'
import LoginForm from '../../components/login-form'

const LoginPage: React.FC = () => {
    return (
        <div className='w-full h-full flex justify-between px-40'>
            <div className='w-105 min-w-105 h-full flex flex-col gap-15 pl-5'>
                <div className='w-full max-w-90 flex flex-col gap-2 text-5xl font-bold text-[#9333EA]'>
                    <p>Hey,</p> 
                    <p>Welcome Back</p>
                </div>
                <LoginForm />
            </div>
            <div className='w-180 hidden md:block'>
                <img src='/login-section.svg' alt='Login Section' className='w-full h-full object-fill' />
            </div>
        </div>
    )
}

export default LoginPage
