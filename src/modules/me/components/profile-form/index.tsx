import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { personalInfoSchema, type personalInfoPayload } from '../../schemas/meSchemas'
import { personalInfoDefaultValues } from '../../schemas/defaultValues'
import { zodResolver } from '@hookform/resolvers/zod'
import Label from '@/components/ui/form/label'
import InputComponent from '@/components/ui/form/input-component'
import { Button } from '@/components/ui/button'

interface profileFormProps {
    setIsEdit: React.Dispatch<React.SetStateAction<boolean>>
}


const ProfileForm: React.FC<profileFormProps> = ({ setIsEdit }) => {

    const { handleSubmit, control } = useForm({
        resolver: zodResolver(personalInfoSchema),
        defaultValues: personalInfoDefaultValues
    })


    const onSubmit = (formData: personalInfoPayload) => {
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-start">

                <div className="w-1/4 flex flex-col justify-start items-center gap-3">
                    <img
                        src="/All-Category/Top-Wear/2NA22S0CA-K11@10.jpg"
                        alt="Profile not found"
                        className="w-32 h-32 object-cover rounded-full"
                    />
                    <p className="font-bold text-2xl">Sachit Dabhi</p>
                    <label
                        htmlFor="profileImage"
                        className="text-xs text-primary cursor-pointer hover:underline"
                    >
                        Change Profile Picture
                    </label>
                    <input
                        id="profileImage"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (file) {
                                console.log(file)
                            }
                        }}
                    />

                </div>


                <div className="w-full flex flex-col justify-start">

                    <div className="flex gap-6">
                        <div className="flex flex-col gap-1">
                            <Label>Full Name</Label>
                            <Controller
                                name="name"
                                control={control}
                                render={({ field, fieldState }) => (
                                    <InputComponent
                                        {...field}
                                        type="text"
                                        error={fieldState.error?.message}
                                    />
                                )}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <Label>Phone Number</Label>
                            <Controller
                                name="contact"
                                control={control}
                                render={({ field, fieldState }) => (
                                    <InputComponent
                                        {...field}
                                        type="tel"
                                        maxLength={10}
                                        minLength={10}
                                        error={fieldState.error?.message}
                                    />
                                )}
                            />
                        </div>
                    </div>


                    <div className="flex flex-col gap-1">
                        <Label>Email Address</Label>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field, fieldState }) => (
                                <InputComponent
                                    {...field}
                                    type="email"
                                    error={fieldState.error?.message}
                                />
                            )}
                        />
                    </div>

                    <div className="flex gap-5">
                        <Button
                            variant="default"
                            size="lg"
                            type="submit"
                            className='text-white'
                        >
                            Save Changes
                        </Button>
                        <Button
                            variant='outline'
                            size='lg'
                            type="button"
                            onClick={() => { setIsEdit(false) }}
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ProfileForm