import Banner from "@/modules/product/components/banner"
import CategoryQueue from "@/modules/product/components/category-queue"
import NewArrivalsProducts from '@/modules/product/components/new-arrivals-products'
import SortedbySelectMenu from "@/modules/Products-1/components/product-list/SortedBy-DropDown"
import TrendingProducts from "@/modules/product/components/trending-products"
import ProrductCategoryGrid from "@/modules/category/components/product-category-grid"


const ProductCategory = () => {
    return (
        <>
            <div className="w-full flex flex-col justify-center mx-auto items-center gap-4 ">
                <Banner />
                <div className="w-full flex flex-col py-5">
                    <SortedbySelectMenu />
                </div>
            </div>

            <div className="flex flex-col gap-7">

                <CategoryQueue />
                <div>
                    <h2 className='text-lg font-semibold'>Top Wear</h2>
                    <p className=" text-md text-muted">Check out our top wear.</p>
                </div>
                <ProrductCategoryGrid />

                <NewArrivalsProducts />

                <TrendingProducts />

            </div>
        </>
    )
}

export default ProductCategory