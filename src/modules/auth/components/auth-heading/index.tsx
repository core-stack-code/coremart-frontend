import { Typography } from '@/components/ui/typography'
import React from 'react'

interface AuthHeadingProps {
    title: string | React.ReactNode
    description?: string | React.ReactNode
}

const AuthHeading: React.FC<AuthHeadingProps> = ({ title, description, }) => {
    return (
        <div className='w-full flex flex-col gap-3.5'>
            <Typography variant='h3'>
                {title}
            </Typography>
            {description && <Typography>{description}</Typography>}
        </div>
    )
}

export default AuthHeading
