import WhislistSavedCard from '../../components/Whislist-Saved/Whislist-Saved-Card';
import WhislistSavedNavbar from '../../components/Whislist-Saved/WhislistSaved-Navber';
import ProductCard from '@/./utils/Main/Product-card.json'

const Saved = () => {

    
    return (
        <>

            <div className="p-6 lg:p-10">

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