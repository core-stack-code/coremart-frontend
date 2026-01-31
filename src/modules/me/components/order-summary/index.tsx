import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography';
import React from 'react'

interface orderSummaryProps {
  title: string;
  subtotal: number;
  discount: number;
  shipping?: number;
}

const OrderSummary: React.FC<orderSummaryProps> = ({ title, subtotal, discount, shipping }) => {

  const shippingAmount = shipping ?? 0;
  const totalAmout = ((subtotal - discount) + shippingAmount);

  return (
    <div className="w-full md:w-full lg:w-1/3 max-h-fit border border-border rounded-rad p-5">
      <Typography variant='large' className="font-bold">
        {title}
      </Typography>

      <div className="flex flex-col gap-3 text-base border-b py-4">
        <div className="grid grid-cols-2 text-muted">
          <Typography className='font-medium'>Subtotal</Typography>
          <Typography className="text-end">$ {subtotal.toFixed(2)}</Typography>
        </div>

        <div className="grid grid-cols-2 text-muted">
          <Typography className='font-medium'>Discount</Typography>
          <Typography className="text-error text-end">− $ {discount}</Typography>
        </div>

        {shipping &&
          <div className="grid grid-cols-2 text-muted">
            <Typography className='font-medium'>Shipping</Typography>
            <Typography className="text-end">$ {shippingAmount}</Typography>
          </div>
        }

      </div>
      <div className="flex flex-col gap-5 pt-4">
        <div className="grid grid-cols-2">
          <Typography className="font-semibold ">Total Amount </Typography>
          <Typography className="font-bold  text-end">$ {totalAmout}</Typography>
        </div>

        <Button
          variant="default"
          size="lg"
          className="text-white"
        >
          Checkout
        </Button>
      </div>
    </div>
  )
}

export default OrderSummary