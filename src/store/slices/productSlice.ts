import type { Filters, Items } from "@/modules/product/apis/types"
import type { Category } from "@/types/products";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"



interface ProductState {
    category: Category;
    cart: {
        items: Items[]
    },
    filter: object
}

const initialState: ProductState = {
    category: "casual",
    cart: {
        items: [
            {
                product: {
                    _id: '',
                    name: '',
                    slug: '',
                    category: '',
                    price: 0,
                    image: ''
                },
                quantity: 0,
                itemTotal: 0
            },

        ]
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
        getCardDetails: (state, action: PayloadAction<Items>) => {
            console.log(action.payload)
            state.cart.items.push(action.payload)
        },
        setCategory: (state, action: PayloadAction<Category>) => {
            state.category = action.payload
        }
    }
})

export const { getCardDetails, getFilters, setCategory } = productSlice.actions
export default productSlice.reducer