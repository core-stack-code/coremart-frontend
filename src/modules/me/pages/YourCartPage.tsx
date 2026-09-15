import { useAppSelector } from "@/hooks/redux"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import CartProductList from "../components/cart-product-list"


const YourCart = () => {

    const navigate = useNavigate();
    const cartProducts = useAppSelector(state => state.product.cart)

    const isCartEmpty = cartProducts.items.length === 0;

    const getContent = () => {
        if (isCartEmpty) {
            return (<div className="w-full min-h-50 flex flex-col gap-5 justify-center items-center border border-border rounded-rad text-muted">
                <h1>Your Cart is Empty</h1>
                <Button variant='outline' size='lg' onClick={() => navigate('/')}>Go To Shopping</Button>
            </div>)
        } else {
            return <CartProductList cartItems={cartProducts} />
        }
    }

    return (
        <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold">Your Cart</h2>
                {!isCartEmpty && <p className="text-muted">{cartProducts.items.length} items in your cart.</p>}
            </div>
            {getContent()}
        </div>
    )
}

export default YourCart