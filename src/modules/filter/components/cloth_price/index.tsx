import React from 'react'

interface CLothPriceProps{
  filters:{price: [number, number]},
  setFilters:React.Dispatch<React.SetStateAction<any>>
}
const MIN = 0
const MAX=30000

const ClothPrice:React.FC<CLothPriceProps> = ({filters, setFilters}) => {


  return (
    <>
      <div className="mb-2">
        <h3 className="font-semibold text-lg mb-3">Price</h3>
        <p className="text-sm text-[var(--color-muted)] mb-3">
          ₹{filters.price[0]} - ₹{filters.price[1]}
        </p>
        <div className="flex gap-2 items-center">
          <input
            type="range"
            min={MIN}
            max={MAX}
            value={filters.price[0]}
            onChange={(e) =>
              setFilters((prev:any) => ({
                ...prev,
                price: [Number(e.target.value), MAX],
              }))
            }
            className="w-full accent-[var(--color-primary)]"
          />
          {/* <input
            type="range"
            min={100}
            max={300}
            value={filters.price[1]}
            onChange={(e) =>
              setFilters((prev:any) => ({
                ...prev,
                price: [prev.price[0], Number(e.target.value)],
              }))
            }
            className="w-full accent-purple-500"
          /> */}
        </div>
      </div>
    </>
  )
}

export default ClothPrice