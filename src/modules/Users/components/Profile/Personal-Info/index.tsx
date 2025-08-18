import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const PersonalInfo = () => {

    const [personalInfoEdit, setPersonalInfoEdit] = useState(false)

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-6 border border-[var(--color-border)] rounded-[var(--border-radius)]">

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <h1 className="font-bold text-xl sm:text-2xl">Personal Information</h1>

                {
                    !personalInfoEdit ?
                        <Button className="bg-[var(--color-primary)] text-[var(--color-background)] hover:bg-[var(--color-primary-hover)]"
                            onClick={() => setPersonalInfoEdit(true)}>
                            Edit
                        </Button> : null
                }
            </div>

            <hr className="mt-6 border border-[var(--color-border)]" />


            <div className="flex flex-col lg:flex-row justify-start gap-6 mt-6">

                <div className="w-full lg:w-1/4 flex justify-center">
                    <div className="space-y-4 text-center">
                        <img
                            src="/All-Category/Top-Wear/2NA22S0CA-K11@10.jpg"
                            alt="Profile"
                            className="w-32 h-32 object-cover rounded-full mx-auto"
                        />
                        <p className="font-bold text-2xl sm:text-2xl">Sachit Dabhi</p>
                        {
                            personalInfoEdit ?
                                <NavLink to={'/user/profile'}>
                                    <p className="text-xs sm:text-xs text-[var(--color-primary)]">Change Profile Picture</p>
                                </NavLink> : null
                        }
                    </div>
                </div>


                <div className="w-full flex flex-col gap-6 justify-center">
                    <div className="flex flex-col sm:flex-row gap-6">
                        <div className="space-y-2">
                            <p className="text-[var(--color-muted)]">Full Name</p>
                            {
                                personalInfoEdit ?
                                    <Input className="bg-[var(--color-surface)] border-[var(--color-border)]" type="text" defaultValue="Sachit Dabhi" /> :
                                    <p>Sachit Dabhi</p>
                            }
                        </div>
                        <div className="space-y-2">
                            <p className="text-[var(--color-muted)]">Phone Number</p>
                            {
                                personalInfoEdit ?
                                    <Input className="bg-[var(--color-surface)] border-[var(--color-border)]" type="text" inputMode="numeric" maxLength={10} defaultValue="+91 1234567890" /> :
                                    <p>+91 1234567890</p>
                            }
                        </div>
                    </div>
                    <div className="space-y-2">
                        <p className="text-[var(--color-muted)]">Email Address</p>
                        {
                            personalInfoEdit ?
                                <Input className="w-fit bg-[var(--color-surface)] border-[var(--color-border)]" type="email" defaultValue="corestack@gmail.com" /> :
                                <p>corestack@gmail.com</p>
                        }
                    </div>
                    {
                        personalInfoEdit ?
                            <div className="flex gap-5">
                                <Button className="bg-[var(--color-primary)] text-[var(--color-background)] hover:bg-[var(--color-primary-hover)]">
                                    Save Changes
                                </Button>
                                <Button className="bg-[var(--color-background)] text-[var(--color-primary)] border border-[var(--color-primary)] hover:bg-[var(--color-primary-hover)]/5"
                                onClick={() => setPersonalInfoEdit(false)}>
                                    Cancel
                                </Button>
                            </div> : null
                    }
                </div>
            </div>



            {/* <div className="flex flex-col lg:flex-row justify-start gap-6 mt-6">

                <div className="w-full lg:w-1/4 flex justify-center">
                    <div className="space-y-4 text-center">
                        <img
                            src="/All-Category/Top-Wear/2NA22S0CA-K11@10.jpg"
                            alt="Profile"
                            className="w-32 h-32 object-cover rounded-full mx-auto"
                        />
                        <div className="space-y-2">
                            <p className="font-bold text-2xl sm:text-2xl">Sachit Dabhi</p>
                            <NavLink to={'/user/profile'}>
                                <p className="text-xs sm:text-xs text-[var(--color-primary)]">Change Profile Picture</p>
                            </NavLink>
                        </div>
                    </div>
                </div>


                <div className="w-full flex flex-col gap-6 justify-center">
                    <div className="flex flex-col sm:flex-row gap-6">
                        <div className="space-y-2">
                            <p className="text-[var(--color-muted)]">Full Name</p>
                            <Input className="bg-[var(--color-surface)] border-[var(--color-border)]" type="text" defaultValue="Sachit Dabhi" />
                        </div>
                        <div className="space-y-2">
                            <p className="text-[var(--color-muted)]">Phone Number</p>
                            <Input className="bg-[var(--color-surface)] border-[var(--color-border)]" type="text" inputMode="numeric" maxLength={10} defaultValue="+91 1234567890" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <p className="text-[var(--color-muted)]">Email Address</p>
                        <Input className="w-fit bg-[var(--color-surface)] border-[var(--color-border)]" type="email" defaultValue="corestack@gmail.com" />
                    </div>
                    <div className="flex gap-5">
                        <Button className="bg-[var(--color-primary)] text-[var(--color-background)] hover:bg-[var(--color-primary-hover)]">
                            Save Changes
                        </Button>
                        <Button className="bg-[var(--color-background)] text-[var(--color-primary)] border border-[var(--color-primary)] hover:bg-[var(--color-primary-hover)]/5">
                            Cancel
                        </Button>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default PersonalInfo