import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, type LoginPayload } from '../../schemas/authSchema'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import InputComponent from '@/components/ui/form/input-component'
import Icon from '@/components/ui/icons'
import { loginFormDefaultValues } from '../../schemas/defaultValus'
import { useUserLogin } from '../../apis/mutations'
import { useAppDispatch } from '@/hooks/redux'
import { setUserData } from '@/store/slices/userSlice'
import type { User } from '@/modules/user/apis/types'

const LoginForm: React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    const { handleSubmit, control } = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: loginFormDefaultValues
    })

    const { mutate, isPending } = useUserLogin()

    const onSubmit = (formData: LoginPayload) => {
        mutate(formData, {
            onSuccess: (data) => {
                console.log('Login Successfully:', data)
                dispatch(setUserData(data.data?.user as User))
                navigate('/')
            },
            onError: (error) => {
                console.error('Login failed:', error)
            }
        })
    }

    return (
        <form 
            className='w-full h-full'
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className=' w-full flex flex-col gap-6'>
                <div className='w-full flex flex-col gap-2'>
                    <Controller
                        name='email'
                        control={control}
                        disabled={isPending}
                        render={({ field, fieldState }) => (
                            <InputComponent
                                {...field}
                                type="email"
                                placeholder="Enter your email"
                                error={fieldState.error?.message}
                                leftIcon={<Icon name="mailIcon" width={16} height={16} />}
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
                                placeholder="Enter your password"
                                error={fieldState.error?.message}
                                togglePassword
                                leftIcon={<Icon name="lockIcon" width={16} height={16} />}
                                wrapperClassName="w-full"
                            />
                        )}
                    />
                    <div className='w-full h-full flex justify-between items-center'>
                        <div className='flex items-center gap-1.5 h-full'>
                            <Controller
                                name='isRememberMe'
                                control={control}
                                disabled={isPending}
                                render={({ field }) => (
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                )}
                            />
                            <label htmlFor="remember-me" className='text-xs text-primary'>Remember me</label>
                        </div>
                        <a href="#" className='text-xs text-primary'>Forgot password?</a>
                    </div>
                </div>
                <Button 
                    type='submit'
                    className='w-full h-11 bg-[var(--color-primary)] text-white rounded-2xl'
                    variant='default'
                >
                    {isPending ? "Loading..." : "Sign In"}
                </Button>
                <div className='w-full flex items-center justify-center'>
                    <div className='w-fit h-full flex flex-col gap-2'>
                        <span className='text-xs text-primary'>Or sign in with</span>
                        <div className='py-2.5 px-6 rounded-2xl border border-border flex items-center justify-center'>
                            <Icon name="githubIcon" width={25} height={25} />
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-start items-center'>
                    <p className='text-xs text-primary text-center'>
                        Don’t have an account? 
                        <Link
                            to="/"
                            className='text-[#9333EA] font-bold'
                            onClick={(e) => isPending && e.preventDefault()}
                        >
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </form>
    )
}

export default LoginForm
