import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import InputComponent from "@/components/ui/form/input-component"
import TextareaComponent from "@/components/ui/form/textarea-component"
import { addAddressSchema, type AddAddressPayLoad } from "@/modules/order/schemas/orderSchema"
import { addAddressDafaultValues } from "@/modules/order/schemas/defaultValues"
import type { addressMode } from "../address-component"

interface addressFormProps {
    setMode: React.Dispatch<React.SetStateAction<addressMode>>
}

const AddressForm: React.FC<addressFormProps> = ({ setMode }) => {

    const { handleSubmit, control } = useForm({
        resolver: zodResolver(addAddressSchema),
        defaultValues: addAddressDafaultValues
    })

    const onSubmit = (formData: AddAddressPayLoad) => {
        console.log(formData)
    }

    return (
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

                <div className="flex gap-10">

                    <Button
                    type="button"
                        variant='outline'
                        size='lg'
                        onClick={() => {setMode('view') }}
                    >Cancel</Button>

                    <Button
                        variant='default'
                        size='lg'
                        type='submit'
                        className="text-white"
                    >Save Address</Button>

                </div>
                <hr className="border-border" />
            </div>
        </form>
    )
}

export default AddressForm