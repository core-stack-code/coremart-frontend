import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CATEGORY_ENUM_MAP } from '@/constants/product'
import { SpinnerOverlay } from '@/components/ui/spinner'

const CategoryLandingPage: React.FC = () => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate(`/category/${CATEGORY_ENUM_MAP.casualwear}`, { replace: true });
    }, [])

    return (
        <div className='h-screen w-full'>
            <SpinnerOverlay />
        </div>
    )
}

export default CategoryLandingPage
