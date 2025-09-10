import { Link} from 'react-router-dom'
import SignUpForm from "../../components/signup-form"

const SignUpPage = () => {
    return (
        <>
            <div className=" min-h-screen w-full flex flex-col md:flex-row items-center justify-center md:justify-between px-4 sm:px-6 md:px-10 lg:px-10 xl:px-20">
                <div className="w-full lg:w-1/3 flex flex-col gap-6 items-center md:items-start text-center md:text-left  mt-10 md:mt-25">
                    <div className='w-full flex flex-col gap-2 text-5xl max-w-xl '>
                        <p className="text-5xl font-bold text-[#9333EA]">Getting Started</p>
                        <p className="text-lg mt-2 text-[var(--color-info)]">Create an account and verify your details to start shopping.</p>
                        <p className="text-lg text-[var(--color-info)]">Have an account? <Link to={'/auth/'} className="text-xl  text-[var(--color-primary)] font-bold underline ">Login in here</Link></p>
                    </div>
                    <SignUpForm />
                </div>
                <div className=" hidden min-[855px]:block :md:block md:w-full lg:w-[600px] h-full ">
                    <img src="/Signup-Section.svg" alt="Signup Section" className="w-full h-full object-contain" />
                </div>
            </div>
        </>
    )
}

export default SignUpPage