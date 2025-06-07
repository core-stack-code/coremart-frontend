import ResetPasswordForm from "../../components/ResetPassword-form"

const ResetPassword = () => {
    return (
        <>
            <div className="w-full h-full flex justify-between px-40">
                <div className='w-105 min-w-105 h-full flex flex-col gap-15 pl-5'>
                    <div className='w-full max-w-150 flex flex-col gap-2 text-5xl '>
                        <p className="text-5xl font-bold text-[#9333EA]">Reset Password</p>
                        <p className="w-full text-lg mt-2 text-[#6366F1]">Create a new password to regain access to your account.</p>
                    </div>
                    <ResetPasswordForm />
                </div>
                <div className="w-180 mt-0 pt-0 hidden md:block">
                    <img src="/ResetPassword-Section.svg" alt="Reset Password Section" className="w-full h-150 object-fill" />
                </div>
            </div>
        </>
    )
}

export default ResetPassword