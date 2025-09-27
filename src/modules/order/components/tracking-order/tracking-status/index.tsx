
const Order5tatusSteps = [
    {
        status: "Order Confirmed",
        desc: "Order received at Ahmedabad Store",
        date: "18 August",
        active: true,
    },
    {
        status: "Picked Up",
        desc: "Package picked up by courier from Sarkhej Hub, Ahmedabad",
        date: "18 August",
        active: true,
    },
    {
        status: "In Transit",
        desc: "Moving from Ahmedabad to Surat",
        date: "19 August",
        active: false,
    },
    {
        status: "Out for Delivery",
        desc: "Arrived at Surat Delivery Center",
        date: "20 August",
        active: false,
    },
    {
        status: "Delivered",
        desc: "Successfully delivered to Ring Road, Surat",
        date: "20 August",
        active: false,
    },
];



const TrackingStatus = () => {
    return (
        <>
            <div className="w-full mx-auto px-2 sm:px-6">
                {Order5tatusSteps.map((step, index) => (
                    <div key={index} className="w-full relative flex flex-col sm:flex-row justify-between gap-3 sm:gap-5 h-25">


                        <div className="w-full flex gap-4 sm:gap-5">
                            <div
                                className={`relative border-l-4 border-dotted ${step.active ? "border-[var(--color-primary)]" : "border-gray-300"
                                    }`}
                            >
                                <span
                                    className={`absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full ${step.active ? "bg-purple-600" : "bg-gray-300"
                                        }`}
                                ></span>
                            </div>


                            <div className="w-full flex flex-col gap-1 sm:gap-2">
                                <p className="text-sm text-[var(--color-muted)]">{step.status}</p>
                                <p className="text-base sm:text-lg">{step.desc}</p>
                            </div>
                        </div>


                        <div className="sm:w-[20%] flex sm:justify-end text-sm sm:text-base ">
                            <p>{step.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default TrackingStatus