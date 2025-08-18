import Icon from '@/components/ui/icons'
import { useState } from 'react'

const WhislistSavedCard = () => {

    const [withoutWhislistCheck, setWithoutWhislistCheck] = useState(true)

    return (
        <>
            <div className=" w-full flex justify-between rounded-2xl overflow-hidden border-[var(--color-border)] border relative">
                <div className="absolute top-3 right-3 text-lg">
                    <button onClick={() => {
                        withoutWhislistCheck ? setWithoutWhislistCheck(false) : setWithoutWhislistCheck(true)

                    }}>
                        <Icon name="whislistIcon" width={25} height={25}
                            fill={withoutWhislistCheck ? "var(--color-background)" : "var(--color-whislist)"}
                            stroke={withoutWhislistCheck ? "#6B7280" : "var(--color-background)"} />
                    </button>
                </div>

                <div className="rounded-2xl flex justify-center items-center">
                    <img
                        src='/All-Category/Bottom-Wear/86.jpg'
                        alt='image'
                        className="h-full w-[250px] rounded-2xl object-cover"
                    />
                </div>
                <div className=" w-full flex flex-col justify-center gap-2 px-2">
                    <div className='w-[90%] flex flex-col gap-3'>
                        <div>
                            <p>Urban Wild: Illustrated Fox Graphic T-shirt by Nike</p>
                        </div>
                        <div>
                            <p className="text-xs  mb-1">Brand : <span className="font-semibold">Nike</span></p>
                            <p className="text-xs mb-1">T-Shirt : <span className="font-semibold"> White</span></p>
                        </div>
                    </div>

                    <div className="flex gap-2 md:flex-col md:gap-y-2 lg:flex-row xl:flex-row">
                        <span className="text-lg font-bold text-[var(--color-primary)]">₹ 5000</span>
                        <button className="flex justify-center items-center gap-2 border border-[var(--color-primary)] text-[var(--color-primary)] text-xs px-3 py-1 rounded-full hover:bg-[var(--color-primary)]/5 transition">
                            <Icon name="addtocartIcon" width={18} height={20} />
                            Add to Cart
                        </button>
                        {
                            location.pathname !== '/product/saved' ? 
                        <button className="flex justify-center items-center gap-2 border border-[var(--color-primary)] text-[var(--color-primary)] text-xs px-3 py-1 rounded-full hover:bg-[var(--color-primary)]/5 transition">
                            Save for later
                        </button> : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhislistSavedCard