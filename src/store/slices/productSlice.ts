import type { Filters, Items } from "@/modules/product/apis/types"
import type { CartType, Category } from "@/types/products";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"



interface ProductState {
    category: Category;
    cart: {
        items: CartType[],
        totalPrice: number;
        totalQuantity: number;
    },
    filter: object
}

const initialState: ProductState = {
    category: "casual",
    cart: {
        items: [],
        totalPrice : 0,
        totalQuantity : 0
    },
    filter: {
        size: '',
        brand: '',
        type: '',
        style: '',
        price: '',
    },
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        getFilters: (state, action: PayloadAction<Filters>) => {
            console.log(action.payload)
            state.filter = { ...action.payload }
        },
        getCardDetails: (state, action: PayloadAction<CartType>) => {
            debugger
            console.log(action.payload)
            state.cart.items.push(action.payload)
            state.cart.totalPrice =  action.payload.totalPrice
            state.cart.totalQuantity =  action.payload.totalQuantity
        },
        setCategory: (state, action: PayloadAction<Category>) => {
            state.category = action.payload
        }
    }
})

export const { getCardDetails, getFilters, setCategory } = productSlice.actions
export default productSlice.reducer