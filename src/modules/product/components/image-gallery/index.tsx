import React from 'react'

interface imageGalleryProps {
    images: string[]
}

const ImageGallery: React.FC<imageGalleryProps> = ({ images }) => {
    return (
        <div className='w-full flex flex-col gap-10'>
            <div className='w-full h-140'>
                <img
                    src={images[0]}
                    alt='not found'
                    className='w-full h-full object-cover'
                />
            </div>
            <div className='w-full flex gap-4'>
                {images.map((image, index) => (
                    <div className='w-full h-45 px-6'>
                        <img
                            key={index}
                            src={image}
                            alt='not found'
                            className='w-full h-full object-cover' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageGallery