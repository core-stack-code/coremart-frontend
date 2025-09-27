import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import InputComponent from "@/components/ui/form/input-component"
import TextareaComponent from "@/components/ui/form/textarea-component"
import { addAddressSchema, type AddAddressPayLoad } from "@/modules/order/schemas/orderSchema"
import { addAddressDafaultValues } from "@/modules/order/schemas/defaultValues"


interface AddressProps {
    setAddress: Function,
    setEditAddress: Function,
    buttonType?: string
}


const AddAddressForm: React.FC<AddressProps> = ({ setAddress, buttonType, setEditAddress }) => {


    const { handleSubmit, control } = useForm({
        resolver: zodResolver(addAddressSchema),
        defaultValues: addAddressDafaultValues
    })


    const onSubmit = (formData: AddAddressPayLoad) => {
        console.log(formData)
    }


    return (
        <>
            <div className="w-full space-y-2">
                <h1 className="font-bold text-[20px]">
                    {
                        buttonType === 'Edit' ? "Edit Address" : "Shipping Address"
                    }
                </h1>
                <hr className="border-[var(--color-border)]" />

                <form
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-3">
                            <div className="w-full flex justify-between gap-5">
                                <div className="w-full space-y-3">
                                    <Label htmlFor="fullname" >Full Name</Label>
                                    <Controller
                                        name="name"
                                        control={control}
                                        render={({ field, fieldState }) => {
                                            return (
                                                <InputComponent
                                                    {...field}
                                                    type="text"
                                                    error={fieldState.error?.message}
                                                    wrapperClassName="w-full"
                                                />
                                            )
                                        }}
                                    />
                                </div>

                                <div className="w-full space-y-3">
                                    <Label htmlFor="phonenumber">Phone Number</Label>
                                    <Controller
                                        name="contact"
                                        control={control}
                                        render={({ field, fieldState }) => {
                                            return (
                                                <InputComponent
                                                    {...field}
                                                    type="tel"
                                                    maxLength={10}
                                                    minLength={10}
                                                    error={fieldState.error?.message}
                                                    wrapperClassName="w-full"
                                                />
                                            )
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Label htmlFor="address" >Address Line</Label>
                                <Controller
                                    name="address"
                                    control={control}
                                    render={({ field, fieldState }) => {
                                        return (
                                            <TextareaComponent
                                                {...field}
                                                error={fieldState.error?.message}
                                                wrapperClassName="w-full h-30 "
                                            />
                                        )
                                    }}
                                />
                            </div>

                            <div className="flex justify-between gap-5">
                                <div className="w-full space-y-3">
                                    <Label htmlFor="city" >City</Label>
                                    <Controller
                                        name="city"
                                        control={control}
                                        render={({ field, fieldState }) => {
                                            return (
                                                <InputComponent
                                                    {...field}
                                                    type="text"
                                                    error={fieldState.error?.message}
                                                    wrapperClassName="w-full"
                                                />
                                            )
                                        }}
                                    />
                                </div>

                                <div className="w-full space-y-3">
                                    <Label htmlFor="state" >State</Label>
                                    <Controller
                                        name="state"
                                        control={control}
                                        render={({ field, fieldState }) => {
                                            return (
                                                <InputComponent
                                                    {...field}
                                                    type="text"
                                                    error={fieldState.error?.message}
                                                    wrapperClassName="w-full"
                                                />
                                            )
                                        }}
                                    />
                                </div>

                                <div className="w-full space-y-3">
                                    <Label htmlFor="pincode" >Pin Code</Label>
                                    <Controller
                                        name="pincode"
                                        control={control}
                                        render={({ field, fieldState }) => {
                                            return (
                                                <InputComponent
                                                    {...field}
                                                    type="text"
                                                    error={fieldState.error?.message}
                                                    wrapperClassName="w-full"
                                                />
                                            )
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <Label htmlFor="country" >Country</Label>
                                <Controller
                                    name="country"
                                    control={control}
                                    render={({ field, fieldState }) => {
                                        return (
                                            <InputComponent
                                                {...field}
                                                type="text"
                                                error={fieldState.error?.message}
                                                wrapperClassName="w-full"
                                            />
                                        )
                                    }}
                                />
                            </div>
                        </div>

                        <div className="flex justify-between items-center gap-10">

                            <Button type="button" className="bg-white rounded-[var(--border-radius)] text-primary border border-primary font-normal py-1 px-32 hover:bg-primary/5" onClick={() => { setEditAddress(false), setAddress(false) }}>Cancel</Button>

                            <Button type="submit" className="bg-primary rounded-[var(--border-radius)] text-white font-normal py-1 px-32">Save Address</Button>
                            
                        </div>
                        <hr className="border-border" />
                    </div>
                </form>
            </div>

        </>
    )
}

export default AddAddressForm