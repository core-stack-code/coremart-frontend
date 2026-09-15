import { Button } from '@/components/ui/button'
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
      <h3 className="text-lg font-bold  text-foreground">
        {title}
      </h3>

      <div className="flex flex-col gap-3 text-base border-b py-4">
        <div className="grid grid-cols-2 text-muted">
          <span className="font-medium">Subtotal</span>
          <span className="font-semibold text-foreground text-end">$ {subtotal.toFixed()}</span>
        </div>

        <div className="grid grid-cols-2 text-muted">
          <span className="font-medium">Discount</span>
          <span className="font-semibold text-error text-end">− $ {discount}</span>
        </div>

        {shipping &&
          <div className="grid grid-cols-2 text-muted">
            <span className="font-medium">Shipping</span>
            <span className="font-semibold text-end">$ {shippingAmount}</span>
          </div>
        }

      </div>
      <div className="flex flex-col gap-5 pt-4">
        <div className="grid grid-cols-2">
          <span className="text-sm font-semibold text-foreground">
            Total Amount
          </span>
          <span className="text-lg font-bold text-foreground text-end">$ {totalAmout}</span>
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