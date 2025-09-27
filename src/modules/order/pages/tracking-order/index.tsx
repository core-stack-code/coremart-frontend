import Icon from "@/components/ui/icons"
import OrderItemsCard from "../../components/tracking-order/order-items-card"
import TotalOrderBill from "../../components/tracking-order/total-order-bill"
import TrackingStatus from "../../components/tracking-order/tracking-status"



const TrackingOrder = () => {
    return (
        <div className="w-[90%] md:w-[85%] flex flex-col gap-8 mx-auto my-9">
            <h2 className="text-2xl font-semibold mb-1">Tracking Order</h2>

            <div className="flex flex-col lg:flex-row gap-10">

                <div className="w-full lg:w-1/2 flex flex-col gap-8">

                    <div className="bg-[var(--color-surface)] p-3 rounded-[10px] space-y-2">
                        <p className="text-[16px] md:text-[18px] text-[var(--color-muted)]">Order ID</p>
                        <p className="font-bold text-xl md:text-2xl">Order #121323</p>
                    </div>


                    <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
                        <div className="space-y-2">
                            <p className="text-[16px] md:text-[18px] text-[var(--color-muted)]">Ordered Date</p>
                            <p className="text-lg md:text-xl">20 August, 2025 at 10:10 AM</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <Icon name="paidIcon" width={120} height={40} />
                        </div>
                    </div>


                    <div className="flex flex-col gap-4">
                        <p className="text-[var(--color-muted)] text-lg md:text-2xl">Ordered Item</p>

                        {
                            [1, 2].map((curELe, index) => {
                                return (
                                    <OrderItemsCard key={index} />
                                )
                            })
                        }
                    </div>

                    <TotalOrderBill />

                </div>


                <div className="w-full lg:w-1/2">
                    <TrackingStatus />
                </div>
            </div>
        </div>
    )
}

export default TrackingOrder
