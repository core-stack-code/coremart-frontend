import { useNavigate } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { resetPasswordSchema, type ResetPasswordPayload } from '../../schemas/authSchema'

import { Button } from '@/components/ui/button'
import InputComponent from '@/components/ui/form/input-component'
import { resetPasswordFormDefaultValues } from '../../schemas/defaultValus'
import { useUserLogin } from '../../apis/mutations'
import type { User } from '@/modules/user/apis/types'
import { useUserState } from '@/store/state'


const ResetPasswordForm = () => {

    const setUserData = useUserState(state => state.setUserData)
    const navigate = useNavigate();

    const { handleSubmit, control } = useForm({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: resetPasswordFormDefaultValues
    })

    const { mutate, isPending } = useUserLogin()

    const onSubmit = (formData: ResetPasswordPayload) => {
        mutate(formData, {
            onSuccess: (data) => {
                console.log('Password Reset Successfully:', data)
                setUserData(data.data?.user as User)
                navigate('/')
            },
            onError: (error) => {
                console.error('Login failed:', error)
            }
        })
    }


    return (
        <>
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
                                />
                            )}
                        />
                    </div>
                    <Button
                        type='submit'
                        className='w-full h-14 bg-primary text-white rounded-2xl'
                        variant='default'
                    >
                        {isPending ? "Loading..." : "Continue"}
                    </Button>
                </div>
            </form>
        </>
    )
}

export default ResetPasswordForm