import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper/modules";
import type { ProductType } from '@/types/products';    
import Icon from '@/components/ui/icons';

interface ProductSliderProps {
    title: string;
    products: ProductType[];
    children: (product: ProductType) => React.ReactNode;
}

const ProductSlider: React.FC<ProductSliderProps> = ({ title, products, children }) => {
    return (
        <div className='w-full flex flex-col gap-3'>
            <div className='flex items-center justify-between py-3'>
                <h2 className='text-lg font-semibold'>{title}</h2>
                <div className='flex items-center gap-1 text-foreground hover:text-primary cursor-pointer'>
                    <button className='text-xs'>See All</button>
                    <Icon name="rightCircleArrow" width={18} height={18} />
                </div>
            </div>
            <div className="w-full flex overflow-x-auto scrollbar-hidden scroll-smooth">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={70}
                    slidesPerGroup={4}
                    freeMode={false}
                    grabCursor={true}
                    loop={true}
                    modules={[FreeMode, Scrollbar]}
                    className="mySwipe"
                >
                    {products.map((product) => (
                        <SwiperSlide key={product._id}>
                            {children(product)}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default ProductSlider
