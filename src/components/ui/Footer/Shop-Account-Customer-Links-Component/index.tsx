import { NavLink } from "react-router-dom"

const FooterNavLinks = () => {
    return (
        <>
            <ul className="space-y-4 flex flex-col">
                <NavLink to={''} className="hover:text-purple-600 hover:underline">Men</NavLink>
                <NavLink to={''} className="hover:text-purple-600 hover:underline">Women</NavLink>
                <NavLink to={''} className="hover:text-purple-600 hover:underline">Kids</NavLink>
                <NavLink to={''} className="hover:text-purple-600 hover:underline">New Arrivals</NavLink>
                <NavLink to={''} className="hover:text-purple-600 hover:underline">Sale</NavLink>
            </ul>
        </>
    )
}

export default FooterNavLinks