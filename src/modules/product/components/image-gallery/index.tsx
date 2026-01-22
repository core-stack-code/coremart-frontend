import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { cn } from '@/lib/utils';
import { setImage } from '@/store/slices/productSlice';
import React from 'react'

interface imageGalleryProps {
    images: string[]
}

const ImageGallery: React.FC<imageGalleryProps> = ({ images }) => {

    const dispatch = useAppDispatch();
    const selectImage = useAppSelector((state) => state.product.image)

    return (
        <div className='w-full flex flex-col gap-10'>
            <div className='w-full h-140'>
                <img
                    src={selectImage}
                    alt='not found'
                    className='w-full h-full object-cover'
                />
            </div>
            <div className='w-full flex gap-4'>
                {images.map((image, index) => (
                    <button onClick={() => dispatch(setImage(image))} >
                        <div className='w-full h-45 px-6'>
                            <img
                                key={index}
                                src={image}
                                alt='not found'
                                className={cn('w-full h-full object-cover')} />
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ImageGallery