import { Button } from "@/components/ui/button"
import PersonalInfo from "../../components/Profile/Personal-Info"
import MyAddress from "../../components/Profile/My-Address"

const Profile = () => {
    return (
        <>
            <div className="w-full flex flex-col gap-10 px-6 py-12 sm:p-12 md:p-16 lg:p-20">

                <h1 className="font-bold text-2xl sm:text-2xl md:text-2xl">My profile</h1>

                <PersonalInfo />



                <div className="px-5 py-8 border border-[var(--color-border)] rounded-[var(--border-radius)]">
                    <div>
                        <h1 className="font-bold text-2xl sm:text-2xl md:text-2xl">Secuity</h1>
                    </div>

                    <hr className="mt-6 border border-[var(--color-border)]" />

                    <div className="flex flex-col gap-5 py-3">
                        <div className="gap-6">
                            <div className="space-y-2">
                                <p className="text-[var(--color-muted)]">Password</p>
                                <p>********</p>
                            </div>
                        </div>
                        <div>
                            <Button className="bg-[var(--color-primary)] text-[var(--color-background)] hover:bg-[var(--color-primary-hover)]">Change Password</Button>
                        </div>
                    </div>
                </div>


                <MyAddress/>














                {/* <div className="h-full px-5 py-8 border border-[var(--color-border)] rounded-[var(--border-radius)] space-y-5">
                    <div>
                        <h1 className="font-bold text-2xl sm:text-2xl md:text-2xl">My Addresses</h1>
                    </div>

                    <hr className="mt-6 border border-[var(--color-border)]" />

                    <div className="w-full flex justify-between gap-30">
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
                                    <Button className="w-full text-[var(--color-primary)] border border-[var(--color-primary)] bg-[var(--color-background)] rounded-[var(--border-radius)] hover:bg-[var(--color-primary-hover)]/5">Cancel</Button>
                                </div>
                                <div className="w-full">
                                    <Button className="w-full text-[var(--color-background)] bg-[var(--color-primary)] rounded-[var(--border-radius)] hover:bg-[var(--color-primary-hover)]">Save Address</Button>
                                </div>

                            </div>

                        </div>









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
                                                    <Button className="bg-[var(--color-primary)] text-[var(--color-background)] hover:bg-[var(--color-primary-hover)]">Edit</Button>
                                                    <Button className="bg-[var(--color-error)] text-[var(--color-background)]">Delete</Button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>


                    <Button className="bg-[var(--color-primary)] text-[var(--color-background)] hover:bg-[var(--color-primary-hover)]">Add Address</Button>
                </div> */}



            </div>
        </>
    )
}

export default Profile