import React from 'react'


interface ClothBrandProps {
  filters: { brand: string[] },
  toggleOption: (category: "brand", value: string) => void
}


const ClothBrand:React.FC<ClothBrandProps> = ({filters, toggleOption}) => {
  return (
    <>
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-3">Brand</h3>
        <div className="transition grid grid-cols-3 gap-3 max-h-[125px] overflow-y-auto scrollbar-hidden">
          {["Puma", "Adidas", "Nike", "Kappa"].map((brand) => (
            <button
              key={brand}
              onClick={() => toggleOption("brand", brand)}
              className={`rounded-2xl py-1 text-sm transition ${filters.brand.includes(brand)
                ? "bg-purple-600 text-white "
                : "border border-[#6B7280] text-[#6B7280]"
                }`}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default ClothBrand