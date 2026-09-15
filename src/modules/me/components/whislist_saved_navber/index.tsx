import { cn } from "@/lib/utils"
import { NavLink } from "react-router-dom"

const WhislistSavedNavbar = () => {
    return (
        <div className="w-full flex justify-between border-b text-center border-border">
            <NavLink
                to="/me/whislist"
                className={({ isActive }) =>
                    cn("w-full flex justify-center items-center",
                        isActive
                            ? "border-b-2 border-primary text-primary"
                            : "text-muted-secondry hover:text-primary/60"
                    )}
            >
                <p className="text-xl mb-2">Your Wishlist</p>
            </NavLink>
            <NavLink
                to="/me/saved"
                className={({ isActive }) =>
                    cn("w-full flex justify-center items-center",
                        isActive
                            ? "border-b-2 border-primary text-primary"
                            : "text-muted-secondry hover:text-primary/60"
                    )}
            >
                <p className="text-xl mb-2">Saved Products</p>
            </NavLink>
        </div>
    )
}

export default WhislistSavedNavbar