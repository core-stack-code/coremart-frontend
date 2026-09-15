import { NavLink } from "react-router-dom"

const FooterNavLinks = () => {
    return (
        <>
            <ul className="space-y-4 flex flex-col">
                <NavLink to={''} className="hover:text-primary hover:underline">Men</NavLink>
                <NavLink to={''} className="hover:text-primary hover:underline">Women</NavLink>
                <NavLink to={''} className="hover:text-primary hover:underline">Kids</NavLink>
                <NavLink to={''} className="hover:text-primary hover:underline">New Arrivals</NavLink>
                <NavLink to={''} className="hover:text-primary hover:underline">Sale</NavLink>
            </ul>
        </>
    )
}

export default FooterNavLinks