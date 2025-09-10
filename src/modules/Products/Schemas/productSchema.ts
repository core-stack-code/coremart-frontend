import { z } from "zod";


export const phoneNumberSchema = z.string()
    .regex(/^[0-9]{10}$/,"Contact number must be 10 digits")


export const contactSchema = z.object({
    name: z.string(),
    email: z.string().email("Enter Valid Email"),
    contact: phoneNumberSchema,
    message:z.string().min(5,"Message must be at least 5 characters")
})


export const reviewSchema = z.object({
    reviewTitle:z.string().min(1,"Enter Title"),
    productReview : z.string().min(1,"Enter Review")
})


export const addAddressSchema = z.object({
    name: z.string().min(1,"Enter Valid Name"),
    contact: phoneNumberSchema,
    address:z.string().min(1,"Enter Valid Address"),
    city:z.string().min(1,"Enter Valid City"),
    state:z.string().min(1,"Enter Valid State"),
    pincode:z.string().min(6,"Pincode must be 6 Numbers"),
    country:z.string().min(1,"Enter Valid country")
})

export type ContactPayload = z.infer<typeof contactSchema>;
export type ProductReviewPayLoad = z.infer<typeof reviewSchema>
export type AddAddressPayLoad = z.infer<typeof addAddressSchema>