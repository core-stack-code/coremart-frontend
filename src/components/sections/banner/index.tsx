import React from 'react'

// right now this is keeping for the home page banner
// but in future if we want to add dynamic banner for category page we can use this component
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
