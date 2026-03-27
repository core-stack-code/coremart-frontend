import { useNavigate } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { forgotPasswordSchema, type ForgotPasswordPayload, } from '../../schemas/authSchema'
import { Button } from '@/components/ui/button'
import InputComponent from '@/components/ui/form/input-component'
import { useUserLogin } from '../../apis/mutations'
import type { User } from '@/modules/user/apis/types'
import { forgetPasswordFormDefaultValues } from '../../schemas/defaultValus'
import { useUserState } from '@/store/state'


const ForgetPasswordForm = () => {

  const setUserData = useUserState(state => state.setUserData);
  const navigate = useNavigate();

  const { handleSubmit, control } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: forgetPasswordFormDefaultValues
  })

  const { mutate, isPending } = useUserLogin()

  const onSubmit = (formData: ForgotPasswordPayload) => {
    mutate(formData, {
      onSuccess: (data) => {
        console.log('Email Send Successfully:', data)
        setUserData(data.data?.user as User)
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
                placeholder="name@coremart.com"
                error={fieldState.error?.message}
                label='Email Address'
                wrapperClassName="w-full"
              />
            )}
          />
        </div>
        <div className='flex flex-col gap-4'>
          <Button
            type='submit'
            className='w-full h-14 bg-primary text-background rounded-xl'
            variant='default'
          >
            {isPending ? "Loading..." : "Continue"}
          </Button>
          <Button
            type='button'
            className='w-full h-14 text-primary hover:bg-secondary hover:text-white rounded-xl'
            variant='ghost'
            onClick={() => navigate(-1)}
          >
            {isPending ? "Loading..." : "Back"}
          </Button>
        </div>


      </div>
    </form>
  )
}

export default ForgetPasswordForm