import { Typography } from "@/components/ui/typography"
import AuthHeading from "../components/auth-heading"
import ForgetPasswordForm from "../components/forget-password-form"

const ForgetPassword = () => {
    return (
        <>
            <div className='w-full max-h-screen bg-[url(/forgetpassword-avtar.svg)] bg-cover bg-no-repeat'>
                <div className='max-w-78 h-full flex flex-col justify-end gap-2 p-5'>
                    <Typography variant='h3' className='text-white font-bold'>DEFINING THE MODERN SILHOUETTE.</Typography>
                </div>
            </div>
            <div className='w-full min-h-full flex flex-col justify-center items-center'>
                <div className='w-full flex flex-col gap-10 px-33'>
                    <AuthHeading
                        title={<Typography variant='h3' className='font-bold'>Forget Password?</Typography>}
                        description={<Typography variant='small'>Enter your registered email address and we’ll send you a link to reset your password.</Typography>}
                    />
                    <ForgetPasswordForm />
                </div>
            </div>












            {/* <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center md:justify-between px-4 sm:px-6 md:px-10 lg:px-10 xl:px-20">
                <div className="w-full lg:w-auto flex flex-col gap-10 items-start md:items-start text-start md:text-left ">
                    <div className="w-full max-w-[480px] flex flex-col gap-2">
                        <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary)]">
                            Forgot Password?
                        </p>
                        <p className="text-base sm:text-lg mt-2 text-[var(--color-info)]">
                            Enter your registered email address and we’ll send you a link to reset your password.
                        </p>
                    </div>
                    <ForgetPasswordForm />
                </div>

                <div className="hidden min-[855px]:block md:w-[600px] lg:w-[600px] h-full">
                    <img
                        src="/forgetpassword-section.svg"
                        alt="Forget Password Section"
                        className="w-full h-auto lg:w-[500px] xl:w-full object-contain"
                    />
                </div>
            </div> */}

        </>
    )
}

export default ForgetPassword