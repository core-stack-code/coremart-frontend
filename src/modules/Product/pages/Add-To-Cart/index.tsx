import { useState } from "react"


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
    }
]


const AddToCart = () => {

    return (
        <>
            <div className=" w-[85%] mx-auto my-9">
                <h2 className="text-2xl font-semibold mb-1">Your Cart</h2>
                <p className="text-gray-500 mb-6">5 items in your cart.</p>

                {/* <div className="flex flex-col lg:flex-row gap-8"> */}


                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left - Cart Table */}
                    <div className="w-full border-[#E5E7EB] border-2 rounded-[20px] p-4 overflow-x-auto">
                        <div className="grid grid-cols-[auto_130px_130px_130px]  font-bold pb-4 px-2 gap-14">
                            <p >Product</p>
                            <p className=" flex justify-center">Price</p>
                            <p className=" flex justify-center ">Quantity</p>
                            <p className=" flex justify-center">Total Price</p>
                        </div>

                        <div className="">
                            {lala.map((item) => (
                                <div
                                    key={item.id}
                                    className="grid grid-cols-[auto_130px_130px_130px] items-center py-4 px-2 gap-14"
                                >
                                    {/* Product */}
                                    <div className="shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-[20px] flex items-center gap-4 h-35 p-3">
                                        {/* <div className="h-35  bg-white rounded-xl "> */}
                                        <img src={item.image} alt="Product" className="w-28 h-full object-cover rounded-[20px]" />
                                        {/* </div> */}
                                        <div>
                                            <p className="font-semibold">{item.title}</p>
                                            <p className="text-gray-500">{item.desc}</p>
                                            <p className="text-gray-500 text-sm">
                                                Size: <span className="text-black font-medium">{item.size}</span>
                                            </p>
                                            <p className="text-gray-500 text-sm">
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
                                            className=" text-purple-600 font-bold"
                                        >
                                            -
                                        </button>
                                        <span className="px-3 py-1  text-sm">{item.quantity}</span>
                                        <button
                                            // onClick={() => updateQuantity(item.id, "inc")}
                                            className="text-purple-600 font-bold"
                                        >
                                            +
                                        </button>
                                    </div>

                                    {/* Total */}
                                    <p className="flex justify-center font-medium">₹ {item.price * item.quantity}</p>
                                </div>
                            ))}
                        </div>
                    </div>


































                    {/* <div className=" w-full flex border rounded-xl p-4">

                        <div className='border grid grid-cols-2 '>
                            <div className="border grid font-semibold ">
                                <div className="border h-14">
                                <span>Product</span>

                                </div>
                            </div>

                            <div className='border grid grid-cols-3 gap-30'>
                                <span>Price</span>
                                <span>Quantity</span>
                                <span>Total Price</span>
                            </div>

                        </div>
                    </div> */}




















                    {/* Cart Summary */}
                    <div className="w-full lg:w-1/3 border-[#E5E7EB] border-2 rounded-[20px] p-6 h-fit">
                        <h3 className="text-lg font-bold mb-4">Cart Total</h3>
                        <div className="flex flex-col gap-15 text-sm">
                            <div>
                                <div className="flex justify-between text-[#6B7280]">
                                    <span >Subtotal</span>
                                    <span className="font-bold">₹ 5000</span>
                                </div>
                                <div className="flex justify-between text-red-500">
                                    <span className="text-[#6B7280]">Discount</span>
                                    <span className="font-bold">-₹ 200</span>
                                </div>
                            </div>
                            <div>

                                <hr className="text-[#E5E7EB]" />
                                <div className="flex justify-between text-[#6B7280]">
                                    <span >Cart total</span>
                                    <span className="font-bold">₹ 4800</span>
                                </div>
                            </div>
                        </div>
                        <button className="mt-6 w-full py-1 rounded-full bg-purple-600 hover:bg-purple-700 text-white ">
                            Checkout
                        </button>
                    </div>


                </div>
            </div>
        </>
    )
}

export default AddToCart