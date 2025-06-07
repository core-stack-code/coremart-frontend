import { useNavigate } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { forgotPasswordSchema, type ForgotPasswordPayload,  } from '../../schemas/authSchema'
import { Button } from '@/components/ui/button'
import InputComponent from '@/components/ui/form/input-component'
import Icon from '@/components/ui/icons'
import { useUserLogin } from '../../apis/mutations'
import { useAppDispatch } from '@/hooks/redux'
import { setUserData } from '@/store/slices/userSlice'
import type { User } from '@/modules/user/apis/types'
import { forgetPasswordFormDefaultValues } from '../../schemas/defaultValus'


const ForgetPasswordForm = () => {

  const dispatch = useAppDispatch()
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
        </div>
        <div className='flex'>
          <Button
            type='button'
            className='w-50 h-11 bg-[#6366F1] text-white rounded-2xl'
            variant='default'
            onClick={() => navigate(-1)}
          >
            {isPending ? "Loading..." : "Back"}
          </Button>
          <Button
            type='submit'
            className='w-50 h-11 ml-6 bg-[#9333EA] text-white rounded-2xl'
            variant='default'
          >
            {isPending ? "Loading..." : "Continue"}
          </Button>
        </div>


      </div>
    </form>
  )
}

export default ForgetPasswordForm