import React from 'react'

interface CLothTypeProps {
  filters: { type: string[] },
  toggleOption: (category: "type", value: string) => void
}


const ClothType: React.FC<CLothTypeProps> = ({ filters, toggleOption }) => {
  return (
    <>
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-3">Type</h3>
        <div className="transition grid grid-cols-3 gap-3 max-h-[125px] overflow-y-auto scrollbar-hidden">
          {["T-Shirts", "Jeans", "Dresses", "Jackets"].map((type) => (
            <button
              key={type}
              onClick={() => toggleOption("type", type)}
              className={`rounded-2xl py-1 text-sm transition ${filters.type.includes(type)
                ? "bg-purple-600 text-white "
                : "border border-[#6B7280] text-[#6B7280] hover:bg-gray-100"
                }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default ClothType