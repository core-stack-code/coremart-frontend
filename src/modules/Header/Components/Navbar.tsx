import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    // <nav className="space-x-8 py-10 bg-white  text-base ">
    //   <a href="#" className="hover:text-purple-600 transition">Home</a>
    //   <a href="#" className="hover:text-purple-600 transition">Category</a>
    //   <a href="#" className="hover:text-purple-600 whitespace-nowrap">Product list</a>
    //   <a href="#" className="hover:text-purple-600 transition">About</a>
    //   <a href="#" className="hover:text-purple-600 transition whitespace-nowrap">Contact Us</a>
    // </nav>

    <>
      <ul className="hidden lg:flex gap-10 font-medium">
        <NavLink to={'/product/home'} className={({ isActive }) => isActive ? "text-purple-600 underline underline-offset-4" : "text-gray-700"} >Home</NavLink>
        <NavLink to={'/product/category'} className={({ isActive }) => isActive ? "text-purple-600 underline underline-offset-4" : "text-gray-700"}>Category</NavLink>
        <NavLink to={'/product/productlist'} className={({ isActive }) => isActive ? "text-purple-600 underline underline-offset-4" : "text-gray-700"}>Product list</NavLink>
        <NavLink to={'/product/about'} className={({ isActive }) => isActive ? "text-purple-600 underline underline-offset-4" : "text-gray-700"}>About</NavLink>
        <NavLink to={'/product/contact'} className={({ isActive }) => isActive ? "text-purple-600 underline underline-offset-4" : "text-gray-700"}>Contact Us</NavLink>
      </ul>
    </>
  )
}

export default Navbar