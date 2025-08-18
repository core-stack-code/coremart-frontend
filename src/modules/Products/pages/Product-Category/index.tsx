import CategoryBanner from "../../components/Product-Category/Banner"
import AllWear from "../../components/Product-Category/All Wear"
import ProductCard from "../../components/Product-Category/Product Card"
import category from '@/utils/Category.json'
import SortedbyDropDown from "../../components/Product-List/SortedBy-DropDown"
import Icon from "@/components/ui/icons"
import { cardType } from "../Home"
import { useState } from "react"
import ProductCards from '@/./utils/Main/Product-card.json'

const ProductCategory = () => {

    const [label, setLabel] = useState('T-Shirts')

    return (

        <>
            <div className="w-full flex flex-col justify-center mx-auto items-center gap-4">
                <div className="flex justify-center sm:w-[80%] md:w-[80%]">
                    <CategoryBanner />
                </div>
                <div className="w-full flex flex-col ">
                    <div className="flex flex-col sm:px-5 md:px-15 lg:px-23 xl:px-28 sm:flex-row sm:justify-end lg:justify-end items-center py-2 gap-2">

                        <SortedbyDropDown />

                    </div>
                </div>

            </div>

            <div className="mx-auto w-[90%] md:w-[80%] lg:w-[90%] xl:w-[80%] flex flex-col gap-10">
                <div>
                    <div className="flex gap-5">
                        <Icon name="categoriesIcon" width={24} height={25} />
                        <h2 className="text-lg text-[var(--color-primary)] font-bold mb-4">Categories</h2>
                    </div>
                    <div className="flex flex-row overflow-x-auto gap-15 scrollbar-hidden">
                        {
                            category.map((item, index) => {
                                return (
                                    <AllWear key={index}
                                        item={item}
                                        label={label}
                                        setLabel={setLabel} />
                                )

                            })
                        }
                    </div>
                </div>


                <div className="flex flex-col gap-y-3">
                    <div>
                        <h2 className="text-lg font-semibold ">Others</h2>
                        <p className=" text-md text-[var(--color-muted)]">Check out our other products.</p>
                    </div>
                    <div className=" flex justify-center">
                        <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5">
                            {
                                ProductCards.data.cart.items.slice(0,12).map((productcard, index) => {
                                    return (
                                        <ProductCard key={index} item={productcard} cardType={cardType.recommendedRecent} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-3">
                    <div>
                        <h2 className=" text-lg  font-semibold ">New Arrivals</h2>
                        <p className=" text-md text-[var(--color-muted)]">Check out our new arrivals. </p>
                    </div>
                    <div className=" flex justify-center">
                        {/* <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5"> */}
                        <div className="flex gap-16 gap-y-5 overflow-x-auto scrollbar-hidden scroll-smooth">
                            {
                                ProductCards.data.cart.items.map((productcard, index) => {
                                    return (
                                        <ProductCard key={index} item={productcard} cardType={cardType.recommendedRecent} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>


                <div className="flex flex-col gap-y-3">
                    <div>
                        <h2 className="text-lg  font-semibold ">Trending Products</h2>
                        <p className=" text-md text-[var(--color-muted)]">Check out our Trending Products.</p>
                    </div>
                    <div className="flex justify-center">
                        {/* <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5 overflow-x-auto gap-15 scrollbar-hidden scroll-smooth"> */}
                        <div className="flex gap-15 overflow-x-auto scrollbar-hidden scroll-smooth">
                            {
                                ProductCards.data.cart.items.map((productcard, index) => {
                                    return (
                                        <ProductCard key={index} item={productcard} cardType={cardType.recommendedRecent} />
                                    )
                                })
                            }
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