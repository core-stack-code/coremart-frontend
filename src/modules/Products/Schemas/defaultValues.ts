import type { AddAddressPayLoad, ContactPayload, ProductReviewPayLoad } from "./productSchema";

export const contactFormDefaultValues: ContactPayload = {
    name: "",
    email: "",
    contact: "",
    message: ""
}


export const productReviewDefaultValues: ProductReviewPayLoad = {
    reviewTitle: "",
    productReview: ""
}

export const addAddressDafaultValues: AddAddressPayLoad = {
    name: "",
    contact: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: ""
}