import React from 'react'

const Banner: React.FC = () => {
    return (
        <div className='w-full h-full flex items-center justify-center rounded-3xl my-4'>
            <img
                src="/banner.png"
                alt="Clothing Store"
                className="w-full h-full overflow-hidden object-cover rounded-3xl"
            />
        </div>
    )
}

export default Banner
