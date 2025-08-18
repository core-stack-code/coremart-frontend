import Icon from "@/components/ui/icons"

const lala = [
    {
        id: 1,
        image: "/All-Category/Bottom-Wear/106.jpg", // Replace with actual image path
        title: "WOMEN",
        desc: "Party One Piece",
        size: "Small XL",
        color: "white",
        price: 2500,
        quantity: 1,
    },
    {
        id: 2,
        image: "/All-Category/Bottom-Wear/106.jpg", // Replace with actual image path
        title: "MEN",
        desc: "Party Waer",
        size: "Small md",
        color: "Black",
        price: 5000,
        quantity: 3,
    },
]



const YourCart = () => {

    return (
        <>
            <div className="w-full flex justify-end px-10">
                <div className="relative w-[40%] rounded-[var(--border-radius)] border-[var(--color-border)]">

                    <div className="absolute mt-2 w-full bg-white border border-[var(--color-border)] flex flex-col  rounded-2xl z-50 gap-y-2 p-4">
                        {lala.map((curCard, index) => {
                            return (
                                <div key={index} className="w-full bg-white border border-[var(--color-border)] flex flex-col  rounded-2xl gap-y-2 p-4 ">
                                    <div className="h-auto flex justify-between items-center rounded-2xl">
                                        <div className="flex text-[var(--color-star)var(--color-muted)] ">
                                            <img
                                                src="/All-Category/Bottom-Wear/106.jpg"
                                                alt="T-shirt"
                                                className="w-20 object-fit mr-2"
                                            />
                                            <div className="text-xs w-50 flex flex-col justify-center gap-2">
                                                <span className="text-[var(--color-muted)]">
                                                    Urban Wild: Illustrated Fox Graphic T-shirt by Nike
                                                </span>
                                                <p>
                                                    T-Shirt
                                                </p>
                                                <p>Price  :<span className="text-[var(--color-primary)] font-bold"> ₹999 </span></p>
                                            </div>
                                        </div>


                                        <div className="flex flex-col gap-5 text-[12px] p-5">
                                            <div className=" w-auto flex items-center justify-center gap-4 rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.2)]">
                                                <button
                                                    // onClick={() => updateQuantity(item.id, "dec")}
                                                    className=" text-purple-600 font-bold"
                                                >
                                                    -
                                                </button>
                                                <span className="px-3 py-1  text-sm">1</span>
                                                <button
                                                    // onClick={() => updateQuantity(item.id, "inc")}
                                                    className="text-[var(--color-primary)] font-bold"
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <div>
                                                <p className="text-[var(--color-muted)]">Total price  :<span className="text-[var(--color-primary)] font-bold"> ₹999 </span></p>
                                            </div>

                                        </div>


                                        <div className="p-5">
                                            <Icon name="deleteIcon" width={20} height={21} />
                                        </div>
                                    </div>

                                </div>
                            )
                        })}
                        <div className=" flex flex-col gap-3">
                            <div className="flex justify-around text-[var(--color-muted)]">
                                <p>Total quantity</p>
                                <p className="font-bold">4</p>
                                <p>Cart Total</p>
                                <p className="font-bold">₹4800</p>
                            </div>
                            <div className="flex justify-around gap-5">
                                <button className="w-full py-1 rounded-full border border-[#9333EA] text-[#9333EA] bg-white hover:bg-[var(--color-primary-hover)]/9 ">
                                    Go to cart
                                </button>
                                <button className="w-full py-1 rounded-full bg-purple-600 hover:bg-[var(--color-primary-hover)] text-[var(--color-background)]">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>













            <div className=" w-[85%] mx-auto my-9">

                <h2 className="text-2xl font-semibold mb-1">Your Cart</h2>
                <p className="text-[var(--color-muted)] mb-6">{lala.length} items in your cart.</p>

                {/* <div className="flex flex-col lg:flex-row gap-8"> */}


                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left - Cart Table */}
                    <div className="w-full border-[var(--color-border)] border rounded-[var(--border-radius)] p-4 overflow-x-auto">
                        <div className="grid grid-cols-[auto_130px_130px_130px]  font-bold pb-4 px-2 gap-14">
                            <p >Product</p>
                            <p className=" flex justify-center">Price</p>
                            <p className=" flex justify-center ">Quantity</p>
                            <p className=" flex justify-center">Total Price</p>
                        </div>

                        {lala.map((item, index) => (
                            <div key={index}>
                                <div
                                    className="grid grid-cols-[auto_130px_130px_130px] items-center py-4 px-2 gap-14"
                                >
                                    {/* Product */}
                                    <div className="shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-[var(--border-radius)] flex items-center gap-4 h-35 p-3">
                                        {/* <div className="h-35  bg-white rounded-xl "> */}
                                        <img src={item.image} alt="Product" className="w-28 h-full object-cover rounded-[var(--border-radius)]" />
                                        {/* </div> */}
                                        <div>
                                            <p className="font-semibold">{item.title}</p>
                                            <p className="text-[var(--color-muted)]">{item.desc}</p>
                                            <p className="text-[var(--color-muted)] text-sm">
                                                Size: <span className="text-black font-medium">{item.size}</span>
                                            </p>
                                            <p className="text-[var(--color-muted)] text-sm">
                                                Color: <span className="text-black font-medium">{item.color}</span>
                                            </p>
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <p className=" flex justify-center font-medium">₹ {item.price}</p>

                                    {/* Quantity */}
                                    <div className=" w-auto flex items-center justify-center gap-4 rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.2)]">
                                        <button
                                            // onClick={() => updateQuantity(item.id, "dec")}
                                            className=" text-[var(--color-primary)] font-bold"
                                        >
                                            -
                                        </button>
                                        <span className="px-3 py-1  text-sm">{item.quantity}</span>
                                        <button
                                            // onClick={() => updateQuantity(item.id, "inc")}
                                            className="text-[var(--color-primary)] font-bold"
                                        >
                                            +
                                        </button>
                                    </div>

                                    {/* Total */}
                                    <p className="flex justify-center font-medium">₹ {item.price * item.quantity}</p>
                                </div>
                                <hr className="border border-[var(--color-border)]" />
                            </div>
                        ))}
                    </div>


                    {/* Cart Summary */}
                    <div className="w-full lg:w-1/3 border-[var(--color-border)] border-2 rounded-[var(--border-radius)] p-6 h-fit">
                        <h3 className="text-lg font-bold mb-4">Cart Total</h3>
                        <div className="flex flex-col gap-15 text-sm">
                            <div>
                                <div className="flex justify-between text-[var(--color-muted)]">
                                    <span >Subtotal</span>
                                    <span className="font-bold">₹ 5000</span>
                                </div>
                                <div className="flex justify-between text-[var(--color-error)]">
                                    <span className="text-[var(--color-muted)]">Discount</span>
                                    <span className="font-bold">-₹ 200</span>
                                </div>
                            </div>
                            <div>

                                <hr className="text-[var(--color-muted)]" />
                                <div className="flex justify-between text-[var(--color-muted)]">
                                    <span >Cart total</span>
                                    <span className="font-bold">₹ 4800</span>
                                </div>
                            </div>
                        </div>
                        <button className="mt-6 w-full py-1 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--color-background)] ">
                            Checkout
                        </button>
                    </div>


                </div>
            </div>
        </>
    )
}

export default YourCart