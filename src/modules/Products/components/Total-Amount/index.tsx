import { Button } from '@/components/ui/button'


const TotalAmonut = () => {
    return (
        <>

            <h3 className="text-lg font-bold mb-4">Order Total</h3>
            <div className="flex flex-col gap-15 text-sm">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-[var(--color-muted)]">
                        <span >Subtotal</span>
                        <span className="font-bold">₹ 5000</span>
                    </div>
                    <div className="flex justify-between text-[var(--color-discount)]">
                        <span className="text-[var(--color-muted)]">Discount</span>
                        <span className="font-bold">-₹ 200</span>
                    </div>
                    <div className="flex justify-between text-[var(--colorvar(--color-muted))]">
                        <span className="text-[var(--color-muted)]">Shipping</span>
                        <span className="font-bold">₹ 50</span>
                    </div>
                </div>
                <div>

                    <hr className="text-[var(--color-muted)] mb-4"/>
                    <div className="flex justify-between text-[var(--color-muted)]">
                        <span >Cart total</span>
                        <span className="font-bold">₹ 4800</span>
                    </div>
                </div>
            </div>
            <div className="w-[95%] mx-auto py-6">
                <Button className="w-full py-1 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--color-background)] ">
                    Checkout
                </Button>
            </div>

        </>
    )
}

export default TotalAmonut