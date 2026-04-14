import { useNavigate } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import InputComponent from '@/components/ui/form/input-component'
import { useUserLogin } from '../../apis/mutations'
import { forgetPasswordFormDefaultValues } from '../../schemas/defaultValues'
import { forgetPasswordSchema, type ForgetPasswordPayload } from '../../schemas/authSchema'
import { useToast } from '@/hooks/useToast'


const ForgetPasswordForm: React.FC = () => {

  const navigate = useNavigate();
  const toast = useToast();

  const { handleSubmit, control } = useForm({
    resolver: zodResolver(forgetPasswordSchema),
    defaultValues: forgetPasswordFormDefaultValues
  })

  const { mutate, isPending } = useUserLogin()

  const onSubmit = (formData: ForgetPasswordPayload) => {
    console.log('Form Data:', formData)
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