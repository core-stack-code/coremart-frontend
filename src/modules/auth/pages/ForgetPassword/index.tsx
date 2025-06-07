import ForgetPasswordForm from "../../components/ForgetPassword-form"

const ForgetPassword = () => {
    return (
        <>
             <div className="w-full h-full flex justify-between px-40">
                <div className='w-105 min-w-105 h-full flex flex-col gap-15 pl-5'>
                    <div className='w-full max-w-150 flex flex-col gap-2 text-5xl '>
                        <p className="text-5xl font-bold text-[#9333EA]">Forgot Password?</p>
                        <p className="w-full text-lg mt-2 text-[#6366F1]">Enter your registered email address and we’ll send you a link to reset your password.</p>
                    </div>
                    <ForgetPasswordForm />
                </div>
                <div className="w-180 mt-0 pt-0 hidden md:block">
                    <img src="/ForgetPassword-Section.svg" alt="Forget Password Section" className="w-full h-150 object-fill" />
                </div>
            </div>
        </>
    )
}

export default ForgetPassword