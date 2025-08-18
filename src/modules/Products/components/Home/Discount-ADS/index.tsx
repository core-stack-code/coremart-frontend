import { Button } from '@/components/ui/button'
import React from 'react'

interface DiscountLabelProps {
    discount: string,
    buttonName: string
}

const DiscountLabel: React.FC<DiscountLabelProps> = ({ discount, buttonName }) => {
    return (
        <>
            <div className="w-full flex flex-col justify-center items-center gap-2 text-white p-8  bg-[var(--color-primary)]/50 rounded-[var(--border-radius)]">
                <p>{discount}</p>
                <Button className="bg-[var(--color-background)] px-5 py-1 text-[12px] rounded-[20px] text-[var(--color-primary)]">{buttonName}</Button>
            </div>
        </>
    )
}

export default DiscountLabel