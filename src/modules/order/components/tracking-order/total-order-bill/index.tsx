

const TotalOrderBill = () => {
    return (
        <>
            <div className="w-full border-[var(--color-border)] border-2 rounded-[var(--border-radius)] p-6">
                <h3 className="text-lg font-bold mb-4">Order Total</h3>
                <div className="flex flex-col gap-6 text-sm">
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-between text-[var(--color-muted)]">
                            <span>Subtotal</span>
                            <span className="font-bold">₹ 5000</span>
                        </div>
                        <div className="flex justify-between text-[var(--color-error)]">
                            <span className="text-[var(--color-muted)]">Discount</span>
                            <span className="font-bold">-₹ 200</span>
                        </div>
                        <div className="flex justify-between text-[var(--color-muted)]">
                            <span>Shipping</span>
                            <span className="font-bold">₹ 50</span>
                        </div>
                    </div>
                    <hr />
                    <div className="flex justify-between text-[var(--color-muted)] font-bold">
                        <span>Total</span>
                        <span>₹ 4800</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TotalOrderBill