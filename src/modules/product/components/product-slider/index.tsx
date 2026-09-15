import React from 'react'
import type { ProductType } from '@/types/products';
import CardWrapper from '@/components/ui/card-wrapper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar } from 'swiper/modules';

interface ProductSliderProps {
    title?: string;
    subtitle?: string;
    redirectLink?: string;
    products: ProductType[];
    children: (product: ProductType) => React.ReactNode;
}


const ProductSlider: React.FC<ProductSliderProps> = ({ title, subtitle, products, redirectLink, children }) => {
    return (
        <CardWrapper title={title} subtitle={subtitle} redirectLink={redirectLink}>
            <div className="w-full flex overflow-x-auto scrollbar-hidden scroll-smooth">
                {/* {children(products[0])} */}
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
