import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, type LoginPayload } from '../../schemas/authSchema'
import { loginFormDefaultValues } from '../../schemas/defaultValus'

import InputComponent from '@/components/ui/form/input-component'
import Icon from '@/components/ui/icons'
import { Button } from '@/components/ui/button'
import { useUserLogin } from '../../apis/mutations'
import { Typography } from '@/components/ui/typography'
import { useToast } from '@/hooks/useToast'
import { flatZodError } from '@/lib/zod/flatZodError'


const LoginForm: React.FC = () => {
    
    const navigate = useNavigate();
    const toast = useToast();

    const { handleSubmit, getValues, control, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: loginFormDefaultValues
    })

    const { mutate, isPending } = useUserLogin()

    const onSubmit = (formData: LoginPayload) => {
        mutate(formData, {
            onSuccess: (data) => {
                if (data?.code === 'OK') {
                    toast.success("Login Successfully")
                    navigate('/')
                }
            },
            onError: (error) => {
                toast.error(error?.message || "Invalid credentials");
            }
        })
    }


    useEffect(() => {
        if (Object.entries(errors).length > 0) {
            const errMsg = flatZodError(loginSchema, getValues())
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
                        name='email'
                        control={control}
                        disabled={isPending}
                        render={({ field, fieldState }) => (
                            <InputComponent
                                {...field}
                                type="email"
                                label='Email Address'
                                placeholder="name@coremart.com"
                                error={fieldState.error?.message}
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
                                placeholder="*********"
                                error={fieldState.error?.message}
                                togglePassword
                                wrapperClassName="w-full"
                            />
                        )}
                    />
                    <div className='w-full h-full flex justify-end items-center'>
                        <NavLink
                            to="/auth/forgetpassword"
                            className='text-xs text-primary'>
                            Forgot password?
                        </NavLink>
                    </div>
                </div>
                <Button
                    type='submit'
                    className='w-full h-14 bg-primary text-white rounded-xl'
                    variant='default'
                >
                    {isPending ? "Loading..." : "Sign In"}
                </Button>

                <div className='w-full flex justify-between items-center gap-1'>
                    <hr className='w-full text-primary/20 border-0.5' />
                    <Typography variant='small' className='w-full text-center'>OR CONTINUE WITH</Typography>
                    <hr className='w-full text-primary/20 border-0.5' />
                </div>

                <div className='w-full flex items-center justify-center'>
                    <div className='w-full h-full flex flex-col gap-4'>
                        <Button variant='link' className='w-full h-12 rounded-xl border border-border'>
                            <Icon name="githubIcon" width={25} height={25} />
                            <Typography variant='small' className='text-black'>Sign in with GitHub</Typography>
                        </Button>
                        <Button variant='link' className='w-full h-12 rounded-xl border border-border'>
                            <Icon name="googleIcon" width={25} height={25} />
                            <Typography variant='small' className='text-black'>Sign in with Google</Typography>
                        </Button>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center'>
                    <Typography className='text-center'>
                        Don’t have an account?
                        <NavLink
                            to="/auth/signup"
                            className='ml-2 text-primary font-bold'
                            onClick={(e) => isPending && e.preventDefault()}
                        >
                            Sign Up
                        </NavLink>
                    </Typography>
                </div>
            </div>
        </form>
    )
}

export default LoginForm
