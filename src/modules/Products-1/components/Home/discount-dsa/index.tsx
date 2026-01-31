import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import React from 'react'

interface DiscountLabelProps {
    discount: string,
    buttonName: string
}

const DiscountLabel: React.FC<DiscountLabelProps> = ({ discount, buttonName }) => {
    return (
        <>
            <div className="w-full flex flex-col justify-center items-center gap-2 text-white p-8  bg-primary/50 rounded-rad">
                <Typography >{discount}</Typography>
                <Button className="bg-background px-5 py-1 text-[12px] rounded-[20px] text-primary">{buttonName}</Button>
            </div>
        </>
    )
}

export default DiscountLabel