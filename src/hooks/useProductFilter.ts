import { useProductState, type FilterState } from "@/store/state/productState";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "./debounce";
import { useEffect, useRef } from "react";
import { usePaginationState } from "@/store/state";

const DEFAULT_FILTERS: FilterState = {
    size: 'L',
    brand: "",
    type: "",
    style: "",
    minPrice: 0,
    maxPrice: 30000,
};


const DEFAULT_PAGINATION_SORTBY = {
    page: 1,
    sortBy: ""
}

export const useProductFilter = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const filters = useProductState((state) => state.filter);
    const setFilters = useProductState((state) => state.setFilter);
    const resetFilters = useProductState((state) => state.resetFilter);

    const currentPage = usePaginationState((state) => state.currentPage);
    const setCurrentPage = usePaginationState((state) => state.setCurrentPage);
    const sortBy = usePaginationState((state) => state.sortBy);
    const setSortBy = usePaginationState((state) => state.setSortBy);
    const resetPagination = usePaginationState((state) => state.resetPagination);


    const debouncedFilters = useDebounce(filters, 500);
    const debouncedPage = useDebounce(currentPage, 500);
    const isMounted = useRef(false);

    useEffect(() => {
        const params = new URLSearchParams(searchParams);

        if (params.toString()) {
            const urlFilter: FilterState = {
                size: (params.get('size') as FilterState['size']) || DEFAULT_FILTERS.size,
                brand: params.get('brand') || DEFAULT_FILTERS.brand,
                type: params.get('type') || DEFAULT_FILTERS.type,
                style: params.get('style') || DEFAULT_FILTERS.style,
                minPrice: Number(params.get('minPrice')) || DEFAULT_FILTERS.minPrice,
                maxPrice: Number(params.get('maxPrice')) || DEFAULT_FILTERS.maxPrice,
            }

            setFilters(urlFilter);
            setCurrentPage(Number(params.get('page')) || DEFAULT_PAGINATION_SORTBY.page);
            setSortBy(params.get('sortBy') || DEFAULT_PAGINATION_SORTBY.sortBy);
        } else {
            resetFilters();
            resetPagination();
            setCurrentPage(1);
        }

        return () => {
            setSearchParams({});
            resetFilters();
            resetPagination();
        }
    }, []);

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true
            return;
        }
        const params = new URLSearchParams();

        (Object.keys(debouncedFilters) as Array<keyof FilterState>).forEach((key) => {
            const value = debouncedFilters[key];
            const defaultValue = DEFAULT_FILTERS[key];

            if (value !== defaultValue) {
                params.set(key, String(value))
            } else {
                params.delete(key);
            }
        });

        if (debouncedPage) {
            params.set("page", String(debouncedPage));
        } else {
            params.delete("page");
        }

        // Sync sortBy
        if (sortBy !== DEFAULT_PAGINATION_SORTBY.sortBy) {
            params.set("sortBy", String(sortBy));
        } else {
            params.delete("sortBy");
        }


        setSearchParams(params);
    }, [debouncedFilters, debouncedPage, sortBy]);

    const updateFilter = (key: keyof FilterState, value: string | number) => {
        setFilters({ ...filters, [key]: filters[key] === value ? DEFAULT_FILTERS[key] : value })
    }

    const updatePriceRange = (min: number, max: number) => {
        setFilters({ ...filters, minPrice: min, maxPrice: max })
    }

    const updatePagination = (page: number) => {
        setCurrentPage(page);
    }

    const updateSort = (value: string) => {
        setSortBy(value);
    }

    return {
        filters,
        updateFilter,
        updatePriceRange,
        updatePagination,
        updateSort,
        sortBy
    };
}