import React from 'react'

interface CLothStyleProps{
  filters:{style: string[]},
  toggleOption:(category: "style", value:string) => void
}


const ClothStyle:React.FC<CLothStyleProps> = ({filters, toggleOption}) => {
  return (
    <>
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-3">Style</h3>
        <div className="transition grid grid-cols-3 gap-3 max-h-[125px] overflow-y-auto scrollbar-hidden">
          {["Party Wear", "Activewear", "Formal Wear", "Casual Wear"].map((style) => (
            <button
              key={style}
              onClick={() => toggleOption("style", style)}
              className={`rounded-2xl py-1  text-sm transition ${filters.style.includes(style)
                ? "bg-[#9333EA] text-white "
                : "border border-[#6B7280] text-[#6B7280] hover:bg-gray-100"
                }`}
            >
              {style}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default ClothStyle