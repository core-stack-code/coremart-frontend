import { useQuery } from "@tanstack/react-query";
import { getCategoryTree, getProductsByCategory, getRootCategories } from "./api";
import type { CategoryTreeResponse, getCategoryTreeParams, getProductsByCategoryParams, RootCategoriesResponse } from "./types";
import type { QueryOptions } from "@/lib/axios/types";
import type { productListResponse } from "@/modules/product/apis/types";
import { QUERY_REGISTRY } from "@/constants/api-registery";

export const useGetRootCategories = (
    options?: QueryOptions<RootCategoriesResponse>
) => {
    return useQuery({
        queryKey: [QUERY_REGISTRY.rootCategories],
        queryFn: () => getRootCategories(),
        retry: false,
        ...options,
    });
}

export const useGetCategoryTree = (
    param: getCategoryTreeParams,
    options?: QueryOptions<CategoryTreeResponse>
) => {
    return useQuery({
        queryKey: [QUERY_REGISTRY.categoryTree, param],
        queryFn: () => getCategoryTree(param),
        retry: false,
        ...options,
    });
}

export const useGetProductsByCategory = (
    param: getProductsByCategoryParams,
    options?: QueryOptions<productListResponse>
) => {
    return useQuery({
        queryKey: [QUERY_REGISTRY.productsByCategory, param],
        queryFn: () => getProductsByCategory(param),
        retry: false,
        ...options,
    });
}