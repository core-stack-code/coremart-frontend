import Icon from '@/components/ui/icons';
import { useEffect, useRef, useState } from 'react'

const SortedbyDropDown = () => {

    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            <div className="relative" ref={dropdownRef}>
                <div className="flex items-center gap-2">
                    <p className="text-[#7B7B7B]">Sorted By:</p>

                    {/* Dropdown Trigger Box */}
                    <div className="relative">
                        <div
                            onClick={toggleDropdown}
                            className="flex justify-between items-center rounded-[20px] border-[#E5E7EB] border-2 p-2 w-36 cursor-pointer"
                        >
                            <span className="text-sm text-black">Newest</span>
                            <Icon name="dropdownarrowIcon" width={18} height={18} />
                        </div>

                        {/* Dropdown Menu */}
                        {isOpen && (
                            <div className="absolute left-0 top-full mt-1 bg-[#F5F5F5] rounded-xl shadow-lg p-4 w-48 z-50">
                                <ul className="space-y-2 text-[#4B5563] font-medium">
                                    <li className="hover:text-black cursor-pointer">Price : Low to High</li>
                                    <li className="hover:text-black cursor-pointer">Price : High to Low</li>
                                    <li className="hover:text-black cursor-pointer">Customer Rating</li>
                                    <li className="hover:text-black cursor-pointer">Newest</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SortedbyDropDown