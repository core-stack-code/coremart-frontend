import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icons'
import { getCardDetails } from '@/store/slices/productSlice'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

interface ProductCardListProps {
  item: any
}

const ProductListCard: React.FC<ProductCardListProps> = ({ item }) => {

  const [withoutWhislistCheck, setWithoutWhislistCheck] = useState(true)

  const { itemTotal, product, quantity } = item

  const disPatch = useDispatch()

  const getDetails = () => {
    const details = {
      product: {
        _id: "68641dc25b4c4aae182f8e1b",
        name: product.name,
        slug: "relaxed-pants",
        category: product.slug,
        price: product.price,
        image: product.image
      },
      quantity: quantity,
      itemTotal: itemTotal
    }
    disPatch(getCardDetails(details))
  }

  return (
    <>
      <div className="w-full flex rounded-2xl overflow-hidden border-[#E5E7EB] border-2 relative">

        <div className="absolute top-3 right-3 text-red-500 text-lg">
          <button onClick={() => {
            withoutWhislistCheck ? setWithoutWhislistCheck(false) : setWithoutWhislistCheck(true)

          }}>
            <Icon name="whislistIcon" width={25} height={25}
              fill={withoutWhislistCheck ? "#ffffff" : "#EF4444"}
              stroke={withoutWhislistCheck ? "#6B7280" : "#ffffff"} />
          </button>
        </div>

        <span className="absolute top-3 left-3 text-xs bg-[#9333EA] text-white px-2 py-0.5 rounded-full font-medium">
          New
        </span>
        <NavLink to={'/product/:productid'}>

          <div className=" rounded-2xl flex justify-center items-center h-64">
            <img
              src={product.image}
              alt={product.image}
              className="h-full w-[250px] rounded-2xl object-cover"
            />
          </div>

        </NavLink>

        <div className="w-full flex flex-col justify-around ">
          <div className='mx-10'>

            <h3 className="font-bold text-lg  mb-1">
              {product.name}
            </h3>
            <p className="text-md text-gray-500 mb-3">{product.slug}</p>
            <p className="text-sm  text-black mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>


            <div className="flex justify-start gap-4">
              <span className="text-lg font-bold text-primary">₹ {product.price}</span>
              <Button className="flex items-center gap-2 bg-background border border-primary text-primary hover:bg-primary/5  rounded-full text-xs px-3 py-1" onClick={getDetails}>
                <Icon name="addtocartIcon" width={18} height={20} />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ProductListCard