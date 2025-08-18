import type { Filters, Items } from "@/modules/product/apis/types"
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"



interface ProductState {
    cart: {
        items: Items[]
    },
    filter: object
}

const initialState: ProductState = {
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
        }
    }
})

export const { getCardDetails, getFilters } = productSlice.actions
export default productSlice.reducer