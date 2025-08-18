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
                                    `w-28 flex items-center  justify-center text-md px-6 border border-[var(--color-primary)] py-1 rounded-2xl ${selectSize === size ? "bg-[var(--color-primary)] text-[var(--color-background)]" : "text-[var(--color-primary)] "}`
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