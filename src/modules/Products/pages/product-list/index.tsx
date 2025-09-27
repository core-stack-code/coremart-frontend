import Icon from "@/components/ui/icons";
import FilterLayout from "@/layouts/FilterLayout";
import { useState } from "react";
import { cardType } from "../home";
import ProductCard from '@/./utils/Main/Product-card.json'
import SortedbyDropDown from "../../components/product-list/SortedBy-DropDown";
import ProductGridCard from "../../components/product-category/Product Card";
import ProductListCard from "../../components/product-category/Product List";
import Paggination from "../../components/product-list/Paggination";

const ProductList = () => {

    const [gridView, setGridView] = useState(true)
    const [listView, setListView] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 12;
    

    // Calculate start and end index
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems =  ProductCard.data.cart.items.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil( ProductCard.data.cart.items.length / itemsPerPage);


    return (

        <>
            <div className=" w-full flex flex-col">
                <div className="flex flex-col sm:px-5 md:px-0 lg:px-0 xl:px-0 sm:flex-row sm:justify-end justify-center items-center py-2 gap-2">

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

                {/* <div className="w-full lg:w-auto xl:w-full  flex sm:px-5 md:px-8 lg:px-8 xl:px-25 h-screen overflow-hidden"> */}
                <div className="w-full lg:w-auto xl:w-full flex h-screen overflow-hidden">

                    <FilterLayout />
                    <div className="flex flex-col flex-grow overflow-hidden">

                        <div className="flex-grow overflow-y-auto scrollbar-hidden scroll-smooth">
                            {gridView && (
                                <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 min-[1400px]:grid-cols-3 xl:grid-cols-3 place-items-center mx-auto gap-7">
                                    {currentItems.map((productcard, index) => (
                                        <ProductGridCard
                                            key={index}
                                            item={productcard}
                                            cardType={cardType.recommendedRecent}
                                        />
                                    ))}
                                </div>
                            )}

                            {listView && (
                                <div className="w-full flex flex-col mx-auto gap-7">
                                    {currentItems.map((productcard, index) => (
                                        <ProductListCard key={index} item={productcard} />
                                    ))}
                                </div>
                            )}
                        </div>


                        <div className="sticky bottom-0 bg-white shadow-md">
                            <Paggination
                                totalPages={totalPages}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ProductList