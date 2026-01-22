import { Button } from '@/components/ui/button'
import InputComponent from '@/components/ui/form/input-component'
import Label from '@/components/ui/form/label'
import TextareaComponent from '@/components/ui/form/textarea-component'
import Icon from '@/components/ui/icons'
import { productReviewDefaultValues } from '@/modules/product/schemas/productDefaultValues'
import { reviewSchema, type ProductReviewPayLoad } from '@/modules/product/schemas/productSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'


interface productReviewFormProps {
    setOpneReviewForm: React.Dispatch<React.SetStateAction<boolean>>
}

const ProductReviewForm: React.FC<productReviewFormProps> = ({ setOpneReviewForm }) => {

    const { handleSubmit, control, reset } = useForm({
        resolver: zodResolver(reviewSchema),
        defaultValues: productReviewDefaultValues
    })

    const onSubmit = (data: ProductReviewPayLoad) => {
        console.log(data)
        reset();
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
            <div className='flex flex-col gap-4 border border-border rounded-rad mx-3 p-3'>
                <div className='flex flex-col gap-2'>
                    <div className='flex justify-between '>
                        <Label>OverAll Rating</Label>
                        <button onClick={() => setOpneReviewForm((pre) => !pre)}>
                            <Icon name='closeIcon' width={18} height={18} />
                        </button>
                    </div>
                    <Controller
                        control={control}
                        name='rating'
                        render={({ }) => {
                            return (
                                <div className='flex gap-2'>
                                    {[1, 2, 3, 4, 5].map((index) => {
                                        return (
                                            <Icon
                                                key={index}
                                                name={'starOutline'}
                                                width={24}
                                                height={24}
                                            />
                                        )
                                    })}
                                </div>
                            )
                        }}
                    />
                </div>

                <div className='flex flex-col gap-3'>
                    <Label>Review Title</Label>
                    <Controller
                        control={control}
                        name='reviewTitle'
                        render={({ field, fieldState }) => {
                            return (
                                <InputComponent
                                    {...field}
                                    placeholder='Add Review Title'
                                    error={fieldState.error?.message}
                                />
                            )
                        }}
                    />
                </div>

                <div className='flex flex-col gap-3'>
                    <Label>Product Review</Label>
                    <Controller
                        control={control}
                        name='productReview'
                        render={({ field, fieldState }) => {
                            return (
                                <TextareaComponent
                                    {...field}
                                    placeholder='Add Product Review'
                                    error={fieldState.error?.message}
                                />
                            )
                        }}
                    />
                </div>
                <div className='flex justify-end'>
                    <Button variant='default' size='sm' className='text-white'>Submit</Button>
                </div>
            </div>
        </form>
    )
}

export default ProductReviewForm