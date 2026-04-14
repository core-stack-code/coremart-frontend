import api from "@/lib/axios";
import type { getCategoryTreeParams, getProductsByCategoryParams } from "./types";

export const getRootCategories = async () => {
    const res = await api.get("/catalog/categories");
    return res.data;
}


export const getCategoryTree = async ({ slug }: getCategoryTreeParams) => {
    const res = await api.get(`/catalog/categories/${slug}/tree`);
    return res.data;
}


export const getProductsByCategory = async ({ slug }: getProductsByCategoryParams) => {
    const res = await api.get(`/catalog/category/${slug}/products`);
    return res.data;
}