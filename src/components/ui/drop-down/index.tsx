import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../select"


interface DropDownMenuProps {
    value?: string,
    options: { filterName: string, filterValue: string }[],
    onValueChange?: (value: string) => void,
}


const DropDownMenu: React.FC<DropDownMenuProps> = ({ value, options, onValueChange }) => {

    if (onValueChange) { console.log(value) }
    return (
        <Select value={value} onValueChange={onValueChange}>
            <SelectTrigger className="w-full sm:w-auto md:w-auto flex justify-between items-center rounded-[var(--border-radius)] border-border border-2 px-4 py-2 cursor-pointer">
                <SelectValue placeholder={value} />
            </SelectTrigger>

            <SelectContent className="absolute left-0 top-full mt-1 bg-[#F5F5F5] rounded-xl border-none shadow-lg z-50 w-full sm:w-auto md:w-auto">
                <SelectGroup>
                    {
                        options.map((option, index) => {
                            return (
                                <SelectItem
                                    key={index}
                                    value={option.filterValue}
                                    className="text-black cursor-pointer">{option.filterName}</SelectItem>
                            )
                        })
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default DropDownMenu