import { NavLink } from "react-router-dom"

const WhislistSavedNavbar = () => {
    return (
        <>
            <div className="flex justify-around border-b border-border">
                <NavLink
                    to="/me/whislist"
                    className={({ isActive }) => `w-full flex justify-center items-center p-4 ${isActive ? " border-b-2 border-primary" : "border-none"}`}
                >
                    <p className={`text-[25px] ${location.pathname === '/me/whislist' ? "text-primary" : "text-black"}`}>Your Wishlist</p>
                </NavLink>

                <NavLink
                    to="/me/saved"
                    className={({ isActive }) => `w-full flex justify-center items-center p-4 ${isActive ? " border-b-2 border-primary" : "border-none"}`}
                >
                    <p className={`text-[25px] ${location.pathname === '/me/saved' ? "text-primary" : "text-black"}`}>Saved Products</p>
                </NavLink>
            </div>
        </>
    )
}

export default WhislistSavedNavbar