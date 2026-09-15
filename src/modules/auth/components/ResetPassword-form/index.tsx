import { useNavigate } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { resetPasswordSchema, type ResetPasswordPayload } from '../../schemas/authSchema'

import { Button } from '@/components/ui/button'
import InputComponent from '@/components/ui/form/input-component'
import Icon from '@/components/ui/icons'
import { resetPasswordFormDefaultValues } from '../../schemas/defaultValus'
import { useUserLogin } from '../../apis/mutations'
import { useAppDispatch } from '@/hooks/redux'
import { setUserData } from '@/store/slices/userSlice'
import type { User } from '@/modules/user/apis/types'


const ResetPasswordForm = () => {

    const dispatch = useAppDispatch()
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
                dispatch(setUserData(data.data?.user as User))
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
                    <div className='w-full flex flex-col gap-2'>
                        <Controller
                            name='password'
                            control={control}
                            disabled={isPending}
                            render={({ field, fieldState }) => (
                                <InputComponent
                                    {...field}
                                    type="password"
                                    placeholder="Enter your password"
                                    error={fieldState.error?.message}
                                    togglePassword
                                    leftIcon={<Icon name="lockIcon" width={16} height={16} />}
                                    wrapperClassName="w-full"
                                />
                            )}
                        />
                        <Controller
                            name='confirmPassword'
                            control={control}
                            disabled={isPending}
                            render={({ field, fieldState }) => (
                                <InputComponent
                                    {...field}
                                    type="password"
                                    placeholder="Confirm password"
                                    error={fieldState.error?.message}
                                    togglePassword
                                    leftIcon={<Icon name="lockIcon" width={16} height={16} />}
                                    wrapperClassName="w-full"
                                />
                            )}
                        />
                    </div>
                    <Button
                        type='submit'
                        className='w-full h-11 bg-[var(--color-primary)] text-[var(--color-background)] rounded-2xl'
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