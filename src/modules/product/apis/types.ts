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