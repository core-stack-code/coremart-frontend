import NewArrivalsProductsCategory from '@/modules/category/components/new-arrivals-products'
import SortedbyDropDown from '../../components/product-list/SortedBy-DropDown'
import Banner from "@/modules/product/components/banner"
import CategoryQueue from "@/modules/product/components/category-queue"
import TopWearProrductCategory from '@/modules/category/components/top-wear-products'
import TrendingProductCategory from '@/modules/category/components/trending-products'

const ProductCategory = () => {
    return (
        <>
            <div className="w-full flex flex-col justify-center mx-auto items-center gap-4 ">
                <Banner />
                <div className="w-full flex flex-col py-5">
                    <SortedbyDropDown />
                </div>
            </div>

            <div className="mx-auto w-full md:w-full lg:w-full xl:w-full flex flex-col gap-16">

                <CategoryQueue />

                <TopWearProrductCategory />

                <NewArrivalsProductsCategory />

                <TrendingProductCategory />

            </div>
        </>
    )
}

export default ProductCategory