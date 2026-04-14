import { useNavigate } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signupSchema, type SignupPayload } from '../../schemas/authSchema'

import Icon from '@/components/ui/icons'
import InputComponent from '@/components/ui/form/input-component'
import { Button } from '@/components/ui/button'
import { signupFormDefaultValues } from '../../schemas/defaultValus'
import { useUserSignUp } from '../../apis/mutations'
import { Typography } from '@/components/ui/typography'
import { useToast } from '@/hooks/useToast'
import React, { useEffect } from 'react'
import { flatZodError } from '@/lib/zod/flatZodError'


const SignUpForm:React.FC = () => {

  const navigate = useNavigate();
  const toast = useToast();

  const { handleSubmit, control, getValues, formState: { errors } } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: signupFormDefaultValues
  })

  const { mutate, isPending } = useUserSignUp()

  const onSubmit = (formData: SignupPayload) => {
    mutate(formData, {
      onSuccess: (data) => {
        toast.success(data.message)
        navigate('/auth')
      },
      onError: (error) => {
        toast.error(error.message)
      }
    })
  }

  useEffect(() => {
    if (Object.entries(errors).length > 0) {
      const errMsg = flatZodError(signupSchema, getValues())
      if (errMsg) toast.error(errMsg)
    }
  }, [errors])

  return (
    <form
      className='w-full h-full'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='w-full flex flex-col gap-6'>
        <div className='w-full flex flex-col gap-3'>
          <Controller
            name='name'
            control={control}
            disabled={isPending}
            render={({ field, fieldState }) => (
              <InputComponent
                {...field}
                type="text"
                label="UserName"
                placeholder="Enter your userName"
                error={fieldState.error?.message}
                wrapperClassName="w-full"
                disabled={isPending}
              />
            )}
          />
          <Controller
            name='email'
            control={control}
            disabled={isPending}
            render={({ field, fieldState }) => (
              <InputComponent
                {...field}
                type="email"
                label="Email Address"
                placeholder="name@coremart.com"
                error={fieldState.error?.message}
                wrapperClassName="w-full"
                disabled={isPending}
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
                label="Password"
                placeholder="********"
                error={fieldState.error?.message}
                togglePassword
                wrapperClassName="w-full"
                disabled={isPending}
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
                value={field.value ?? ""}
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
      </div>
    </form>
  )
}

export default SignUpForm