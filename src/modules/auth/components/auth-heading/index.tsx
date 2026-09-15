import React from 'react'

interface AuthHeadingProps {
    title: string | React.ReactNode
    description?: string | React.ReactNode
}

const AuthHeading: React.FC<AuthHeadingProps> = ({ title, description, }) => {
    return (
        <div className='w-full flex flex-col gap-3.5 text-primary'>
            <h1 className='text-5xl font-bold '>
                {title}
            </h1>
            {description && <span className='text-sm font-normal'>{description}</span>}
        </div>
    )
}

export default AuthHeading
