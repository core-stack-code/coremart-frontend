interface Product {
    _id: string,
    name: string,
    slug: string,
    category: string,
    price: number,
    image: string
}


export interface Items {
    product: Product,
    quantity: number,
    itemTotal: number
}


export interface Filters {
    size?: string[],
    brand?: string[],
    type?: string[],
    style?: string[],
    price?: [number, number],
}

export interface brandItem {
    name: string,
    slug: string
}

export interface thumbnailItem {
    url: string,
    altText: string
}

export interface productItem {
    id: string,
    name: string,
    slug: string,
    brand: brandItem,
    description: string,
    thumbnail: thumbnailItem,
    price: number
    rating: number
    totalReviews: number,
    isFavorite: boolean,
}

export interface pagination {
    isNextPage: boolean,
    isPrevPage: boolean,
    limit: number,
    page: number,
    totalItems: number,
    totalPages: number
}

export type productListResponse = {
    products: productItem[]
    pagination: pagination
}
