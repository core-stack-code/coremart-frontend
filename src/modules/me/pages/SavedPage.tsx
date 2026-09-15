import WhislistSavedNavbar from '../components/whislist_saved_navber'
import WhislistSavedCard from '../components/whislist_saved_card'
import { WHISLIST_PRODUCT } from '@/lib/helper/testData'

const Saved = () => {

    const data = WHISLIST_PRODUCT
    // here we will call api for saved

    return (
        <div className="w-full">
            <WhislistSavedNavbar />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 py-5">
                {data.map((product) => {
                    return <WhislistSavedCard key={product._id} product={product} variant="saved" />
                })}
            </div>

        </div>
    )
}

export default Saved