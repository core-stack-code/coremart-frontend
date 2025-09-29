import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const SortedbyDropDown = () => {

    return (
        <>
            <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-end gap-4 px-4 sm:px-6 lg:px-8">

                
                <div className="text-center sm:text-left">
                    <p className="text-[var(--color-muted)]">Showing 1–15 of 1000 Products</p>
                </div>

                
                <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                    <p className="text-[var(--color-muted)] whitespace-nowrap">Sorted By:</p>

                    <Select>
                        <SelectTrigger className="w-full sm:w-auto md:w-auto flex justify-between items-center rounded-[var(--border-radius)] border-[var(--color-border)] border-2 px-4 py-2 cursor-pointer">
                            <SelectValue placeholder="Newest" />
                        </SelectTrigger>

                        <SelectContent className="absolute left-0 top-full mt-1 bg-[#F5F5F5] rounded-xl border-none shadow-lg z-50 w-full sm:w-auto md:w-auto">
                            <SelectGroup>
                                <SelectItem value="Low-to-High" className="text-black cursor-pointer">Price : Low to High</SelectItem>
                                <SelectItem value="High-to-Low" className="text-black cursor-pointer">Price : High to Low</SelectItem>
                                <SelectItem value="Customer-Rating" className="text-black cursor-pointer">Customer Rating</SelectItem>
                                <SelectItem value="Newest" className="text-black cursor-pointer">Newest</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>


        </>
    )
}

export default SortedbyDropDown