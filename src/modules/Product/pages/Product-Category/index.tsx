import CategoryBanner from "../../components/Product-Category/Banner"
import AllWear from "../../components/Product-Category/All Wear"
import ProductCard from "../../components/Product-Category/Product Card"
import category from '../../apis/Product-Category/Category.json'
import cardjsondata from '../../apis/Product-Category/card.json'
import newarrivals from '../../apis/Product-Category/New-Arrivals.json'
import SortedbyDropDown from "../../components/Product-List/SortedBy-DropDown"

const ProductCategory = () => {
    return (

        <>
            <div className="w-full flex flex-col justify-center mx-auto items-center gap-4">
                <div className="flex justify-center sm:w-[80%] md:w-[80%]">
                    <CategoryBanner />
                </div>
                <div className=" w-full sm:w-[80%] md:w-[80%] flex justify-end">
                    <div className="flex flex-row   sm:flex-row sm:justify-center justify-center items-center py-2 gap-2">
                        <p className="text-[#7B7B7B] text-center sm:text-left">
                            Showing 1–15 of 1000 Products
                        </p>
                        <SortedbyDropDown />
                    </div>
                </div>
            </div>

            <div className="mx-auto md:w-[80%] lg:w-[90%] xl:w-[80%] flex flex-col gap-10">
                <div>
                    <h2 className="text-lg text-[#9333EA] font-bold mb-4">Categories</h2>
                    <div className="flex flex-row overflow-x-auto  gap-15 scrollbar-hidden">
                        {/* {["T-Shirts", "Casual Shirts", "Formal Shirts", "Jackets", "Rain Jackets", "Suits", "Suits", "Suits", "Suits", "Suits", "Suits", "Suits", "Suits", "Suits", "Suits", "Suits", "Suits", "Suits", "Suits", "Suits", "Suits", "Suits"].map(
                            (topwearitem) => (

                                <AllWear item={topwearitem} />
                                
                                )
                                )} */}
                        {
                            category.map((topwearitem, index ) => {
                                return (
                                    <>
                                        <AllWear key={index} item={topwearitem} />
                                    </>
                                )

                            })
                        }
                    </div>
                </div>


                <div className="flex flex-col gap-y-3">
                    <div>
                        <h2 className="text-lg  font-semibold ">Others</h2>
                        <p className=" text-md text-[#6B7280]">Check out our other products.</p>
                    </div>
                    <div className=" flex justify-center">
                        <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5">

                            {
                                cardjsondata.map((productcard, index) => {
                                    return (
                                        <ProductCard key={index} item={productcard} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-3">
                    <div>
                        <h2 className=" text-lg  font-semibold ">New Arrivals</h2>
                        <p className=" text-md text-[#6B7280]">Check out our new arrivals. </p>
                    </div>
                    <div className=" flex justify-center">
                        <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5">

                            {
                                newarrivals.map((productcard, index) => {
                                    return (
                                        <ProductCard key={index} item={productcard} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-3">
                    <div>
                        <h2 className="text-lg  font-semibold ">Trending Products</h2>
                        <p className=" text-md text-[#6B7280]">Check out our Trending Products.</p>
                    </div>
                    <div className="flex justify-center">
                        <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5">

                            {
                                newarrivals.map((productcard, index) => {
                                    return (
                                        <ProductCard key={index} item={productcard} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductCategory