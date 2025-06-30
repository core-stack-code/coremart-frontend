import Icon from '@/components/ui/icons'
import { useState } from 'react'

interface ProductCardGridProps {
  item: any
}


const ProductCardGrid: React.FC<ProductCardGridProps> = ({ item }) => {

  const [withoutWhislistCheck, setWithoutWhislistCheck] = useState(true)
  
  const { image_url, category_name, category_type, category_Price } = item

  return (
    <>

      <div className="w-64 flex-shrink-0  overflow-hidden border-[#E5E7EB] border-2 rounded-2xl bg-white relative">

        <div className="absolute top-3 right-3 text-red-500 text-lg">
          
            <button onClick={() => { 
              withoutWhislistCheck ? setWithoutWhislistCheck(false) : setWithoutWhislistCheck(true)
              
              }}>
              <Icon name="whislistIcon" width={25} height={25} 
              fill={withoutWhislistCheck?"#ffffff": "#EF4444"} 
              stroke={withoutWhislistCheck ? "#6B7280":"#ffffff" }/>
            </button>
          
         
        </div>

        <span className="absolute top-3 left-3 text-xs bg-[#9333EA] text-white px-2 py-0.5 rounded-full font-medium">
          New
        </span>
        <div className="bg-gray-100 rounded-2xl  flex justify-center items-center h-64">
          <img
            src={image_url}
            alt={image_url}
            className="h-full w-full border-[#E5E7EB] border-1 rounded-2xl object-cover"
          />
        </div>


        <div className="p-4">
          <h3 className="font-bold text-lg mb-1">
            {category_name}
          </h3>
          <p className="text-sm text-gray-500 mb-3">{category_type}</p>


          <div className="flex justify-between items-center">
            <span className="font-semibold text-lg text-gray-800">₹ {category_Price}</span>
            <button className="flex items-center gap-2 border border-purple-500 text-purple-600 text-xs px-3 py-1 rounded-full hover:bg-purple-50 transition">
              <Icon name="addtocartIcon" width={18} height={20} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default ProductCardGrid