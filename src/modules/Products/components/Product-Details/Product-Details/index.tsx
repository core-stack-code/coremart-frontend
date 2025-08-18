import Icon from '@/components/ui/icons'

const Details = () => {
    return (
        <>

            <div className="w-full p-6 space-y-4 rounded-[20px] border-[var(--color-border)] border">
                <h3 className="text-xl text-[var(--color-primary)] flex gap-3 font-bold mb-4">
                    <Icon name="detailsIcon" width={30} height={30} />
                    Product Details
                </h3>

                <div className="w-full flex flex-col justify-between gap-4 text-[var(--color-muted)]">
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
        </>
    )
}

export default Details