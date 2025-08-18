import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "../../textarea"


const AddAddressForm = () => {
    return (
        <>
            <div className="w-full space-y-2">
                <h1 className="font-bold text-[20px]">Shipping Address</h1>
                <hr className="border-[var(--color-border)]" />

                <form>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-3">
                            <div className="w-full flex justify-between gap-5">
                                <div className="w-full space-y-3">
                                    <Label htmlFor="fullname" >FullName</Label>
                                    <Input className="w-full border-[var(--color-border)]" type="text" required />
                                </div>
                                <div className="w-full space-y-3">
                                    <Label htmlFor="phonenumber">Phone Number</Label>
                                    <Input className="w-full border-[var(--color-border)] no-spinner" type="number" inputMode="numeric" maxLength={10} required />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <Label htmlFor="address" >Address Line</Label>
                                <Textarea className="w-full h-[120px] border border-[var(--color-border)]" required />
                            </div>
                            <div className="flex justify-between gap-5">
                                <div className="w-full space-y-3">
                                    <Label htmlFor="city" >City</Label>
                                    <Input className="w-full border-[var(--color-border)]" type="text" required />
                                </div>
                                <div className="w-full space-y-3">
                                    <Label htmlFor="state" >State</Label>
                                    <Input className="w-full border-[var(--color-border)]" type="text" required />
                                </div>
                                <div className="w-full space-y-3">
                                    <Label htmlFor="pincode" >Pin Code</Label>
                                    <Input className="w-full border-[var(--color-border)]" type="number" inputMode="numeric" maxLength={6} required />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <Label htmlFor="country" >Country</Label>
                                <Input className="w-full border-[var(--color-border)]" type="text" required />
                            </div>
                        </div>

                        <div className="flex justify-center items-center">
                            <Button className="bg-[var(--color-primary)] rounded-[var(--border-radius)] text-white font-normal py-1 px-60 hover:bg-[var(--color-primary-hover)]" type="submit">Save Address</Button>
                        </div>
                        <hr className="border-[var(--color-border)]" />
                    </div>
                </form>
            </div>

        </>
    )
}

export default AddAddressForm