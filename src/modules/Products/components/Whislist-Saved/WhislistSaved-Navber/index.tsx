import { NavLink } from "react-router-dom"

const WhislistSavedNavbar = () => {
    return (
        <>
            <div className="flex justify-around border-b border-[var(--color-border)]">
                <NavLink
                    to="/product/whislist"
                    className={({ isActive }) => `w-full flex justify-center items-center p-4 ${isActive ? " border-b-2 border-[#9333EA]" : "border-none"}`}
                >
                    <p className={`text-[25px] ${location.pathname === '/product/whislist' ? "text-[var(--color-primary)]" : "text-black"}`}>Your Wishlist</p>
                </NavLink>

                <NavLink
                    to="/product/saved"
                    className={({ isActive }) => `w-full flex justify-center items-center p-4 ${isActive ? " border-b-2 border-[var(--color-primary)]" : "border-none"}`}
                >
                    <p className={`text-[25px] ${location.pathname === '/product/saved' ? "text-[var(--color-primary)]" : "text-black"}`}>Saved Products</p>
                </NavLink>
            </div>
        </>
    )
}

export default WhislistSavedNavbar