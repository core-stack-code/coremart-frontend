  import { useState } from "react"
  import { NavLink } from "react-router-dom"

  interface CategoryProps {
    item: any
  }

  const AllWear: React.FC<CategoryProps> = ({ item }) => {

    const [lable, setLable] = useState('T-Shirts')

    const { image_url, category_name } = item

    return (
      <>
        <div key={item} className="flex-shrink-0 w-auto p-2 text-center" onClick={() => setLable(item.category_name)}>
          <NavLink to={'/product/category'}>
            <div className={`w-32 h-32  flex justify-center items-center rounded-full bg-white 
          ${lable === category_name ? ' shadow-[0_0_10px_rgba(147,51,234,1)]' : 'shadow-none' } `}>
              <img
                src={image_url}
                alt={image_url}
                className=" w-28 h-28 object-cover mx-auto rounded-full" />
            </div>
            <p className={`text-bold text- mt-2 ${lable === category_name ? ' text-[#9633EA] font-bold' : 'text-[#6B7280]'}`}>{category_name}</p>
          </NavLink>
        </div>

      </>
    )
  }

  export default AllWear