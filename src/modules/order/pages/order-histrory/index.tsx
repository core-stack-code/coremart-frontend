import OrderHistoryCard from "../../components/order-history"



const selectBadge = {
    shipped: "ordershippedBadge",
    delivered: "orderdeliveredBadge",
    canceled: "ordercanceledBadge"
}


const OrderHistory = () => {
    return (
        <>

            <div className="p-6 lg:p-10">
                <div className="space-y-5">
                    <h1 className="font-bold text-[22px]">Your Order History </h1>
                    <div className="space-y-5">
                        <div className="space-y-3">
                            <h1 className="font-bold text-[22px]">Pending Orders</h1>
                        </div>
                        <OrderHistoryCard status={selectBadge.shipped} />
                    </div>


                    <div className="space-y-5">
                        <div className="space-y-3">
                            <h1 className="font-bold text-[22px]">Past Orders</h1>
                            <OrderHistoryCard status={selectBadge.delivered} />
                            <OrderHistoryCard status={selectBadge.canceled} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderHistory