import SignUpForm from "../../components/signup-form"

const SignUpPage = () => {
    return (
        <>
            <div className="w-full h-full flex justify-between px-15">
                <div className='w-105 min-w-105 h-full flex flex-col gap-15 pl-5'>
                    <div className='w-full max-w-90 flex flex-col gap-2 text-5xl '>
                        <p className="text-5xl font-bold text-[#9333EA]">Getting Started</p>
                        <p className="w-150 text-lg mt-2 text-[#6366F1]">Create an account and verify your details to start shopping.</p>
                        <p className="text-lg text-[#6366F1]">Have an account?<a href="/" className="text-xl  text-[#9333EA] font-bold underline ">Login in here</a></p>
                    </div>
                    <SignUpForm />
                </div>
                <div className="w-180 mt-0 pt-0 hidden md:block">
                    <img src="/Signup-Section.svg" alt="Signup Section" className="w-full h-150 object-fill" />
                </div>
            </div>
        </>
    )
}

export default SignUpPage