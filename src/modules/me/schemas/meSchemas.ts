
import { phoneNumberSchema } from "@/modules/order/schemas/orderSchema";
import z from "zod";


export const personalInfoSchema = z.object({
    name: z.string().min(1, "Enter Valid Name"),
    contact: phoneNumberSchema,
    email: z.string().email("Enter Valid Email")
})


export const promoCodeSchema = z.object({
    promoCode: z.string().min(1, "Enter Promo Code")
})


export type personalInfoPayload = z.infer<typeof personalInfoSchema>
export type promoCodePayload = z.infer<typeof promoCodeSchema>