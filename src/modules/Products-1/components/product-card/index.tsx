import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icons';
import { getCardDetails } from '@/store/slices/productSlice';
import type { ProductType } from '@/types/products'
import { Heart } from 'lucide-react';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

// TODO: leftlabel (change), right icon, title, categoru, image, random text (just drop ), price rating, add card button, 

type CardType = "new" | "rate" | "cart-btn" | "price"

// interface ProdcutCardProps {
//     product: ProductType,
//     leftLabel?: string,
//     type: CardType // make card according to need just send num value
// }



interface CartItem {
  product: {
    _id: string;
    name: string;
    slug: string;
    category: string;
    price: number;
    image: string; // single image
  };
  quantity: number;
  itemTotal: number;
}

interface ProductCardProps {
  item: CartItem;
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {

  const [withoutWhislistCheck, setWithoutWhislistCheck] = useState(true)

  const { itemTotal, product, quantity } = item

  const dispatch = useDispatch()

  const cardDetails = () => {
    const details = {
      product: {
        _id: product._id,
        name: product.name,
        slug: product.slug,
        category: product.category,
        price: product.price,
        image: product.image
      },
      quantity: quantity,
      itemTotal: itemTotal
    }

    dispatch(getCardDetails(details))
  }






  return (

    <div className="w-64 flex-shrink-0  overflow-hidden border-border border rounded-[var(--border-radius)] bg-white relative">

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

      <Badge variant="outline" className='absolute bg-primary top-2 left-2 border-none text-background px-3 rounded-2xl'>New</Badge>


      {/* For Image and naviagte */}

      <NavLink to={`/product/${item.product.slug}`} className="w-full h-64  flex justify-center items-center">
        {/* <div className="bg-[var(--color-muted)] rounded-[var(--border-radius)]  flex justify-center items-center h-64"> */}
        <img
          src={item.product.image}
          alt={item.product.image}
          className="h-full w-full   rounded-[var(--border-radius)] object-cover"
        />
        {/* </div> */}

      </NavLink>

      <div className="p-4 space-y-2">
        <h3 className="font-bold text-lg ">
          {item.product.name}
        </h3>
        <p className="text-md text-[var(--color-muted)]">{item.product.slug}</p>

        {/* <p className='text-[var(--color-primary)] font-semi text-sm'>Just Dropped</p>  */}

        {/* <div className="flex justify-between items-center">
                <div className='flex gap-2'>
                  <span className="font-bold text-lg text-[var(--color-primary)]">₹ {item.product.price}</span>
                  <span className="font-semi text-lg text-[var(--color-muted)] line-through">₹ 5100</span>
                </div>
                <Button className="flex items-center gap-2 bg-[var(--color-primary)]/30 text-[var(--color-primary)] text-xs px-3 py-1 rounded-full">
                  Save ₹100
                </Button>
              </div>  */}

        <div className="flex justify-between items-center">
          <span className="font-semibold text-lg text-muted">₹ {item.product.price}</span>
          <Button className="flex items-center gap-2 border border-primary text-primary bg-background text-xs px-3 py-1 rounded-full hover:bg-primary/5 transition"
            onClick={cardDetails}
          >
            <Icon name="addtocartIcon" width={18} height={20} />
            Add to Cart
          </Button>
        </div>
        {/* <div className="flex flex-col justify-between">
                <p className="text-sm text-muted mb-3">2.3k Reviews</p>
                <div className='flex gap-1'>
                  {[1, 2, 3, 4, 5].map((index) => {
                    return (
                      <Icon key={index} name="starIcon" width={23} height={23} />
                    )
                  })}
                  <p className='text-muted'>(4.5/5)</p>
                </div>
              </div>  */}


      </div>
    </div>
  )
}

export default ProductCard