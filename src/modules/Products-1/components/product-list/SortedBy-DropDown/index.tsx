import SelectMenu from "@/components/ui/drop-down"
import { useState } from "react"

const SortedbySelectMenu = () => {

    const FilterOption = [
        { filterValue: "Low toHigh", filterName: "Price: Low to High", },
        { filterValue: "High to Low", filterName: "Price: High to Low" },
        { filterValue: "Newest", filterName: "Newest" },
        { filterValue: "Oldest", filterName: "Oldest" }]

    const [ sortValue, setSortValue ] = useState<string>("Newest")

    return (
        <>
            <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-end gap-4 px-4 sm:px-6 lg:px-8">

                <div className="text-center sm:text-left">
                    <p className="text-[var(--color-muted)]">Showing 1–15 of 1000 Products</p>
                </div>

              <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                    <p className="text-[var(--color-muted)] whitespace-nowrap">Sorted By:</p>

                    <SelectMenu value={sortValue} options={ FilterOption} onValueChange={setSortValue} />
                </div>
            </div>
        </>
    )
}

export default SortedbySelectMenu