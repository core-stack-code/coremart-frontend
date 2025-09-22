import { phoneNumberSchema } from "@/modules/order/schemas/orderSchema";
import z from "zod";




export const contactSchema = z.object({
    name: z.string(),
    email: z.string().email("Enter Valid Email"),
    contact: phoneNumberSchema,
    message:z.string().min(5,"Message must be at least 5 characters")
})


export type ContactPayload = z.infer<typeof contactSchema>