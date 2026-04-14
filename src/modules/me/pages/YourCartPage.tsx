import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import CartProductList from "../components/cart-product-list"
import { Typography } from "@/components/ui/typography"
import { useProductState } from "@/store/state"


const YourCart = () => {

    const navigate = useNavigate();
    const cartProducts = useProductState(state => state.cart)

    const isCartEmpty = cartProducts.items.length === 0;

    const getContent = () => {
        if (isCartEmpty) {
            return (<div className="w-full min-h-50 flex flex-col gap-5 justify-center items-center border border-border rounded-rad text-muted">
                <Typography variant='large'>Your Cart is Empty</Typography>
                <Button variant='outline' size='lg' onClick={() => navigate('/')}>Go To Shopping</Button>
            </div>)
        } else {
            return <CartProductList cartItems={cartProducts} />
        }
    }

    return (
        <div className="flex flex-col gap-7 bg-accent/5">
            <div className="flex flex-col gap-3">
                <Typography variant='h1' className="font-bold">Shopping Cart</Typography>
                {!isCartEmpty && <Typography className="text-muted">{cartProducts.items.length} items in your cart.</Typography>}
            </div>
            {getContent()}
        </div>
    )
}

export default YourCart