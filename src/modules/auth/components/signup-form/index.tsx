import { useNavigate } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signupSchema, type SignupPayload } from '../../schemas/authSchema'

import Icon from '@/components/ui/icons'
import InputComponent from '@/components/ui/form/input-component'
import { Button } from '@/components/ui/button'
import { signupFormDefaultValues } from '../../schemas/defaultValus'
import { useUserLogin } from '../../apis/mutations'
import type { User } from '@/modules/user/apis/types'
import { Typography } from '@/components/ui/typography'
import { useUserState } from '@/store/state'


const SignUpForm = () => {
  const setUserData = useUserState(state => state.setUserData);
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
        className='w-full h-full '
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className=' w-full flex flex-col gap-6 '>
          <div className='w-full flex flex-col gap-3 '>
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
    </>
  )
}

export default SignUpForm