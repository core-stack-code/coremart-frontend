import { Button } from '@/components/ui/button'
import InputComponent from '@/components/ui/form/input-component'
import { personalInfoDefaultValues } from '@/modules/Users/Schemas/defaultSchema'
import { personalInfoSchema, type personalInfoPayload } from '@/modules/Users/Schemas/userSchemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

const PersonalInfo = () => {

    const [personalInfoEdit, setPersonalInfoEdit] = useState(false)



    const { handleSubmit, control } = useForm({
        resolver : zodResolver(personalInfoSchema),
        defaultValues: personalInfoDefaultValues
    })


    const onSubmit = (formData: personalInfoPayload) => {
        console.log(formData)
    }

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-6 border border-[var(--color-border)] rounded-[var(--border-radius)]">

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <h1 className="font-bold text-xl sm:text-2xl">Personal Information</h1>

                {
                    !personalInfoEdit ?
                        <Button className="bg-[var(--color-primary)] text-[var(--color-background)] hover:bg-[var(--color-primary-hover)]"
                            onClick={() => setPersonalInfoEdit(true)}>
                            Edit
                        </Button> : null
                }
            </div>

            <hr className="mt-6 border border-[var(--color-border)]" />

            {
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col lg:flex-row justify-start gap-6 mt-6">

                        
                        <div className="w-full lg:w-1/4 flex justify-center">
                            <div className="space-y-4 text-center">
                                <img
                                    src="/All-Category/Top-Wear/2NA22S0CA-K11@10.jpg"
                                    alt="Profile"
                                    className="w-32 h-32 object-cover rounded-full mx-auto"
                                />
                                <p className="font-bold text-2xl sm:text-2xl">Sachit Dabhi</p>
                                {personalInfoEdit && (
                                    <NavLink to={"/user/profile"}>
                                        <p className="text-xs sm:text-xs text-[var(--color-primary)]">
                                            Change Profile Picture
                                        </p>
                                    </NavLink>
                                )}
                            </div>
                        </div>

                        
                        <div className="w-full flex flex-col gap-6 justify-center">

                            <div className="flex flex-col sm:flex-row gap-6">
                                <div className="space-y-2">
                                    <p className="text-[var(--color-muted)]">Full Name</p>
                                    {personalInfoEdit ? (
                                        <Controller
                                            name="name"
                                            control={control}
                                            render={({ field, fieldState }) => (
                                                <InputComponent
                                                    {...field}
                                                    type="text"
                                                    // defaultValue="Sachit Dabhi"
                                                    error={fieldState.error?.message}
                                                    wrapperClassName="bg-[var(--color-surface)] border-[var(--color-border)]"
                                                />
                                            )}
                                        />
                                    ) : (
                                        <p>Sachit Dabhi</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <p className="text-[var(--color-muted)]">Phone Number</p>
                                    {personalInfoEdit ? (
                                        <Controller
                                            name="contact"
                                            control={control}
                                            render={({ field, fieldState }) => (
                                                <InputComponent
                                                    {...field}
                                                    type="tel"
                                                    maxLength={10}
                                                    minLength={10}
                                                    // defaultValue="+91 123456789"
                                                    error={fieldState.error?.message}
                                                    wrapperClassName="bg-[var(--color-surface)] border-[var(--color-border)]"
                                                />
                                            )}
                                        />
                                    ) : (
                                        <p>+91 1234567890</p>
                                    )}
                                </div>
                            </div>

                        
                            <div className="space-y-2">
                                <p className="text-[var(--color-muted)]">Email Address</p>
                                {personalInfoEdit ? (
                                    <Controller
                                        name="email"
                                        control={control}
                                        render={({ field, fieldState }) => (
                                            <InputComponent
                                                {...field}
                                                type="email"
                                                // defaultValue="corestack@gmail.com"
                                                error={fieldState.error?.message}
                                                wrapperClassName="w-fit bg-[var(--color-surface)] border-[var(--color-border)]"
                                            />
                                        )}
                                    />
                                ) : (
                                    <p>corestack@gmail.com</p>
                                )}
                            </div>

                    
                            {personalInfoEdit && (
                                <div className="flex gap-5">
                                    <Button
                                        type="submit"
                                        className="bg-[var(--color-primary)] text-[var(--color-background)] hover:bg-[var(--color-primary-hover)]"
                                    >
                                        Save Changes
                                    </Button>
                                    <Button
                                        type="button"
                                        className="bg-[var(--color-background)] text-[var(--color-primary)] border border-[var(--color-primary)] hover:bg-[var(--color-primary-hover)]/5"
                                        onClick={() => setPersonalInfoEdit(false)}
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </form>
            }
        </div>
    )
}

export default PersonalInfo