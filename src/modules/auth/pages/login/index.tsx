import React from 'react'
import LoginForm from '../../components/login-form'

const LoginPage: React.FC = () => {
    return (

        <div className=" min-h-screen w-full h-full flex flex-col md:flex-row items-center justify-center md:justify-between px-4 sm:px-6 md:px-20">
            <div className=" h-auto w-1/2 sm:w-1/2 md:w-1/3 flex flex-col gap-10 items-center md:items-start text-center md:text-left">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#9333EA]">
                    <p>Hey,</p>
                    <p>Welcome Back</p>
                </div>
                <LoginForm />
            </div>


            <div className=" hidden md:block md:w-[400px] lg:w-[500px] h-full">
                <img
                    src="/login-section.svg"
                    alt="Login Section"
                    className="w-full h-full object-contain"
                />
            </div>
        </div>


    )
}

export default LoginPage
