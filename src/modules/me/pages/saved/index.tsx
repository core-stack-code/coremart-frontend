import ProductCard from '@/./utils/Main/Product-card.json'
import WhislistSavedNavbar from '../../components/whislist_saved/Whislist_Saved_Navber'
import WhislistSavedCard from '../../components/whislist_saved/Whislist_Saved_Card'

const Saved = () => {

    
    return (
        <>

            <div className="w-full">

                <WhislistSavedNavbar />

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 py-5">

                    {ProductCard.data.cart.items.slice(0,4).map((curProductCard) => {
                        return (
                            <WhislistSavedCard key={curProductCard.product._id} item={curProductCard}/>
                        )
                    })}
                </div>

            </div >
        </>
    )
}

export default Saved