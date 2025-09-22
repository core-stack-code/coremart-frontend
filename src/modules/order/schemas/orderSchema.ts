import z from "zod"



export const phoneNumberSchema = z.string()
    .regex(/^[0-9]{10}$/,"Contact number must be 10 digits")


export const addAddressSchema = z.object({
    name: z.string().min(1,"Enter Valid Name"),
    contact: phoneNumberSchema,
    address:z.string().min(1,"Enter Valid Address"),
    city:z.string().min(1,"Enter Valid City"),
    state:z.string().min(1,"Enter Valid State"),
    pincode:z.string().min(6,"Pincode must be 6 Numbers"),
    country:z.string().min(1,"Enter Valid country")
})


export type AddAddressPayLoad = z.infer<typeof addAddressSchema>