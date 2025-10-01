import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper/modules";
import type { ProductType } from '@/types/products';
import CardWrapper from '@/components/ui/card-wrapper';

interface ProductSliderProps {
    title: string;
    products: ProductType[];
    children: (product: ProductType) => React.ReactNode;
}


const ProductSlider: React.FC<ProductSliderProps> = ({ title, products, children }) => {
    return (
        <CardWrapper title={title} redirectLink="/products">
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
        </CardWrapper>
    )
}

export default ProductSlider
