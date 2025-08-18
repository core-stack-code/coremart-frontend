import { Button } from '@/components/ui/button'
import AddAddressForm from '@/components/ui/form/Add-Address-Form'
import EditAddressForm from '@/components/ui/form/Edit-Address-Form'
import { useState } from 'react'


const MyAddress = () => {


    const [editAddress, setEditAddress] = useState(false)
    const [addAddress, setAddAddress] = useState(false)


    return (
        <div className="h-full px-5 py-8 border border-[var(--color-border)] rounded-[var(--border-radius)] space-y-5">
            <div>
                <h1 className="font-bold text-2xl sm:text-2xl md:text-2xl">My Addresses</h1>
            </div>

            <hr className="mt-6 border border-[var(--color-border)]" />

            <div className="w-full flex justify-between gap-30">

                {
                    editAddress ?
                        <EditAddressForm setEditAddress={setEditAddress} /> : null
                }

                {
                    addAddress ? 
                    <AddAddressForm/> : null
                }






                <div className="w-2/4 h-fit p-4 space-y-5 ">
                    <h1 className="font-bold">Saved Address</h1>

                    {
                        [1, 2].map((address, index) => {
                            return (
                                <div key={index} className="flex flex-col border border-[var(--color-border)] rounded-[var(--border-radius)] bg-[var(--color-surface)] p-6">
                                    <div className="space-y-3">
                                        <h1 className="font-bold">Home Address</h1>
                                        <div className="text-[var(--color-muted)] space-y-1">
                                            <p className="font-bold">John Doe</p>
                                            <p>123 Main Street</p>
                                            <p>Apt 4B</p>
                                            <p>Springfield, IL 62701</p>
                                            <p className="">United States</p>
                                        </div>
                                        <div className="flex gap-3">
                                            <Button className="bg-[var(--color-primary)] text-[var(--color-background)] hover:bg-[var(--color-primary-hover)]" onClick={() => setEditAddress(true)}>Edit</Button>
                                            <Button className="bg-[var(--color-error)] text-[var(--color-background)]">Delete</Button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {
                !editAddress && !addAddress?
                    <Button className="bg-[var(--color-primary)] text-[var(--color-background)] hover:bg-[var(--color-primary-hover)]" onClick={() => setAddAddress(true)}>Add Address</Button> : null
            }

        </div>
    )
}

export default MyAddress