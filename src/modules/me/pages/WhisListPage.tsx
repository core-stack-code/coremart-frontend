import WhislistSavedNavbar from '@/modules/me/components/whislist_saved_navber'
import WhislistSavedCard from '@/modules/me/components/whislist_saved_card'
import { WHISLIST_PRODUCT } from '@/lib/helper/testData'

const Whislist = () => {

    const data = WHISLIST_PRODUCT
    // here we will call api for whislist

    return (
        <div className="w-full">
            <WhislistSavedNavbar />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 py-5">
                {data.filter(ele => ele.isFav).map((product) => {
                    return <WhislistSavedCard key={product._id} product={product} />
                })}
            </div>

        </div>
    )
}

export default Whislist