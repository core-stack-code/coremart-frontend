import { Button } from '@/components/ui/button'
import AddAddressForm from '@/modules/order/components/order-checkout/add-address-form'
import { useState } from 'react'


const MyAddress = () => {


    const [editAddress, setEditAddress] = useState(false)
    const [Address, setAddress] = useState(false)
    const [buttonType, setButtonType] = useState("")


    const handleValueCheck = (e: React.MouseEvent<HTMLButtonElement>) => {
        setButtonType(e.currentTarget.value)
        console.log(e.currentTarget.value)
    }


    return (
        <div className="h-full px-5 py-8 border border-border rounded-[var(--border-radius)] space-y-5">
            <div>
                <h1 className="font-bold text-2xl sm:text-2xl md:text-2xl">My Addresses</h1>
            </div>

            <hr className="mt-6 border border-border" />

            <div className="w-full flex justify-between gap-30">

                {
                    editAddress ?
                        // <EditAddressForm setEditAddress={setEditAddress} /> : null
                        <AddAddressForm setAddress={setAddress} setEditAddress={setEditAddress} buttonType={buttonType} /> : null
                }

                {
                    Address ?
                        <AddAddressForm setAddress={setAddress} setEditAddress={setAddress} buttonType={buttonType} /> : null
                }


                <div className="w-2/4 h-fit p-4 space-y-5 ">
                    <h1 className="font-bold">Saved Address</h1>

                    {
                        [1, 2].map((address, index) => {
                            return (
                                <div key={index} className="flex flex-col border border-border rounded-[var(--border-radius)] bg-surface p-6">
                                    <div className="space-y-3">
                                        <h1 className="font-bold">Home Address</h1>
                                        <div className="text-muted space-y-1">
                                            <p className="font-bold">John Doe</p>
                                            <p>123 Main Street</p>
                                            <p>Apt 4B</p>
                                            <p>Springfield, IL 62701</p>
                                            <p className="">United States</p>
                                        </div>
                                        <div className="flex gap-3">
                                            <Button value="Edit" className="bg-primary text-background hover:bg-primary" onClick={(e) => { handleValueCheck(e), setEditAddress(true) }}>Edit</Button>

                                            <Button className="bg-error hover:bg-error text-background">Delete</Button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {
                !editAddress && !Address ?
                    <Button value="AddAddress" className="bg-primary text-background" onClick={(e) => { handleValueCheck(e), setAddress(true) }}>Add Address</Button> : null
            }

        </div>
    )
}

export default MyAddress