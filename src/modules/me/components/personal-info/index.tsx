import { Button } from '@/components/ui/button'
import { useState } from 'react'
import ProfileForm from '../profile-form'
import ProfileInfo from '../profile-info'
import { cn } from '@/lib/utils'
import { Typography } from '@/components/ui/typography'

const PersonalInfo = () => {

    const [isEdit, setIsEdit] = useState(false)

    return (
        <div className="w-full h-full flex flex-col gap-1 px-5 py-2 border border-border rounded-rad">
            <div className="flex justify-between items-start py-3 border-b border-border">
                <Typography variant='h4' className="font-bold">Personal Information</Typography>
                <Button className={cn(
                    "bg-primary text-background ",
                    isEdit ? "opacity-0" : "opacity-100"
                )}
                    onClick={() => setIsEdit(true)}>
                    Edit
                </Button>
            </div>

            <div className='min-h-60  py-3'>
                {isEdit ?
                    <ProfileForm setIsEdit={setIsEdit} />
                    : <ProfileInfo />}
            </div>
        </div >
    )
}

export default PersonalInfo