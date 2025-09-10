import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icons'
import { getCardDetails } from '@/store/slices/productSlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'


interface WhislistSavedCardProps {
    item: any
}

const WhislistSavedCard: React.FC<WhislistSavedCardProps> = ({ item }) => {

    const { itemTotal, product, quantity } = item

    const [withoutWhislistCheck, setWithoutWhislistCheck] = useState(true)

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
            <div className="w-full flex justify-between rounded-2xl overflow-hidden border-[var(--color-border)] border relative">
                <div className="absolute top-3 right-3 text-lg">
                    <button onClick={() => {
                        withoutWhislistCheck ? setWithoutWhislistCheck(false) : setWithoutWhislistCheck(true)

                    }}>
                        <Icon name="whislistIcon" width={25} height={25}
                            fill={withoutWhislistCheck ? "var(--color-background)" : "var(--color-whislist)"}
                            stroke={withoutWhislistCheck ? "#6B7280" : "var(--color-background)"} />
                    </button>
                </div>

                <div className="rounded-2xl flex justify-center items-center">
                    <img
                        src={product.image}
                        alt={product.image}
                        className="h-full w-[250px] rounded-2xl object-cover"
                    />
                </div>
                <div className=" w-full flex flex-col justify-center gap-2 px-2">
                    <div className='w-[90%] flex flex-col gap-3'>
                        <div>
                            <p>{product.name}</p>
                        </div>
                        <div>
                            <p className="text-xs  mb-1">Brand : <span className="font-semibold">{product.slug}</span></p>
                            <p className="text-xs mb-1">T-Shirt : <span className="font-semibold">{product.slug}</span></p>
                        </div>
                    </div>

                    <div className="flex gap-2 md:flex-col md:gap-y-2 lg:flex-row xl:flex-row items-center">
                        <span className="text-lg font-bold text-[var(--color-primary)]">₹{product.price}</span>
                        <Button className="flex justify-center items-center gap-2 border border-[var(--color-primary)] text-[var(--color-primary)] text-xs px-3 py-1 rounded-full hover:bg-[var(--color-primary)]/5 transition" onClick={cardDetails}>
                            <Icon name="addtocartIcon" width={18} height={20} />
                            Add to Cart
                        </Button>
                        {
                            location.pathname !== '/product/saved' ?
                                <Button className="flex justify-center items-center gap-2 border border-[var(--color-primary)] text-[var(--color-primary)] text-xs px-3 py-1 rounded-full hover:bg-[var(--color-primary)]/5 transition">
                                    Save for later
                                </Button> : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhislistSavedCard