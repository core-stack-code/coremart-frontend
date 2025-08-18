import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import TotalAmonut from "../../components/Total-Amount"
import DeliveryDateTime from "../../components/Order-Checkout/Delivery-Date-Time"
import ShippingPaymentMethod from "../../components/Order-Checkout/Shipping-Payment-Method"
import CheckoutProductCard from "../../components/Order-Checkout/Checkout-ProductCard"
import AddAddressForm from "../../../../components/ui/form/Add-Address-Form"



const shippingMethod = ["Standard", "Express"]
const paymentsMethod = ["UPI", "Credit or Debit Card", "Net Banking", "Cash On Delivery"]


const CheckOut = () => {

    const [address, setAddress] = useState(true)


    return (
        <>

            <div className="p-6 lg:p-10">
                <div className="space-y-5">
                    <div>
                        <h1 className="font-bold text-[22px]">Checkout</h1>
                    </div>

                    <div className="w-full flex flex-col sm:flex-col md:flex-col lg:flex-row lg:justify-between lg:gap-15">

                        <div className="border h-fit border-[var(--color-border)] rounded-[var(--border-radius)] space-y-3 w-full p-6">

                            {
                                address ?
                                    <div className="w-1/2 p-6 border border-[var(--color-border)] rounded-[var(--border-radius)] space-y-5">
                                        <h1 className="font-bold text-[20px]">Shipping Address</h1>
                                        <div className="space-y-1 text-[var(--color-muted)]">
                                            <p className="font-bold">John Doe</p>
                                            <p>123 Main Street</p>
                                            <p>Apt 4B</p>
                                            <p>Springfield, IL 62701</p>
                                            <p>United States</p>
                                        </div>
                                        <div>
                                            <Button className="w-full bg-[var(--color-primary)] font-normal text-[var(--color-background)] rounded-[var(--border-radius)] hover:bg-[var(--color-primary-hover)]" onClick={() => setAddress(false)}>Add/Change Address</Button>
                                        </div>
                                    </div> :
                                    <AddAddressForm />
                            }


                            <div className="space-y-4">
                                <h1 className="font-bold text-[20px]">Shipping Method</h1>
                                <div className="text-[var(--color-muted)]">
                                    <ShippingPaymentMethod Methods={shippingMethod} />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h1 className="font-bold text-[20px]">payment Method</h1>
                                <div className="text-[var(--color-muted)]">
                                    <ShippingPaymentMethod Methods={paymentsMethod} defaultSelect="UPI" />
                                </div>
                            </div>
                            <div>
                                <h1 className="font-bold text-[20px]">Order Note (Optional)</h1>
                                <div className="p-3">
                                    <Textarea className="w-full h-[139px]" placeholder="e.g. ,  Leave at front door, Gift Wrapping  instruction" name="orederNote" id="orderNote" />
                                </div>
                            </div>
                        </div>

                        <div className="sm:w-full md:w-full lg:w-5xl flex flex-col gap-8 justify-center items-center">
                            <div className="w-full">

                                <div className="w-full flex flex-col gap-3">
                                    {
                                        [1, 2, 3].map((checkoutCard, index) => {
                                            return (

                                                <CheckoutProductCard key={index} checkoutCard={checkoutCard} />
                                            )
                                        })
                                    }

                                </div>
                            </div>

                            <DeliveryDateTime />

                            <div className="w-full border-[var(--color-border)] border rounded-[var(--border-radius)] py-6 px-10 h-fit">
                                <TotalAmonut />
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default CheckOut