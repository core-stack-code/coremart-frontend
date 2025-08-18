import WhislistSavedCard from '../../components/Whislist-Saved/Whislist-Saved-Card';
import WhislistSavedNavbar from '../../components/Whislist-Saved/WhislistSaved-Navber';

const Saved = () => {

    
    return (
        <>

            <div className="p-6 lg:p-10">

                <WhislistSavedNavbar />

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 py-5">

                    {[1, 2].map((index) => {
                        return (
                            <WhislistSavedCard key={index} />

                        )
                    })}
                </div>

            </div >
        </>
    )
}

export default Saved