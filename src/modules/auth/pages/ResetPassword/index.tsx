import ResetPasswordForm from "../../components/ResetPassword-form"

const ResetPassword = () => {
    return (
        <>
            <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center md:justify-between px-4 sm:px-6 md:px-10 lg:px-10 xl:px-20">
                <div className="w-full lg:w-auto flex flex-col gap-10 items-start md:items-start text-start md:text-left ">
                    <div className='w-full max-w-150 flex flex-col gap-2 text-5xl '>
                        <p className="text-5xl font-bold text-[#9333EA]">Reset Password</p>
                        <p className="w-full text-lg mt-2 text-[#6366F1]">Create a new password to regain access to your account.</p>
                    </div>
                    <ResetPasswordForm />
                </div>

                 <div className="hidden min-[855px]:block md:w-[600px] lg:w-[600px] h-full">
                    <img 
                    src="/ResetPassword-Section.svg"
                     alt="Reset Password Section"
                      className="w-full h-auto lg:w-[500px] xl:w-full object-contain"
                       />
                </div>
            </div>
        </>
    )
}

export default ResetPassword