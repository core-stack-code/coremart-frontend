import { Button } from '@/components/ui/button';
import { useState } from 'react'


const Sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const Size = () => {

    const [selectSize, setSelectSize] = useState<string | null>("XS")

    return (
        <>
            <div className="flex items-center flex-wrap gap-4">
                {
                    Sizes.map((size, index) => {
                        return (
                            <Button key={index}
                                onClick={() => { setSelectSize(size) }}
                                className={
                                    `w-30 flex items-center  justify-center text-sm px-6 border border-primary py-1 rounded-2xl ${selectSize === size ? "bg-primary text-background" : "bg-background text-primary "}`
                                }
                            >
                                {size}
                            </Button>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Size