import type { QueryOptions } from "@/lib/axios/types";
import { useQuery } from "@tanstack/react-query";
import { getFavouriteList, getProductList } from "./api";
import type { productListResponse } from "./types";
import { QUERY_REGISTRY } from "@/constants/api-registery";

export const useGetProductList = (
    param: number,
    options?: QueryOptions<productListResponse>
) => {
    return useQuery({
        queryKey: [QUERY_REGISTRY.productList, param],
        queryFn: () => getProductList(param),
        retry: false,
        ...options
    })
}


export const useGetFavouriteList = (
    options?: QueryOptions<productListResponse>
) => {
    return useQuery({
        queryKey: [QUERY_REGISTRY.favouriteList],
        queryFn: () => getFavouriteList(),
        retry: false,
        ...options
    })
}