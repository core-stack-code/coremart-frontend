import React, { useEffect } from 'react'
import type { ViewType } from '../../pages/ProductList'
import { PRODUCT_LIST } from '@/lib/helper/testData'

import ProductGrid from '../product-grid'
import ProductCard from '../product-card'
import ProductListCard from '../product-list-card'
import Paggination from '@/components/ui/pagination-component'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { setCurrentPage, setTotalPages } from '@/store/slices/paginationSlice'
import { useSearchParams } from 'react-router-dom'
import { useDebounce } from '@/hooks/debounce'
import type { FilterState } from '@/store/slices/productSlice'

interface ProductGridListProps {
    view: ViewType
}


const ProductGridList: React.FC<ProductGridListProps> = ({ view }) => {
    const data = PRODUCT_LIST
    // here we call api for product list
    // have to get filtes somehow, if from URL prams or redux state

    const [searchParam, setSearchParams] = useSearchParams();
    const dispatch = useAppDispatch();


    const { currentPage, itemPerPage, totalPages } = useAppSelector((state) => state.pagination);

    
    useEffect(() => {
        const params = new URLSearchParams(searchParam);
        const page = params.get('page');
        if (page) {
            dispatch(setCurrentPage(Number(page)));
        }

        params.set('page', currentPage.toString());
        setSearchParams(params);
    }, [])
    
    const filters = useAppSelector((state) => state.product.filter);

    const debouncedPage = useDebounce(currentPage, 500);

    const totalPage = Math.ceil(data.length / itemPerPage); // assuming 5 items per page
    dispatch(setTotalPages(totalPage));

    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    const paginatedData = data.slice(startIndex, endIndex);



    useEffect(() => {
        const params = new URLSearchParams(searchParam);

        (Object.keys(filters) as Array<keyof FilterState>).forEach((key) => {
            const value = filters[key];
            if (value !== "" && value !== null) {
                params.set(key, String(value));
            } else {
                params.delete(key);
            }
        });

        params.set("page", String(debouncedPage));

        setSearchParams(params);
    }, [filters, debouncedPage]);

    return (
        <div className='w-full flex flex-col gap-15'>
            <div>
                {view === 'grid' ? (
                    <ProductGrid columns={3} className="gap-8">
                        {paginatedData.map((product) => (
                            <ProductCard key={product._id} product={product} cardType="normal" isRedirect />
                        ))}
                    </ProductGrid>
                ) : (
                    <div className="w-full flex flex-col mx-auto gap-6">
                        {paginatedData.map((product) => (
                            <ProductListCard key={product._id} product={product} />
                        ))}
                    </div>
                )}
            </div>
            <Paggination
                currentPage={currentPage}
                totalPages={totalPages || 1}
                setCurrentPage={(page) => dispatch(setCurrentPage(page))}
            />
        </div>
    )
}

export default ProductGridList
