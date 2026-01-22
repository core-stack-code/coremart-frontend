import type { categoryEnum } from "@/constants/product";
import type { Size } from "@/modules/product/components/product-filter";
import { boolean } from "zod";

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
    rating: number,
    description: string,
}

export type Category = (typeof categoryEnum)[number];


export type CartItemType = {
    product: {
        _id: string,
        name: string,
        slug: string,
        category: string,
        price: number,
        image: string,
        description: string,
    },
    quantity: number
    itemTotal: number
}

export interface CartType {
    items: CartItemType[];
    totalPrice: number;
    totalQuantity: number;
}


export interface ProductDetailsType {
    id: string,
    name: string,
    slug: string,
    description: string,
    brand: string,
    price: number,
    sizes: string[],
    category: string,
    dressType: string,
    images: string[],
    stock: number,
    sold: number,
    rating: number,
    numReviews: number,
    attributes: {
        stretchability: string,
        material: string,
        closure: string,
        sleeveLength: string,
        washCare: string
    },
    isActive: boolean,
    createdAt: Date,
    updatedAt: Date

}