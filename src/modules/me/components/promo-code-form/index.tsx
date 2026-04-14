import InputComponent from '@/components/ui/form/input-component'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { promoCodeSchema } from '../../schemas/meSchemas'
import { promoCodeDefaultValue } from '../../schemas/defaultValues'
import { Button } from '@/components/ui/button'

const PromoCodeForm = () => {

    const { handleSubmit, control } = useForm({
        resolver: zodResolver(promoCodeSchema),
        defaultValues: promoCodeDefaultValue
    })

    const onSubmit = (formData: any) => {
        console.log(formData)
    }

    return (
        <form
            className='w-full h-full flex flex-col gap-3'
            onSubmit={handleSubmit(onSubmit)}
        >
            <Typography className='text-black font-semibold'>Apply Promo Code</Typography>
            <div className='flex justify-between'>
                <Controller
                    name='promoCode'
                    control={control}
                    render={({ field, fieldState }) => (
                        <InputComponent
                            {...field}
                            placeholder='Promo Code'
                            error={fieldState.error?.message}
                        />
                    )}
                />
                <Button variant='link' >APPLY</Button>
            </div>
        </form>
    )
}

export default PromoCodeForm