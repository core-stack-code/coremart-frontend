import Icon from "@/components/ui/icons";
import FilterLayout from "@/layouts/FilterLayout";
import { useState } from "react";
import ProductCard from '@/./utils/Main/Product-card.json'
import ProductListCard from "../../components/product-category/Product List";
import Paggination from "../../components/product-list/Paggination";
import ProductGridList from "@/modules/product/components/product-list/product-grid";
import CategoryPageHeader from "@/modules/product/components/category-header";


const ProductList = () => {

    const [gridView, setGridView] = useState(true)
    const [listView, setListView] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 12;


    // Calculate start and end index
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = ProductCard.data.cart.items.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(ProductCard.data.cart.items.length / itemsPerPage);


    return (

        <>
            <div className=" w-full flex flex-col">
                <div className="flex flex-col sm:px-5 md:px-0 lg:px-0 xl:px-0 sm:flex-row sm:justify-end justify-center items-center py-2 gap-2">

                    {/* <SortedbySelectMenu /> */}
                    <CategoryPageHeader productCount={200} />

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

                <div className="w-full lg:w-auto xl:w-full flex h-screen overflow-hidden">

                    <FilterLayout />
                    <div className="flex flex-col flex-grow overflow-hidden">

                        <div className="flex-grow overflow-y-auto scrollbar-hidden scroll-smooth">
                            {gridView && (
                                <ProductGridList />
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