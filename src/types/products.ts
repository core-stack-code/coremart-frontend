import type { categoryEnum } from "@/constants/product";

export type ProductType = {
    _id: string,
    name: string,
    slug: string,
    brand: string,
    price: number,
    category: string,
    dressType: string,
    images: string[],
    createdAt: string,
    isFav: boolean,
    sold: number
    viewCount: number,
    rating: number
}

export type Category = (typeof categoryEnum)[number];