import { cn } from '@/lib/utils';
import { useProductState } from '@/store/state';
import React from 'react'

interface imageGalleryProps {
    images: string[]
}

const ImageGallery: React.FC<imageGalleryProps> = ({ images }) => {

    const setImage = useProductState(state => state.setImage);
    const selectImage = useProductState((state) => state.image)

    return (
        <div className='w-full flex flex-col gap-6'>
            <div className='w-full h-140 rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow'>
                <img
                    src={selectImage}
                    alt='not found'
                    className='w-full h-full object-cover'
                />
            </div>
            <div className='w-full flex gap-4 justify-center'>
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setImage(image)}
                        className={cn(
                            'w-28 h-28 rounded-2xl overflow-hidden border-2 transition-all duration-200',
                            selectImage === image
                                ? 'border-primary shadow-md scale-105'
                                : 'border-border hover:border-primary/50 hover:shadow-sm hover:scale-102'
                        )}
                    >
                        <img
                            src={image}
                            alt='not found'
                            className='w-full h-full object-cover' />
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ImageGallery