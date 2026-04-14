import z from "zod";
import { phoneNumberSchema } from "@/modules/order/schemas/orderSchema";

export const contactSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.email("Enter Valid Email"),
    contact: phoneNumberSchema,
    message: z.string().min(5, "Message must be at least 5 characters")
})



export type ContactPayload = z.infer<typeof contactSchema>