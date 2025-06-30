import { NavLink } from "react-router-dom"

const MobileViewHamburger = () => {
  return (
    <>
      <div className="lg:hidden px-6 pb-4">
        <ul className="flex flex-col space-y-3 font-medium">
          <NavLink to={'/product/home'} className={({isActive}) => isActive ? " hover:text-purple-600 text-purple-600 underline underline-offset-4" : "text-gray-700"}>Home</NavLink>
          <NavLink to={'/product/category'} className={({isActive}) => isActive ? " hover:text-purple-600 text-purple-600 underline underline-offset-4" : "text-gray-700"}>Category</NavLink>
          <NavLink to={'/product/productlist'} className={({isActive}) => isActive ? " hover:text-purple-600 text-purple-600 underline underline-offset-4" : "text-gray-700"}>Product list</NavLink>
          <NavLink to={'/product/about'} className={({isActive}) => isActive ? " hover:text-purple-600 text-purple-600 underline underline-offset-4" : "text-gray-700"}>About</NavLink>
          <NavLink to={'/product/contact'} className={({isActive}) => isActive ? " hover:text-purple-600 text-purple-600 underline underline-offset-4" : "text-gray-700"}>Contact Us</NavLink>
        </ul>
      </div>
    </>
  )
}

export default MobileViewHamburger