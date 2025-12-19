import type { Filters } from "@/modules/product/apis/types"
import type { CartItemType, Category } from "@/types/products";
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
            let totalPrice = 0;
            let totalQty = 0;

            const existingItem = state.cart.items.find(
                (item) => item.product._id === newItem.product._id
            );

            if (existingItem) {

                existingItem.quantity += newItem.quantity;

                existingItem.itemTotal = existingItem.quantity * existingItem.product.price;

                state.cart.items.forEach((item) => {
                    totalPrice += item.itemTotal;
                    totalQty += item.quantity;
                });

                state.cart.totalPrice = totalPrice;
                state.cart.totalQuantity = totalQty;

            } else {

                state.cart.items.push(newItem);

                state.cart.items.forEach((item) => {
                    totalPrice += item.itemTotal;
                    totalQty += item.quantity;
                });

                state.cart.totalPrice = totalPrice;
                state.cart.totalQuantity = totalQty;

            }

            console.log("Cart State:", current(state.cart));
        },
        increaseQuantity: (state, action: PayloadAction<string>) => {
            const productId = action.payload;
            const item = state.cart.items.find(item => item.product._id === productId);
            if (item) {
                item.quantity += 1;
                item.itemTotal = item.quantity * item.product.price;
                state.cart.totalQuantity += 1;
                state.cart.totalPrice += item.product.price;
            }
        },
        decreaseQuantity: (state, action: PayloadAction<string>) => {
            const productId = action.payload;
            const item = state.cart.items.find(item => item.product._id === productId);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                item.itemTotal = item.quantity * item.product.price;
                state.cart.totalQuantity -= 1;
                state.cart.totalPrice -= item.product.price;
            }
        },
        removeProduct: (state, action: PayloadAction<string>) => {
            const productId = action.payload;
            const itemIndex = state.cart.items.findIndex(item => item.product._id === productId);
            if (itemIndex !== -1) {
                const item = state.cart.items[itemIndex];
                state.cart.totalQuantity -= item.quantity;
                state.cart.totalPrice -= item.itemTotal;
                state.cart.items.splice(itemIndex, 1);
            }
        },
        setCategory: (state, action: PayloadAction<Category>) => {
            state.category = action.payload
        }
    }
})

export const { getCardDetails, increaseQuantity, decreaseQuantity, removeProduct, getFilters, setCategory } = productSlice.actions
export default productSlice.reducer