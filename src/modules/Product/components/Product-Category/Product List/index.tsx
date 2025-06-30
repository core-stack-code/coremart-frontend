import Icon from '@/components/ui/icons'
import React from 'react'

interface ProductCardListProps {
  item: any
}

const ProductCardList: React.FC<ProductCardListProps> = ({ item }) => {

  const { image_url, category_name, category_type, category_Price } = item

  return (
    <>
      <div className=" w-full flex rounded-2xl overflow-hidden border-[#E5E7EB] border-2 relative">

        <div className="absolute top-3 right-3 text-red-500 text-lg">
          <Icon name="whislistIcon" width={25} height={25} />
        </div>

        <span className="absolute top-3 left-3 text-xs bg-[#9333EA] text-white px-2 py-0.5 rounded-full font-medium">
          New
        </span>
        <div className=" rounded-2xl flex justify-center items-center h-64">
          <img
            src={image_url}
            alt={image_url}
            className="h-full w-[250px] rounded-2xl object-cover"
          />
        </div>


        <div className="w-full flex flex-col justify-around ">
          <div className='mx-10'>

            <h3 className="font-bold text-lg  mb-1">
              {category_name}
            </h3>
            <p className="text-md text-gray-500 mb-3">{category_type}</p>
            <p className="text-sm  text-black mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>


            <div className="flex justify-start gap-4">
              <span className="text-lg font-bold text-[#9333EA]">₹ {category_Price}</span>
              <button className="flex items-center gap-2 border border-purple-500 text-purple-600 text-xs px-3 py-1 rounded-full hover:bg-purple-50 transition">
                <Icon name="addtocartIcon" width={18} height={20} />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ProductCardList