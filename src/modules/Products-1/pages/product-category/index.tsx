import Icon from "@/components/ui/icons"
import { cardType } from "../home"
import { useState } from "react"
import ProductCards from '@/./utils/Main/Product-card.json'
import CategoryBanner from '../../components/product-category/Banner'
import SortedbyDropDown from '../../components/product-list/SortedBy-DropDown'
import ProductCard from '../../components/product-card'
import { CATEGORY, PRODUCT_CARD_RESPONSE, type CategoryTypes } from '@/lib/helper/testData'
import CategorySlider from '../../components/category-slider'
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Scrollbar } from "swiper/modules"

const ProductCategory = () => {

    const [label, setLabel] = useState<CategoryTypes>("sportswear");

    return (

        <>
            <div className="w-full flex flex-col justify-center mx-auto items-center gap-4 ">
                {/* <div className="flex justify-center sm:w-full md:w-full"> */}
                <CategoryBanner />
                {/* </div> */}
                <div className="w-full flex flex-col py-5">
                    {/* <div className="flex flex-col sm:px-5 md:px-15 lg:px-23 xl:px-28 sm:flex-row sm:justify-end lg:justify-end items-center py-2 gap-2"> */}

                    <SortedbyDropDown />

                    {/* </div> */}
                </div>

            </div>

            <div className="mx-auto w-full md:w-full lg:w-full xl:w-full flex flex-col gap-16">
                <div>
                    <div className="flex gap-5">
                        <Icon name="categoriesIcon" width={24} height={25} />
                        <h2 className="text-lg text-[var(--color-primary)] font-bold mb-4">Categories</h2>
                    </div>
                    <div className="flex flex-row  gap-22">
                        {CATEGORY.map((topwearitem) => {
                            return (
                                <CategorySlider
                                    key={topwearitem.category_name}
                                    item={topwearitem}
                                    label={label}
                                    setLabel={(val) => setLabel(val)}
                                />
                            );
                        })}
                    </div>
                </div>


                <div className="flex flex-col gap-7">
                    <div className="space-y-1">
                        <h2 className="text-lg font-bold ">Others</h2>
                        <p className=" text-md text-[var(--color-muted)]">Check out our other products.</p>
                    </div>
                    <div className=" flex justify-start">
                        <div className="grid gap-26 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5">
                            {
                                ProductCards.data.cart.items.slice(0, 12).map((productcard, index) => {
                                    return (
                                        <ProductCard key={index} item={productcard} cardType={cardType.recommendedRecent} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-7">
                    <div className="space-y-1">
                        <h2 className=" text-lg  font-bold ">New Arrivals</h2>
                        <p className=" text-md text-[var(--color-muted)]">Check out our new arrivals. </p>
                    </div>
                    <div className="w-full flex overflow-x-auto scrollbar-hidden scroll-smooth">
                        <div>

                            <Swiper
                                slidesPerView="auto"
                                spaceBetween={100}
                                freeMode={true}
                                grabCursor={true}
                                modules={[FreeMode, Scrollbar]}
                                className="mySwiper"
                            >
                                {PRODUCT_CARD_RESPONSE.data.cart.items.slice(0, 8).map((item) => (
                                    <SwiperSlide key={item.product._id} className="!w-auto">
                                        <ProductCard item={item} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                        </div>
                    </div>
                </div>


                <div className="flex flex-col gap-7">
                    <div className="space-y-1">
                        <h2 className="text-lg  font-bold ">Trending Products</h2>
                        <p className=" text-md text-[var(--color-muted)]">Check out our Trending Products.</p>
                    </div>
                    <div className="w-full flex overflow-x-auto scrollbar-hidden scroll-smooth">
                        <div>

                            <Swiper
                                slidesPerView="auto"
                                spaceBetween={100}
                                freeMode={true}
                                grabCursor={true}
                                modules={[FreeMode, Scrollbar]}
                                className="mySwiper"
                            >
                                {PRODUCT_CARD_RESPONSE.data.cart.items.slice(0, 8).map((item) => (
                                    <SwiperSlide key={item.product._id} className="!w-auto">
                                        <ProductCard item={item} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                        </div>
                    </div>
                </div>

                {/* <div className='border-[var(--color-border)] border rounded-[var(--border-radius)] p-4'>
                    <h2 className="text-xl text-[var(--color-muted)] flex gap-3 font-bold mb-4"><Icon name='similarproductIcon' width={29} height={29} />Similar Products</h2>
                    <div className="flex justify-center">
                        <div className="flex flex-row overflow-x-auto gap-15 scrollbar-hidden scroll-smooth">

                            {
                                ProductCards.data.cart.items.map((productcard, index) => {
                                    return (
                                        <ProductCard key={index} item={productcard} cardType={cardType.recommendedRecent} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div> */}




            </div>
        </>
    )
}

export default ProductCategory