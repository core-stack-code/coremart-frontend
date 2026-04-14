import { useNavigate } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { resetPasswordSchema, type ResetPasswordPayload } from '../../schemas/authSchema'

import { Button } from '@/components/ui/button'
import InputComponent from '@/components/ui/form/input-component'
import { resetPasswordFormDefaultValues } from '../../schemas/defaultValues'
import { useUserResetPassword } from '../../apis/mutations'
import { useToast } from '@/hooks/useToast'
import { flatZodError } from '@/lib/zod/flatZodError'
import React, { useEffect } from 'react'


const ResetPasswordForm: React.FC = () => {

    const navigate = useNavigate();
    const toast = useToast();

    const { handleSubmit, control, getValues, formState: { errors } } = useForm({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: resetPasswordFormDefaultValues
    })

    const { mutate, isPending } = useUserResetPassword()

    const onSubmit = (formData: ResetPasswordPayload) => {
        mutate(formData, {
            onSuccess: (data) => {
                toast.success(data.message)
                navigate('/me')
            },
            onError: (error) => {
                toast.error(error.message)
            }
        })
    }

    useEffect(() => {
        if (Object.entries(errors).length > 0) {
            const errMsg = flatZodError(resetPasswordSchema, getValues())
            if (errMsg) toast.error(errMsg)
        }
    }, [errors])

    return (
        <form
            className='w-full h-full'
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className=' w-full flex flex-col gap-6'>
                <div className='w-full flex flex-col gap-3'>
                    <Controller
                        name='password'
                        control={control}
                        disabled={isPending}
                        render={({ field, fieldState }) => (
                            <InputComponent
                                {...field}
                                type="password"
                                label='Current Password'
                                placeholder="********"
                                error={fieldState.error?.message}
                                togglePassword
                                wrapperClassName="w-full"
                            />
                        )}
                    />
                    <Controller
                        name='password'
                        control={control}
                        disabled={isPending}
                        render={({ field, fieldState }) => (
                            <InputComponent
                                {...field}
                                type="password"
                                label='Password'
                                placeholder="********"
                                error={fieldState.error?.message}
                                togglePassword
                                wrapperClassName="w-full"
                            />
                        )}
                    />
                    <Controller
                        name='password'
                        control={control}
                        disabled={isPending}
                        render={({ field, fieldState }) => (
                            <InputComponent
                                {...field}
                                type="password"
                                label="Confirm Password"
                                placeholder="********"
                                error={fieldState.error?.message}
                                togglePassword
                                wrapperClassName="w-full"
                                disabled={isPending}
                            />
                        )}
                    />
                </div>
                <Button
                    type='submit'
                    className='w-full h-14 bg-primary text-white rounded-2xl'
                    variant='default'
                    disabled={isPending}
                >
                    {isPending ? "Loading..." : "Continue"}
                </Button>
            </div>
        </form>
    )
}

export default ResetPasswordForm