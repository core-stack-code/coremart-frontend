import Banner from "@/modules/product/components/banner"
import CategoryQueue from "@/modules/product/components/category-queue"
import TopWearProrductCategory from '@/modules/category/components/product-category-grid'
import TrendingProductCategory from '@/modules/category/components/trending-products'
import NewArrivalsProducts from '@/modules/product/components/new-arrivals-products'
import SortedbySelectMenu from "../../components/product-list/SortedBy-DropDown"

const ProductCategory = () => {
    return (
        <>
            <div className="w-full flex flex-col justify-center mx-auto items-center gap-4 ">
                <Banner />
                <div className="w-full flex flex-col py-5">
                    <SortedbySelectMenu />
                </div>
            </div>

            <div className="mx-auto w-full md:w-full lg:w-full xl:w-full flex flex-col gap-16">

                <CategoryQueue />

                <TopWearProrductCategory />

                <NewArrivalsProducts />

                <TrendingProductCategory />

            </div>
        </>
    )
}

export default ProductCategory