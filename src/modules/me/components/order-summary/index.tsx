import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography';
import React from 'react'
import PromoCodeForm from '../promo-code-form';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icons';

interface orderSummaryProps {
  title: string;
  subtotal: number;
  discount: number;
  shipping?: number;
  tax?: number
}

const OrderSummary: React.FC<orderSummaryProps> = ({ title, subtotal, discount, shipping, tax }) => {

  const navigate = useNavigate();
  const shippingAmount = shipping ?? 0;
  const totalAmout = ((subtotal - discount) + shippingAmount);

  return (
    <div className="w-full md:w-full lg:w-1/3 max-h-fit flex flex-col gap-6 rounded-rad p-6 bg-white">
      <Typography variant='h4' className='mb-4'>
        {title}
      </Typography>

      <div className="flex flex-col gap-5 py-4">
        <div className="grid grid-cols-2">
          <Typography className='text-muted'>Subtotal</Typography>
          <Typography className="text-end">${subtotal.toFixed(2)}</Typography>
        </div>

        <div className="grid grid-cols-2">
          <Typography className='text-muted'>Discount</Typography>
          <Typography className="text-primary text-end">−${discount.toFixed(2)}</Typography>
        </div>

        {shipping &&
          <div className="grid grid-cols-2">
            <Typography className='text-muted'>Shipping</Typography>
            <Typography className="text-end">${shippingAmount.toFixed(2)}</Typography>
          </div>
        }

        <div className="grid grid-cols-2">
          <Typography className='text-muted'>Extimated Tax</Typography>
          <Typography className="text-end">${tax?.toFixed(2)}</Typography>
        </div>
      </div>

      <div>
        <PromoCodeForm />
      </div>

      <div className="flex justify-between items-center my-4">
        <Typography variant='large'>Total</Typography>
        <Typography variant='h4' className='text-primary font-bold'>${totalAmout.toFixed(2)}</Typography>
      </div>

      <div className='flex flex-col gap-3'>
        <Button
          variant="default"
          size="lg"
          className="text-white"
        >
          PROCESS TO CHECKOUT
        </Button>
        <Button
          variant="link"
          size="lg"
          className="text-primary"
          onClick={() => navigate('/product')}
        >
          CONTINUE SHOPPING
        </Button>
      </div>

      <hr className='mt-4 border border-border/70' />

      <div className='w-full flex justify-between gap-1 mt-3'>
        <div className='w-full h-full flex flex-col items-center gap-3'>
          <Icon name='shield' width={20} height={20} className='text-primary' />
          <Typography variant='muted' className='text-xs'>SECURE CHECKOUT</Typography>
        </div>
        <div className='w-full h-full flex flex-col items-center gap-3'>
          <Icon name='PackageIcon' width={22} height={22} className='text-primary' />
          <Typography variant='muted' className='text-xs'>FREE 30-DAY RETURNS</Typography>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary