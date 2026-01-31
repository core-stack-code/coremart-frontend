import { Link } from 'react-router-dom'
import SignUpForm from "../components/signup-form"
import AuthHeading from '../components/auth-heading'
import { Typography } from '@/components/ui/typography'

const SignUpPage = () => {
    return (
        <>
            <div className='w-full h-full flex flex-col gap-16 max-w-102'>
                <AuthHeading
                    title="Getting Started"
                    description={(
                        <div className='flex flex-col gap-0.5 text-secondary'>
                            <Typography>Create an account and verify your details to start shopping.</Typography>
                            <div className='flex gap-1'>
                                <Typography>Already have an account?</Typography>
                                <Link to="/auth" className='text-primary font-bold underline'>Log in here</Link>
                            </div>
                        </div>
                    )}
                />
                <SignUpForm />
            </div>
            <div className='w-full h-full max-w-170'>
                <img
                    src="/signup-section.svg"
                    alt="Signup Section"
                    className="w-full h-full object-contain"
                />
            </div>
        </>
    )
}

export default SignUpPage