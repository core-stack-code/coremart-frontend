import { useState } from "react"

const SearchBar = () => {

  const [input, setInput] = useState("")

  return (
    <>


      <div className="relative w-[280px] sm:w-[200px] md:w-[240px] xl:w-[280px] rounded-[20px] border-border border-2">

        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M21 21l-4.35-4.35M17.5 10.5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-full focus:ring-purple-500 focus:border-purple-500"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {input && (
          <div className="absolute mt-2 w-full bg-white border-2 border-[#E5E7EB] flex flex-col  rounded-2xl z-50 gap-y-2 p-2">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex items-center p-2 border-1 border-[#E5E7EB] rounded-2xl">
                <img
                  src="/All-Category/Bottom-Wear/106.jpg" // replace this with dynamic image
                  alt="T-shirt"
                  className="w-15 object-fit mr-2"
                />
                <div className="text-xs">
                  <p className="font-medium text-[#6B7280]">
                    Urban Wild: Illustrated Fox Graphic T-shirt by Nike
                  </p>
                  <p className="text-[#6B7280]">
                    Brand : <span className="text-black">Nike</span>
                  </p>
                  <p className="text-[#6B7280]">
                    Color : <span className="text-black">White</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>





    </>
  )
}

export default SearchBar