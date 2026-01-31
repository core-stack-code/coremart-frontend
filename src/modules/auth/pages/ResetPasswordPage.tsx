import { Typography } from "@/components/ui/typography"
import AuthHeading from "../components/auth-heading"
import ResetPasswordForm from "../components/reset-password-form"

const ResetPassword = () => {
    return (
        <>
            <div className='w-full h-full flex flex-col gap-16 max-w-102'>
                <AuthHeading
                    title="Reset Password"
                    description={(
                        <div className='flex flex-col gap-0.5 text-secondary'>
                            <Typography>Create a new password to regain access to</Typography>
                            <Typography>your account.</Typography>
                        </div>
                    )}
                />
                <ResetPasswordForm />
            </div>
            <div className='w-full h-full max-w-170'>
                <img
                    src="/resetpassword-section.svg"
                    alt="Login Section"
                    className="w-full h-full object-contain"
                />
            </div>

















            {/* <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center md:justify-between px-4 sm:px-6 md:px-10 lg:px-10 xl:px-20">
                <div className="w-full lg:w-auto flex flex-col gap-10 items-start md:items-start text-start md:text-left ">
                    <div className='w-full max-w-150 flex flex-col gap-2 text-5xl '>
                        <p className="text-5xl font-bold text-[var(--color-primary)]">Reset Password</p>
                        <p className="w-full text-lg mt-2 text-[var(--color-info)]">Create a new password to regain access to your account.</p>
                    </div>
                    <ResetPasswordForm />
                </div>

                 <div className="hidden min-[855px]:block md:w-[600px] lg:w-[600px] h-full">
                    <img 
                    src="/resetpassword-section.svg"
                     alt="Reset Password Section"
                      className="w-full h-auto lg:w-[500px] xl:w-full object-contain"
                       />
                </div>
            </div> */}
        </>
    )
}

export default ResetPassword