import {  useNavigate } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {   signupSchema, type SignupPayload } from '../../schemas/authSchema'

import { Button } from '@/components/ui/button'
import InputComponent from '@/components/ui/form/input-component'
import Icon from '@/components/ui/icons'
import { signupFormDefaultValues } from '../../schemas/defaultValus'
import { useUserLogin } from '../../apis/mutations'
import { useAppDispatch } from '@/hooks/redux'
import { setUserData } from '@/store/slices/userSlice'
import type { User } from '@/modules/user/apis/types'


const SignUpForm = () => {


  const dispatch = useAppDispatch()
  const navigate = useNavigate();

  const { handleSubmit, control } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: signupFormDefaultValues
  })

  const { mutate, isPending } = useUserLogin()

  const onSubmit = (formData: SignupPayload) => {
    mutate(formData, {
      onSuccess: (data) => {
        console.log('SignUp Successfully:', data)
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
        className='w-full h-full '
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className=' w-full flex flex-col gap-6 '>
          <div className='w-full flex flex-col gap-1 '>
              <Controller
              name='name'
              control={control}
              disabled={isPending}
              render={({ field, fieldState }) => (
                <InputComponent
                  {...field}
                  type="text"
                  placeholder="Enter your userName"
                  error={fieldState.error?.message}
                  leftIcon={<Icon name="userIcon" width={16} height={16} />}
                  wrapperClassName="w-full"
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
            className='w-full h-11 bg-[#9333EA] text-white rounded-2xl'
            variant='default'
          >
            {isPending ? "Loading..." : "Continue"}
          </Button>
          <div className='w-full h-full flex items-center justify-center'>
            <div className='w-fit h-full flex flex-col gap-2'>
              <span className='text-xs text-primary'>Or sign in with</span>
              <div className='py-2.5 px-6 rounded-2xl border border-border flex items-center justify-center'>
                <Icon name="githubIcon" width={25} height={25} />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default SignUpForm