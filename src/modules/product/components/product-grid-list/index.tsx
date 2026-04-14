import React, { useEffect } from 'react'
import type { ViewType } from '../../pages/ProductList'

import ProductGrid from '../product-grid'
import ProductCard from '../product-card'
import ProductListCard from '../product-list-card'
import { useProductFilter } from '@/hooks/useProductFilter'
import { useGetProductList } from '../../apis/queries'
import { usePagination } from '@/hooks/usePagination'
import PagginationComponent from '@/components/ui/pagination-component'
import type { pagination } from '../../apis/types'
import ProductSkeleton from '@/components/product-skeleton'
import { usePaginationState } from '@/store/state'
import { useDebounce } from '@/hooks/debounce'
import { useSearchParams } from 'react-router-dom'

interface ProductGridListProps {
    view: ViewType
}


const ProductGridList: React.FC<ProductGridListProps> = ({ view }) => {

    const { handlePageChange } = usePagination();

    const { updatePagination } = useProductFilter();

    const [searchParam, setSearchParams] = useSearchParams();

    const currentPage = usePaginationState(state => state.currentPage);
    const setCurrentPage = usePaginationState(state => state.setCurrentPage);


    useEffect(() => {
        const params = new URLSearchParams(searchParam);
        const page = params.get('page');
        if (page) {
            setCurrentPage(Number(page));
        }

        params.set('page', currentPage.toString());
        setSearchParams(params);
    }, [])

    const debouncedPage = useDebounce(currentPage, 500);

    const { data, isLoading } = useGetProductList(currentPage);

    const products = data?.data?.products;
    const pagination = data?.data?.pagination;


    // const data = PRODUCT_LIST
    // here we call api for product list
    // have to get filtes somehow, if from URL prams or redux state

    // const totalPage = Math.ceil(data.length / itemPerPage); // assuming 12 items per page
    // setTotalPages(totalPage);

    // const startIndex = (currentPage - 1) * itemPerPage;
    // const endIndex = startIndex + itemPerPage;
    // const paginatedData = data.slice(startIndex, endIndex);


    // useEffect(() => {
    //     const params = new URLSearchParams(searchParam);
    //     const page = params.get('page');
    //     if (page) setCurrentPage(Number(page));
    //     params.set('page', currentPage.toString());
    //     setSearchParams(params);
    // }, []);

    useEffect(() => {
        const params = new URLSearchParams(searchParam);
        params.set("page", String(debouncedPage));
        setSearchParams(params);
    }, [debouncedPage]);

    const { setPage, setLimit, setTotalItems } = usePaginationState();

    useEffect(() => {
        if (pagination) {
            setPage(pagination.page);
            setLimit(pagination.limit);
            setTotalItems(pagination.totalItems)
        }
    }, [pagination])


    if (isLoading) {
        return (view === 'grid' ?
            <ProductSkeleton row={4} colunms={4} /> :
            <ProductSkeleton row={4} />)
    }



    return (
        <div className='w-full flex flex-col gap-15'>
            <div>
                {view === 'grid' ? (
                    <ProductGrid columns={3} className="gap-8">
                        {products?.map((product) => (
                            <ProductCard key={product.id} product={product} cardType="normal" isRedirect />
                        ))}
                    </ProductGrid>
                ) : (
                    <div className="w-full flex flex-col mx-auto gap-6">
                        {products?.map((product) => (
                            <ProductListCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>


            <PagginationComponent
                pagination={data?.data?.pagination as pagination}
                onPageChange={handlePageChange}
                updatePagination={updatePagination}
            // setCurrentPage={(page) => setCurrentPage(page)}
            // currentPage={currentPage}
            // totalPages={totalPages || 1}
            // setCurrentPage={(page) => { updatePagination(page), setCurrentPage(page) }}
            />
        </div>
    )
}

export default ProductGridList
