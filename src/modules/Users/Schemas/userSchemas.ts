import { phoneNumberSchema } from "@/modules/Products/Schemas/productSchema";
import z from "zod";


export const personalInfoSchema = z.object({
    name : z.string().min(1,"Enter Valid Name"),
    contact : phoneNumberSchema,
    email : z.string().email("Enter Valid Email")
})


export type personalInfoPayload = z.infer<typeof personalInfoSchema>