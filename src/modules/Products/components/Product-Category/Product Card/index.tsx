import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icons'
import { getCardDetails } from '@/store/slices/productSlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

interface ProductCardGridProps {
  item: any
  cardType: string
}

const ProductCardGrid: React.FC<ProductCardGridProps> = ({ item, cardType }) => {

  
  const [withoutWhislistCheck, setWithoutWhislistCheck] = useState(true)

  const { itemTotal, product, quantity } = item

  const dispatch = useDispatch()

  const cardDetails = () => {
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

    dispatch(getCardDetails(details))
  }

  return (
    <>


      <div className="w-64 flex-shrink-0  overflow-hidden border-[var(--color-border)] border rounded-[var(--border-radius)] bg-white relative">

        <div className="absolute top-3 right-3  text-lg">

          <button onClick={() => {
            withoutWhislistCheck ? setWithoutWhislistCheck(false) : setWithoutWhislistCheck(true)

          }}>
            <Icon name="whislistIcon" width={25} height={25}
              fill={withoutWhislistCheck ? "var(--color-background)" : "var(--color-whislist)"}
              stroke={withoutWhislistCheck ? "var(--color-muted)" : "var(--color-background)"} />
          </button>
        </div>


        {/* For Badge */}

        {
          cardType === "NewArrivals" || cardType === "TrendingOffer" || cardType === "TrendingProduct" ?
            <Badge variant="outline" className='absolute bg-[var(--color-primary)] top-2 left-2 border-none text-[var(--color-background)] px-3 rounded-2xl'>New</Badge> : null
        }


        {/* For Image and naviagte */}

        <NavLink to={'/product/:productid'}>
          <div className="bg-[var(--color-muted)] rounded-[var(--border-radius)]  flex justify-center items-center h-64">
            <img
              src={product.image}
              alt={product.image}
              className="h-full w-full border-[var(--color-border)] border rounded-2xl object-cover"
            />
          </div>

        </NavLink>

        <div className="p-4 space-y-2">
          <h3 className="font-bold text-lg ">
            {product.name}
          </h3>
          <p className="text-md text-[var(--color-muted)]">{product.slug}</p>



          {
            cardType === 'NewArrivals' ?
              <p className='text-[var(--color-primary)] font-semi text-sm'>Just Dropped</p> : null
          }



          {
            cardType === 'TrendingOffer' ?
              <div className="flex justify-between items-center">
                <div className='flex gap-2'>
                  <span className="font-bold text-lg text-[var(--color-primary)]">₹ {product.price}</span>
                  <span className="font-semi text-lg text-[var(--color-muted)] line-through">₹ 5100</span>
                </div>
                <Button className="flex items-center gap-2 bg-[var(--color-primary)]/30 text-[var(--color-primary)] text-xs px-3 py-1 rounded-full">
                  Save ₹100
                </Button>
              </div> : null
          }


          {
            cardType === 'RecommendedRecent' ?
              <div className="flex justify-between items-center">
                <span className="font-semibold text-lg text-[var(--color-muted)]">₹ {product.price}</span>
                <Button className="flex items-center gap-2 border border-[var(--color-primary)] text-[var(--color-primary)] text-xs px-3 py-1 rounded-full hover:bg-[var(--color-primary)]/5 transition"
                  onClick={cardDetails}
                >
                  <Icon name="addtocartIcon" width={18} height={20} />
                  Add to Cart
                </Button>
              </div> : null
          }

          {
            cardType === 'TrendingProduct' ?
              <div className="flex flex-col justify-between">
                <p className="text-sm text-[var(--color-muted)] mb-3">2.3k Reviews</p>
                <div className='flex gap-1'>
                  {[1, 2, 3, 4, 5].map((index) => {
                    return (
                      <Icon key={index} name="starIcon" width={23} height={23} />
                    )
                  })}
                  <p className='text-[var(--color-muted)]'>(4.5/5)</p>
                </div>
              </div> : null
          }

        </div>
      </div>

    </>
  )
}

export default ProductCardGrid