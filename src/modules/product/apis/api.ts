import api from "@/lib/axios"
import type { productListResponse } from "./types"
import type { ApiResponse } from "@/lib/axios/types"

export const getProductList = async (param: number): Promise<ApiResponse<productListResponse>> => {
    const res = await api.get(`/catalog/products?page=${param}`)
    return res.data
}

export const getFavouriteList = async (): Promise<ApiResponse<productListResponse>> => {
    const res = await api.get('/favorite')
    return res.data
}

export const addFavourite = async (productId: string): Promise<ApiResponse<null>> => {
    const res = await api.post(`/favorite/${productId}`)
    return res.data
}

export const removeFavourite = async (productId: string): Promise<ApiResponse<null>> => {
    const res = await api.delete(`/favorite/${productId}`)
    return res.data
}