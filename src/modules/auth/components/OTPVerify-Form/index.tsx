import { useNavigate } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { verifySchema, type VerifyPayload, } from '../../schemas/authSchema'
import { Button } from '@/components/ui/button'
import { useUserLogin } from '../../apis/mutations'
import { useAppDispatch } from '@/hooks/redux'
import { setUserData } from '@/store/slices/userSlice'
import type { User } from '@/modules/user/apis/types'
import { verifyFromDefaultsValues } from '../../schemas/defaultValus'
import OtpInput from '@/components/ui/form/OTP-component'


const OTPVerifyForm = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    const { handleSubmit, control } = useForm({
        resolver: zodResolver(verifySchema),
        defaultValues: verifyFromDefaultsValues
    })

    const { mutate, isPending } = useUserLogin()

    const onSubmit = (formData: VerifyPayload) => {
        mutate(formData, {
            onSuccess: (data) => {
                console.log('OTP Send Successfully:', data)
                dispatch(setUserData(data.data?.user as User))
                navigate('/')
            },
            onError: (error) => {
                console.error('OTP Send  failed:', error)
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
                            name='otp'
                            control={control}
                            disabled={isPending}
                            render={({ field, fieldState }) => (
                                <OtpInput
                                    {...field}
                                    length={6}
                                    value={field.value}
                                    onChange={field.onChange}
                                    error={fieldState.error?.message}
                                    wrapperClassName="w-full"
                                />
                            )}
                        />
                    </div>
                    <p className=" text-[#6366F1]">Didn’t receive CODE? <a href="/" className="  text-[#9333EA] font-bold underline ">Resend</a></p>
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
                            {isPending ? "Loading..." : "Sign Up"}
                        </Button>
                    </div>


                </div>
            </form>
        </>
    )
}

export default OTPVerifyForm