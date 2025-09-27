
const OrderItemsCard = () => {
    return (
        <div className="w-full flex flex-col sm:flex-row justify-start gap-6 border border-[var(--color-border)] rounded-[var(--border-radius)] p-4">
            <div className="flex-shrink-0">
                <img
                    src="/All-Category/Bottom-Wear/106.jpg"
                    alt="photo"
                    className="w-32 h-auto object-contain mx-auto sm:mx-0"
                />
            </div>
            <div className="flex flex-col justify-center gap-2 text-[var(--color-muted)] text-sm">
                <p className="font-bold text-base md:text-lg">
                    Urban Wild: Illustrated Fox Graphic T-shirt by Nike
                </p>
                <p>Brand: Nike</p>
                <p>Color: White</p>
                <p>Quantity : 1</p>
                <p className="font-bold text-[var(--color-primary)] text-base md:text-lg">Total : ₹2500</p>
            </div>
        </div>
    )
}

export default OrderItemsCard