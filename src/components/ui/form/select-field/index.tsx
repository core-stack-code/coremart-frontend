import React from "react"
import { 
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "../../select"

interface SelectFieldProps {
    value: string,
    options: { label: string, value: string }[],
    onValueChange: (value: string) => void,
}


const SelectField: React.FC<SelectFieldProps> = ({ value, options, onValueChange }) => {
    return (
        <Select value={value} onValueChange={onValueChange}>
            <SelectTrigger className="w-full sm:w-auto md:w-45 flex justify-between items-center rounded-xl border-border border-2 px-3 py-1.5 cursor-pointer">
                <SelectValue placeholder={value} />
            </SelectTrigger>

            <SelectContent className="absolute left-0 top-full mt-1 bg-[#F5F5F5] rounded-xl border-none shadow-lg z-50 w-full sm:w-auto md:w-auto">
                <SelectGroup>
                    {options.map((option, index) => (
                        <SelectItem
                            key={index}
                            value={option.value}
                            className="text-black cursor-pointer"
                        >
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default SelectField