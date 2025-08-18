import { Label } from '../../label'
import { Textarea } from '../../textarea'
import { Input } from '../../input'
import { Button } from '../../button'


interface EditAddressFormProps{
    setEditAddress : Function
}

const EditAddressForm:React.FC<EditAddressFormProps> = ({setEditAddress}) => {
    
    return (

            <div className="w-full w-auto p-4 space-y-5">
                <h1 className="font-bold">Edit Address</h1>

                <div className="space-y-5">
                    <div className="space-y-3">
                        <Label className="text-[var(--color-muted)]">Address Line</Label>
                        <Textarea className="w-full h-[100px]" name="address" id="address" />
                    </div>
                    <div className="flex gap-5">
                        <div className="w-full space-y-3">
                            <Label htmlFor="city" className="text-[var(--color-muted)]" >City</Label>
                            <Input className="w-full border-[var(--color-border)]" type="text" required />
                        </div>
                        <div className="w-full space-y-3">
                            <Label htmlFor="state" className="text-[var(--color-muted)]" >State</Label>
                            <Input className="w-full border-[var(--color-border)]" type="text" required />
                        </div>
                        <div className="w-full space-y-3">
                            <Label htmlFor="pincode" className="text-[var(--color-muted)]" >Pin Code</Label>
                            <Input className="w-full border-[var(--color-border)]" type="number" inputMode="numeric" maxLength={6} required />
                        </div>
                    </div>
                    <div className="w-full space-y-3">
                        <Label htmlFor="country" className="text-[var(--color-muted)]" >Country</Label>
                        <Input className="w-full border-[var(--color-border)]" type="text" required />
                    </div>
                </div>

                <h1 className="font-bold">Pick Address from Map</h1>

                <div className="w-full flex gap-15">
                    <div className="w-full">
                        <Button className="w-full text-[var(--color-primary)] border border-[var(--color-primary)] bg-[var(--color-background)] rounded-[var(--border-radius)] hover:bg-[var(--color-primary-hover)]/5"
                         onClick={() => setEditAddress(false)}
                        >Cancel</Button>
                    </div>
                    <div className="w-full">
                        <Button className="w-full text-[var(--color-background)] bg-[var(--color-primary)] rounded-[var(--border-radius)] hover:bg-[var(--color-primary-hover)]">Save Address</Button>
                    </div>

                </div>

            </div>

    )
}

export default EditAddressForm