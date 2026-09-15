
interface CheckoutProductCardProps{
    checkoutCard:number
    key:number
}



const CheckoutProductCard:React.FC<CheckoutProductCardProps> = ({checkoutCard}) => {
    return (
        <>
            <div className="w-full flex justify-between rounded-2xl border-[var(--color-border)] gap-2 border p-3">
                <div className="flex justify-between gap-2 p-2 h-50">
                    <div className="rounded-2xl items-center">
                        <img
                            src='/All-Category/Bottom-Wear/86.jpg'
                            alt='image'
                            className="h-full w-[250px] rounded-2xl object-cover"
                        />
                    </div>
                    <div className="w-full">
                        <div className='flex flex-col gap-3'>
                            <div className="flex flex-col gap-2 text-[var(--color-muted)]">
                                <p className="text-md font-bold">Urban Wild: Illustrated Fox Graphic T-shirt by Nike</p>
                                <p className="text-sm mb-1">Brand: Nike</p>
                                <p className="text-sm mb-1">Color: White</p>
                                <p className="text-sm mb-1">Quantity : 1</p>
                                <p className="text-[var(--color-primary)] font-bold">Total : ₹2500</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CheckoutProductCard