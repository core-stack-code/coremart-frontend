import { Button } from "@/components/ui/button"
import { useState } from "react"
import TextareaComponent from "@/components/ui/form/textarea-component"
import AddAddressForm from "../../components/order-checkout/add-address-form"
import ShippingPaymentMethod from "../../components/order-checkout/shipping-payment-method"
import DeliveryDateTime from "../../components/order-checkout/delivery-date-time"
import CheckoutProductCard from "../../components/order-checkout/checkout-productcard"
import TotalAmonut from "../../components/total-amount"


const shippingMethod = [
    {
        id: "shipstandart",
        name: "Standard",
    },
    {
        id: 'shipexpress',
        name: "Express",
    }
]
const paymentsMethod = [
    {
        id:"payUPI",
        name:"UPI"
    },
    {
        id:"payCD",
        name:"Credit or Debit Card",
    },
    {
        id:"payBanking",
        name:"Net Banking",
    },
    {
        id:"payCash",
        name:"Cash On Delivery"
    }
]


const CheckOut = () => {

    const [address, setAddress] = useState(false)
    const [editAddress, setEditAddress] = useState(false)


    return (
        <>

            <div className="p-6 lg:p-10">
                <div className="space-y-5">
                    <div>
                        <h1 className="font-bold text-[22px]">Checkout</h1>
                    </div>

                    <div className="w-full flex flex-col sm:flex-col md:flex-col lg:flex-row lg:justify-between lg:gap-15">

                        <div className="border w-[75%] h-fit border-[var(--color-border)] rounded-[var(--border-radius)] space-y-3 p-6">

                            {
                                !address ?
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
                                            <Button className="w-full bg-[var(--color-primary)] font-normal text-[var(--color-background)] rounded-[var(--border-radius)] hover:bg-[var(--color-primary-hover)]" onClick={() => setAddress(true)}>Add/Change Address</Button>
                                        </div>
                                    </div> :
                                    <AddAddressForm setAddress={setAddress} setEditAddress={setEditAddress} />
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
                                    <TextareaComponent className="w-full h-34" placeholder="e.g. ,  Leave at front door, Gift Wrapping  instruction" name="orederNote" id="orderNote" />
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