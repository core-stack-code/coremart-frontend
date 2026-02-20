import React from 'react'
import { useCashfree } from '@/hooks/useCashfree'
import { Button } from '@/components/ui/button'


const OrderTestPage: React.FC = () => {
    const { cashfree, isLoaded } = useCashfree()

    const onTest = async () => {
        if (!cashfree) return;

        await cashfree.checkout({
            paymentSessionId: "session_yhrwL18zQBW1Qc7m3fKed3Dngl3vk3f-5rxsWC3DIhITgsx1xPQwR5vfxJJTOVxI_bPrv-cfy4ID_19GSZ0NgMnIbVqiDywzHu_npH-7eGWkXD_rrY0Ygek7c1Mydwpaymentpayment"
        })
    }

    return (
        <div className='w-fit flex flex-col gap-2'>
            OrderTestPage
            <Button onClick={onTest} disabled={!isLoaded}>
                Test Cashfree Checkout
            </Button>
        </div>
    )
}

export default OrderTestPage
