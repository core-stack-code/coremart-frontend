import { Button } from '@/components/ui/button'
import AddAddressForm from '@/modules/me/components/address-form'
import { useState } from 'react'

export type addressMode = 'view' | 'add' | 'edit'

const MyAddress = () => {

    const [mode, setMode] = useState<addressMode>('view')

    const isFormMode = mode === 'add' || mode === 'edit'

    return (
        <div className="flex flex-col gap-5 px-5 py-3 border border-border rounded-rad">

            <div className="flex justify-between items-start py-3 border-b border-border">
                <h1 className="font-bold text-xl">Personal Information</h1>
            </div>

            <div className="w-full flex justify-between gap-10">
                {
                    isFormMode && (
                        <div className="w-full flex flex-col gap-5">
                            <h1 className="font-bold text-xl">{mode === 'add' ? 'Add Address' : 'Edit Address'}</h1>
                            <AddAddressForm setMode={setMode} />
                        </div>
                    )
                }


                <div className="w-2/4 flex flex-col gap-5">
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
                                            <Button
                                                variant='default'
                                                size='lg'
                                                className='text-white'
                                                onClick={() => setMode('edit')}
                                            >Edit</Button>

                                            <Button className="bg-error hover:bg-error text-background">Delete</Button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


            <Button
                variant='default'
                size='lg'
                className='w-30 text-white'
                onClick={() => setMode('add')}
            >
                Add Address
            </Button>

        </div>
    )
}

export default MyAddress