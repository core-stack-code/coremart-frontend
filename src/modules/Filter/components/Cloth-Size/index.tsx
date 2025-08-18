import React from 'react'


interface ClothSizeProps {
  filters: { size: string[] },
  toggleOption: (category: "size", value: string) => void
}


const Size = ["XS", "S", "M", "XXL", "L", "XL", "SL"]

const ClothSize: React.FC<ClothSizeProps> = ({ filters, toggleOption }) => {

  return (
    <>
      {/* <div className="mb-6">
        <h3 className="font-semibold text-lg mb-3">Size</h3>

        <div className="relative flex justify-center">
          
          <div className="bg-purple-300 rounded-full px-4 py-1 flex gap-6 items-center justify-center min-w-[100%]">
            {Size.map((size) => {
              const selected = filters.size.includes(size);
              return (
                <div key={size} className="relative">
                  <button
                    onClick={() => toggleOption("size", size)}
                    className={`text-sm font-bold transition-all ${selected
                      ? "absolute -top-4  -translate-x-1/2 z-20 bg-white text-purple-600 px-4 py-1 rounded-full w-10 h-10 shadow-lg border border-purple-500 flex items-center justify-center"
                      : "text-purple-700"
                      }`}
                  >
                    {selected ? size : <span className="relative z-10">{size}</span>}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}


      <div className="w-full">
        <h3 className="font-bold text-lg mb-3">Size</h3>

        <div className=" flex items-center h-[50px] ">
          {/* Pill Background */}
          <div className="bg-purple-200 h-[60%] w-fit  rounded-full px-3 py-3 gap-1 flex items-center justify-center">
            {Size.map((size) => {
              const selected = filters.size.includes(size);
              return (
                <div key={size} className="w-10 flex items-center justify-center">
                  {selected ? (
                    <button
                      onClick={() => toggleOption("size", size)}
                      className="w-10 h-10 text-sm font-bold rounded-full bg-white text-[var(--color-primary)] border border-[var(--color-border)] shadow-[0_0_8px_rgba(0,0,0,0.3)] z-10 transition-all duration-300 flex items-center justify-center"
                    >
                      {size}
                    </button>
                  ) : (
                    <button
                      onClick={() => toggleOption("size", size)}
                      className="text-sm font-bold text-[var(--color-primary)] transition-all duration-300"
                    >
                      {size}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>


    </>
  )
}

export default ClothSize