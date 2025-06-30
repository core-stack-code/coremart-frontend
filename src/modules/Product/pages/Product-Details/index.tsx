import Icon from '@/components/ui/icons'
import { useState } from 'react';
import ProductCardGrid from '../../components/Product-Category/Product Card';
import cardjsondata from "../../apis/Product-Category/card.json"


const ProductDetails = () => {


    const [filters, setFilters] = useState({ size: "XS" }); 

    const toggleOption = (category: keyof typeof filters, value: string) => {
        setFilters((prev) => ({
            ...prev,
            [category]: value, 
        }));
    };

    const Size = ["XS", "S", "M", "XXL", "L", "XL", "SL"];

    return (
        <>
            <div className="mx-auto md:w-[80%] lg:w-[90%] xl:w-[90%]  w-[80%] px-4 md:px-10 lg:px-20 py-8 space-y-10">

                {/* Breadcrumb */}
                <span className="text-purple-600">Home &gt; Category &gt; Men &gt; Top Wear &gt; T-Shirt</span>


                {/* Main Section */}
                <div className="flex flex-col lg:flex-row gap-10">


                    {/* Left Product Image */}
                    <div className="w-full h-auto lg:w-1/2 space-y-2">
                        <div className="p-4 flex justify-center ">
                            <img
                                src="/All-Category/Bottom-Wear/125.jpg"
                                alt="product"
                                className="w-[80%] border-[#E5E7EB] border-2 rounded-2xl object-cover h-[400px]" />
                        </div>

                        {/* Thumbnails */}
                        <div className="flex gap-4 justify-between w-[80%] mx-auto">
                            {[1, 2, 3, 4].map((_, i) => (
                                <img
                                    key={i}
                                    src="/All-Category/Bottom-Wear/115.jpg"
                                    alt="thumb"
                                    className="h-20 w-20 object-cover border-[#E5E7EB] border-2  rounded-2xl cursor-pointer"
                                />
                            ))}
                        </div>
                    </div>


                    {/* Right Details */}
                    <div className="flex-row w-full lg:w-1/2 space-x-10 space-y-6">
                        <h1 className="text-2xl font-bold">Urban Wild: Illustrated Fox Graphic T-shirt by Nike</h1>
                        <p className="text-sm text-gray-500">T-Shirt</p>


                        {/* Offers */}
                        <div className="flex flex-col  gap-4">
                            <span className="text-sm w-fit flex bg-purple-200 text-purple-700 px-3 py-1 rounded-full"><Icon name='paymentdiscountIcon' width={24} height={24} />10% OFF on UPI Payments</span>
                            <span className="text-sm w-fit flex bg-purple-200 text-purple-700 px-3 py-1 rounded-full"><Icon name='purchasediscountIcon' width={24} height={24} />Get ₹100 off on First Purchase</span>
                        </div>


                        {/* Ratings & Meta Info */}
                        <div className="flex flex-row justify-between items-center text-sm text-gray-600">
                            <span className='flex gap-4 items-center'><Icon name="starIcon" width={24} height={24} />4.9 Ratings</span>
                            <span>2.3k Reviews</span>
                            <span>2K+ Sold</span>
                        </div>


                        {/* Brand and Availability */}
                        <div className="flex gap-10 text-sm">
                            <span>Brand :<b> Nike</b></span>
                            <span>Color :<b> White</b></span>
                        </div>

                        <div className="flex text-sm text-[#10B981] gap-2"><Icon name='stockIcon' width={24} height={24} /> In stock</div>


                        {/* Price */}
                        <div className="text-sm">
                            <span >Total Price :
                                <b className='mx-8 text-xl font-bold text-[#9333EA]'>₹ 999</b>
                            </span>
                        </div>


                        {/* Sizes */}
                        <div className="w-full">
                            <h3 className="font-bold text-lg mb-3">Size</h3>

                            <div className="flex items-center h-[50px] ">
                                <div className="bg-purple-200 h-[60%] rounded-full px-6 gap-4 flex items-center justify-center">
                                    {Size.map((size) => {
                                        const selected = filters.size === size; // 👈 updated for single selection
                                        return (
                                            <div key={size} className="w-12 flex items-center justify-center">
                                                {selected ? (
                                                    <button
                                                        onClick={() => toggleOption("size", size)}
                                                        className="w-12 h-12 text-sm font-bold rounded-full bg-white text-[#9333EA] border border-[#9333EA] shadow-[0_0_8px_rgba(0,0,0,0.3)] z-10 transition-all duration-300 flex items-center justify-center"
                                                    >
                                                        {size}
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={() => toggleOption("size", size)}
                                                        className="text-sm font-bold text-[#9333EA] transition-all duration-300"
                                                    >
                                                        {size}
                                                    </button>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>




                        {/* Action Buttons */}
                        <div className="flex flex-row  justify-start grid-cols-2 mt-10 gap-10 mx-auto">
                            <button className="flex items-center justify-center gap-3 h-[50px] border border-purple-500 text-purple-600 text-md px-4 py-2 rounded-2xl w-full sm:w-auto">
                                <Icon name="addtocartIcon" width={18} height={20} />
                                Add To Cart
                            </button>
                            <button className="flex items-center justify-center w-[30%] gap-3 h-[50px] border bg-purple-500 text-white text-md  font-bold px-4 py-2 rounded-2xl">
                                Buy Now
                            </button>
                        </div>


                        {/* Product Detail */}
                        {/* <div className="w-full p-6 space-y-4 rounded-[20px] border-[#E5E7EB] border-2">
                            <h2 className="text-[#9333EA] text-lg font-semibold flex items-center gap-2">
                                <Icon name="mailIcon" width={18} height={18} />
                                Product Details
                            </h2>

                            <div className="flex flex-row justify-start gap-25">
                                <div className='w-[50%]  flex flex-col gap-3 text-[#6B7280]'>
                                    <span className="font-bold">Product Name</span>
                                    <span className="font-bold">Brand</span>
                                    <span className="font-bold">Color</span>
                                    <span className="font-bold">Material</span>
                                    <span className="font-bold">Fit</span>
                                    <span className="font-bold">Pattern</span>
                                    <span className="font-bold">Collar</span>
                                    <span className="font-bold">Suitable for</span>
                                    <span className="font-bold">Description</span>
                                </div >

                                <div className='flex flex-col w-full gap-3 text-[#6B7280]'>
                                    <p>Urban Wild Fox Graphic T-Shirt</p>
                                    <p> Nike</p>
                                    <p>White</p>
                                    <p>100% Cotton</p>
                                    <p> Regular Fit</p>
                                    <p> Multi-color graphic print</p>
                                    <p> Rounded</p>
                                    <p> Casual wear</p>
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestias doloribus officiis blanditiis alias asperiores. Culpa aspernatur ipsum voluptatibus suscipit corrupti nesciunt doloribus, porro unde iure nemo illum cum accusantium.</p>
                                </div>
                            </div >
                        </div > */}

                        <div className="w-full p-6 space-y-4 rounded-[20px] border-[#E5E7EB] border-2">
                            <h3 className="text-xl text-[#9333EA] flex gap-3 font-bold mb-4">
                                <Icon name="detailsIcon" width={30} height={30} />
                                Product Details
                            </h3>

                            <div className="w-full flex flex-col justify-between gap-3 text-[#6B7280]">
                                {/* <div className='w-full text-[#6B7280]'> */}

                                <div className='flex justify-between '>
                                    <span className="w-[50%] font-bold">Product Name</span>
                                    <p className='w-[50%] flex justify-start'>Urban Wild Fox Graphic T-Shirt</p>
                                </div>

                                <div className='flex justify-between '>
                                    <span className="w-[50%] font-bold">Brand</span>
                                    <p className='w-[50%] flex justify-start'>Nike</p>
                                </div>

                                <div className='flex justify-between '>
                                    <span className="w-[50%] font-bold">Color</span>
                                    <p className='w-[50%] flex justify-start'>White</p>
                                </div>

                                <div className='flex justify-between '>
                                    <span className="w-[50%] font-bold">Material</span>
                                    <p className='w-[50%] flex justify-start'>100% Cotton</p>
                                </div>

                                <div className='flex justify-between '>
                                    <span className="w-[50%] font-bold">Fit</span>
                                    <p className='w-[50%] flex justify-start'>Regular Fit</p>
                                </div>

                                <div className='flex justify-between '>
                                    <span className="w-[50%] font-bold">Pattern</span>
                                    <p className='w-[50%] flex justify-start'>Multi-color graphic print</p>
                                </div>
                                <div className='flex justify-between '>
                                    <span className="w-[50%] font-bold">Collar</span>
                                    <p className='w-[50%] flex justify-start'>Rounded</p>
                                </div>
                                <div className='flex justify-between '>
                                    <span className="w-[50%] font-bold">Suitable For</span>
                                    <p className='w-[50%] flex justify-start'>Casual Wear</p>
                                </div>

                                <div className='flex justify-between '>
                                    <span className="w-[50%] font-bold flex items-center">Description</span>
                                    <p className='w-[50%] flex justify-start'>Urban Wild Fox Graphic T-Shirt Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatum qui pariatur ipsum ullam exercitationem in fuga optio incidunt, quibusdam, tempora explicabo,  suscipit officia cumque ipsam?</p>
                                </div>
                            </div >

                            {/* <div className='flex flex-col w-full gap-3 text-[#6B7280]'> */}
                            {/* <p> Nike</p>
                                    <p>White</p>
                                    <p>100% Cotton</p>
                                    <p> Regular Fit</p>
                                    <p> Multi-color graphic print</p>
                                    <p> Rounded</p>
                                    <p> Casual wear</p>
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestias doloribus officiis blanditiis alias asperiores. Culpa aspernatur ipsum voluptatibus suscipit corrupti nesciunt doloribus, porro unde iure nemo illum cum accusantium.</p> */}
                            {/* </div> */}
                            {/* </div > */}
                        </div >


                        {/* Review & Reting */}
                        <div className="w-full p-6 rounded-[20px] border-[#E5E7EB] border-2">
                            <h2 className="text-xl text-[#9333EA] flex gap-3 font-bold mb-4">
                                <Icon name='detailsratingstarIcon' width={29} height={29} />
                                Reviews & Rating
                            </h2>

                            <div className=" flex flex-row justify-between gap-6 p-4">
                                {/* Left: Average Rating */}
                                <div className="flex flex-col  w-[50%]">

                                    <div className=' flex flex-row gap-2 '>
                                        <p className="text-4xl font-semibold">4.9</p>
                                        <p className="text-yellow-400 font-bold text-4xl">
                                            <Icon name='starIcon' width={40} height={40} /></p>
                                    </div>

                                    <div className=''>
                                        <p className="flex text-lg text-[#6B7280]">5k+ Rating &<br /> 2.3k+ Reviews
                                        </p>
                                    </div>

                                </div>

                                {/* Right: Rating Distribution */}
                                <div className="flex flex-col gap-1 w-full max-w-md">
                                    {[
                                        { stars: 5, count: 3324, color: 'bg-green-500', width: 'w-[95%]' },
                                        { stars: 4, count: 1251, color: 'bg-green-400', width: 'w-[70%]' },
                                        { stars: 3, count: 225, color: 'bg-green-300', width: 'w-[55%]' },
                                        { stars: 2, count: 150, color: 'bg-yellow-400', width: 'w-[30%]' },
                                        { stars: 1, count: 80, color: 'bg-red-400', width: 'w-[15%]' },
                                    ].map((item) => (
                                        <div key={item.stars} className="flex items-center gap-2 text-sm">
                                            <span className="w-4 text-right font-medium">{item.stars}</span>
                                            <span className="font-bold text-2xl">
                                                <Icon name='starIcon' width={20} height={20} /></span>
                                            <div className="flex-1 h-2 bg-gray-200 rounded overflow-hidden">
                                                <div className={`h-full ${item.color} ${item.width} rounded`}></div>
                                            </div>
                                            <span className="text-gray-600 w-12 text-right">{item.count.toLocaleString()}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col">
                                {[
                                    {
                                        name: 'Sachit Dabhi',
                                        comment: `"Cool and unique design!"`,
                                        description: 'Really loved the fox illustration—it’s different from the usual prints. Got compliments the first day I wore it. Fits perfectly too!'
                                    },
                                    {
                                        name: 'Jay Moteriya',
                                        comment: `"Nice but print could be sharper"`,
                                        description: 'Design is cool, but I expected the colors to pop a bit more in real life. Still a decent tee for everyday use.'
                                    },
                                    {
                                        name: 'Maulik Kali',
                                        comment: `"Great quality fabric"`,
                                        description: 'The cotton feels soft and breathable. Print looks durable after a couple of washes. Wish they had more colors though.'
                                    },
                                    {
                                        name: 'Kunjesh Patadiya',
                                        comment: `"Love the fox theme!"`,
                                        description: 'As an animal lover, this was an instant buy. The detailing in the design is amazing and it fits true to size.'
                                    }
                                ].map((review, idx) => (
                                    <div key={idx} className=" rounded-md px-4 py-2 text-sm">
                                        <div className="flex items-center">
                                            <span className="flex mr-3.5 text-2xl">
                                                <Icon name='starIcon' width={20} height={20} />
                                                <Icon name='starIcon' width={20} height={20} />
                                                <Icon name='starIcon' width={20} height={20} />
                                                <Icon name='starIcon' width={20} height={20} />
                                                <Icon name='starIcon' width={20} height={20} />
                                            </span>
                                        </div>
                                        <p className="text-[#6B7280] font-bold">{review.comment}</p>
                                        <p className="text-[#6B7280]">{review.description}</p>
                                        <span className="text-[#6366F1] italic"><b>-</b>{review.name}</span>
                                    </div>
                                ))}
                            </div>

                        </div>

                    </div >
                </div >


                {/* Card */}
                <div className='border-[#E5E7EB] border-2 rounded-[20px] p-4'>
                    <h2 className="text-xl text-[#9333EA] flex gap-3 font-bold mb-4"><Icon name='similarproductIcon' width={29} height={29} />Similar Products</h2>
                    <div className="flex justify-center">
                        <div className="flex flex-row overflow-x-auto gap-15 scrollbar-hidden ">

                            {
                                cardjsondata.map((productcard, index) => {
                                    return (
                                        <ProductCardGrid key={index} item={productcard} />
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>




            </div >
        </>
    )
}

export default ProductDetails