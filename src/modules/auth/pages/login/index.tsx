import React from 'react'
import LoginForm from '../../components/login-form'

const LoginPage: React.FC = () => {
    return (

        <div className="min-h-screen w-full flex flex-col md:flex-row items-center md:items-start justify-between px-4 sm:px-6 md:px-20 lg:px-40 py-10 md:py-0">
            <div className="w-full md:w-1/3 flex flex-col gap-10">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#9333EA]">
                    <p>Hey,</p>
                    <p>Welcome Back</p>
                </div>
                <LoginForm />
            </div>

            <div className="hidden min-[770px]:block md:w-180 lg:w-180 h-full">
                <img
                    src="/login-section.svg"
                    alt="Login Section"
                    className="w-full h-full object-contain min-[850px]:block"
                />
            </div>
        </div>

    )
}

export default LoginPage
