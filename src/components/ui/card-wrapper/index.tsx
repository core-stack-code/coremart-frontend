import React from 'react'
import { useNavigate } from 'react-router-dom';

import Icon from '../icons';
import { Button } from '../button';
import { Typography } from '../typography';

interface CardWrapperProps {
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
    redirectLink?: string;
}


const CardWrapper: React.FC<CardWrapperProps> = ({ children, title, subtitle, redirectLink }) => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        if (redirectLink) {
            navigate(redirectLink);
        }
    }

    return (
        <div className='w-full flex flex-col gap-3'>
            <div className='flex items-center justify-between py-3'>
                <div>
                    <Typography variant='large'>{title}</Typography>
                    <Typography variant='small'>{subtitle}</Typography>
                </div>
                {redirectLink && (
                    <div className='flex items-center gap-1 text-foreground hover:text-primary cursor-pointer'>
                        <Button variant="none" onClick={handleRedirect} className='text-xs'>
                            See All
                            <Icon name="CircleArrowRight" width={18} height={18} />
                        </Button>
                    </div>
                )}
            </div>
            {children}
        </div>
    )
}

export default CardWrapper
