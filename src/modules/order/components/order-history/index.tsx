import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icons'


interface OrderHistoryCardProps {
    status: string
}


const OrderHistoryCard: React.FC<OrderHistoryCardProps> = ({ status }) => {
    return (
        <div className="border border-[var(--color-border)] w-full xl:w-2/3 flex flex-col py-4 px-5 rounded-[20px] gap-4">

            <div className="flex justify-between items-start">
                <p className="font-bold text-lg">Order #121323</p>
                {
                    status === "ordershippedBadge" ?
                        <Icon name="ordershippedBadge" width={86} height={26} /> :
                        status === "orderdeliveredBadge" ?
                            <Icon name="orderdeliveredBadge" width={86} height={26} /> :
                            status === "ordercanceledBadge" ?
                                <Icon name="ordercanceledBadge" width={86} height={26} /> : null

                }
            </div>

            <div className="flex flex-col sm:flex-row gap-5">

                <div className="flex justify-center items-center">
                    <img
                        src="/All-Category/Bottom-Wear/86.jpg"
                        alt="product"
                        className="h-full w-[130px] rounded-2xl object-cover"
                    />
                </div>


                <div className="flex flex-col justify-between flex- px-1 sm:px-3 ">
                    <div className="flex flex-col gap-4 text-[var(--color-muted)]">
                        <p className="text-base font-semibold text-black">
                            Urban Wild: Illustrated Fox Graphic T-shirt by Nike
                        </p>
                        <p className="text-sm">
                            Return or replace items : Eligible through July 5, 2025
                        </p>
                        <p className="text-sm">Order Placed: June 30, 2025</p>
                        <p className="text-[var(--color-muted)] font-bold">Total: ₹2500</p>
                    </div>

                    <div className="mt-4 sm:mt-2">
                        <Button className="bg-[var(--color-primary)] text-[var(--color-background)] font-normal rounded-[10px] hover:bg-[var(--color-primary-hover)]">
                            Track Order
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OrderHistoryCard