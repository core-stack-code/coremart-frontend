import type { Filters } from "@/modules/product/apis/types"
import type { CartItemType, CartType, Category } from "@/types/products";
import { createSlice, current, type PayloadAction } from "@reduxjs/toolkit"



interface ProductState {
    category: Category;
    cart: {
        items: CartItemType[],
        totalPrice: number;
        totalQuantity: number;
    },
    filter: object
}

const initialState: ProductState = {
    category: "casual",
    cart: {
        items: [],
        totalPrice: 0,
        totalQuantity: 0
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
        // getCardDetails: (state, action: PayloadAction<CartType>) => {
        //     debugger
        //     console.log(action.payload)
        //     state.cart.items.push(action.payload)
        //     state.cart.totalPrice =  action.payload.totalPrice
        //     state.cart.totalQuantity =  action.payload.totalQuantity
        // },
        getCardDetails: (state, action: PayloadAction<CartItemType>) => {
            const newItem = action.payload;

            const existingItem = state.cart.items.find(
                (item) => item.product._id === newItem.product._id
            );

            if (existingItem) {

                existingItem.quantity += newItem.quantity;

                existingItem.itemTotal = existingItem.quantity * existingItem.product.price;

                console.log("Item Updated:", current(state.cart));
            } else {

                state.cart.items.push(newItem);

                console.log("Item Added:", current(state.cart));
            }

            let totalPrice = 0;
            let totalQty = 0;

            state.cart.items.forEach((item) => {
                totalPrice += item.itemTotal;
                totalQty += item.quantity;
            });

            state.cart.totalPrice = totalPrice;
            state.cart.totalQuantity = totalQty;

            current(state.cart)
        },

        setCategory: (state, action: PayloadAction<Category>) => {
            state.category = action.payload
        }
    }
})

export const { getCardDetails, getFilters, setCategory } = productSlice.actions
export default productSlice.reducer