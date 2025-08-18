import Icon from "@/components/ui/icons";
import FilterLayout from "@/layouts/FilterLayout";
import Paggination from "../../components/Product-List/Paggination";
import ProductCardGrid from "../../components/Product-Category/Product Card";
import ProductCardList from "../../components/Product-Category/Product List";
import { useState } from "react";
import SortedbyDropDown from "../../components/Product-List/SortedBy-DropDown";
import { cardType } from "../Home";
import ProductCard from '@/./utils/Main/Product-card.json'

const ProductList = () => {

    const [gridView, setGridView] = useState(true)
    const [listView, setListView] = useState(false)


    return (

        <>
            <div className=" w-full flex flex-col">
                <div className="flex flex-col sm:px-5 md:px-0 lg:px-0 xl:px-25 sm:flex-row sm:justify-end justify-center items-center py-2 gap-2">

                    <SortedbyDropDown />


                    <div className="flex items-center gap-2">
                        <button
                            className="hover:cursor-pointer"
                            onClick={() => { setGridView(true); setListView(false) }}
                        >
                            <Icon
                                name="productgridIcon"
                                width={27}
                                height={28}
                                stroke={gridView ? "var(--color-primary)" : "#000000"}
                            />
                        </button>
                        <button
                            className="hover:cursor-pointer"
                            onClick={() => { setGridView(false); setListView(true) }}
                        >
                            <Icon
                                name="productlistIcon"
                                width={28}
                                height={28}
                                stroke={listView ? "var(--color-primary)" : "#000000"}
                            />
                        </button>
                    </div>
                </div>

                <div className="w-full lg:w-auto xl:w-full  flex sm:px-5 md:px-8 lg:px-8 xl:px-25 h-screen overflow-hidden">

                    <FilterLayout />

                    <div className="flex-grow overflow-y-auto overflow-hidden scrollbar-hide scroll-smooth">

                        {
                            gridView && (
                                <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 
                               min-[1400px]:grid-cols-3 xl:grid-cols-3 place-items-center  mx-auto gap-7 py-2">
                                    {
                                        ProductCard.data.cart.items.map((productcard, index) => {
                                            return (
                                                <ProductCardGrid key={index} item={productcard} cardType={cardType.recommendedRecent} />
                                            )
                                        })
                                    }
                                </div>
                            )
                        }



                        {
                            listView && (
                                <div className=" w-full flex flex-col mx-auto gap-7 overflow-y-auto overflow-hidden scrollbar-hide scroll-smooth">
                                    {
                                        ProductCard.data.cart.items.map((productcard, index) => {
                                            return (
                                                <ProductCardList key={index} item={productcard} />

                                            )
                                        })
                                    }
                                </div>
                            )
                        }

                        <Paggination />

                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductList