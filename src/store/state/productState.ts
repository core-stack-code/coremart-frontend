import type { Size } from "@/modules/product/components/product-filter";
import type { CartItemType } from "@/types/products";
import { create } from "zustand";

export interface FilterState {
    size: Size;
    brand: string;
    type: string;
    style: string;
    minPrice: number;
    maxPrice: number;
}

interface productState {
    cart: {
        items: CartItemType[];
        totalPrice: number;
        totalQuantity: number;
    },
    filter: FilterState,
    image: string;
    setFilter: (action: FilterState) => void;
    resetFilter: () => void;
    getCardDetails: (action: CartItemType) => void;
    increaseQuantity: (productId: string) => void;
    decreaseQuantity: (productId: string) => void;
    removeProduct: (productId: string) => void;
    setImage: (action: string) => void;
}


export const useProductState = create<productState>((set, get) => ({
    cart: {
        items: [],
        totalPrice: 0,
        totalQuantity: 0
    },
    filter: {
        size: 'L',
        brand: "",
        type: "",
        style: "",
        minPrice: 0,
        maxPrice: 30000
    },
    image: "/Details-Image/45.jpg",

    setFilter: (action: FilterState) => set({ filter: action }),
    resetFilter: () => set({}),
    getCardDetails: (action: CartItemType) => {
        const newItem = action;
        let totalPrice = 0;
        let totalQty = 0;

        const { cart } = get();
        const existingItem = cart.items.find(
            (item) => item.product.id === newItem.product.id
        );

        if (existingItem) {

            existingItem.quantity += newItem.quantity;

            existingItem.itemTotal = existingItem.quantity * existingItem.product.price;

            cart.items.forEach((item) => {
                totalPrice += item.itemTotal;
                totalQty += item.quantity;
            });

            set({ cart: { ...cart, totalPrice, totalQuantity: totalQty } });
        } else {
            cart.items.push(newItem);

            cart.items.forEach((item) => {
                totalPrice += item.itemTotal;
                totalQty += item.quantity;
            })

            cart.totalPrice = totalPrice;
            cart.totalQuantity = totalQty;

            set({ cart });
        }
    },
    increaseQuantity: (productId: string) => {
        const { cart } = get();
        const item = cart.items.find(item => item.product.id === productId);
        if (item) {
            item.quantity += 1;
            item.itemTotal = item.quantity * item.product.price;
            cart.totalQuantity += 1;
            cart.totalPrice += item.product.price;
            set({ cart: { ...cart } });
        }
    },
    decreaseQuantity: (productId: string) => {
        const { cart } = get();
        const item = cart.items.find(item => item.product.id === productId);
        if (item && item.quantity > 1) {
            item.quantity -= 1;
            item.itemTotal = item.quantity * item.product.price;
            cart.totalQuantity -= 1;
            cart.totalPrice -= item.product.price;
            set({ cart: { ...cart } });
        }
    },
    removeProduct: (productId: string) => {
        const { cart } = get();
        const itemIndex = cart.items.findIndex(item => item.product.id === productId);
        if (itemIndex !== -1) {
            const item = cart.items[itemIndex];
            cart.totalQuantity -= item.quantity;
            cart.totalPrice -= item.itemTotal;
            cart.items.splice(itemIndex, 1);
            set({ cart: { ...cart } });
        }
    },
    setImage: (action: string) => set({ image: action })
}))

