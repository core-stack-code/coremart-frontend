import { NavLink } from "react-router-dom"
import { NavigationItems } from "../Navbar-Component/Navbar"

const MobileViewHamburger = () => {

  // const MobileNavigationItems = [
  //   { label: 'Home', path: '/product/home' },
  //   { label: 'Category', path: '/product/category' },
  //   { label: 'Product List', path: '/product/productlist' },
  //   { label: 'About', path: '/product/about' },
  //   { label: 'Contact Us', path: '/product/contact' }
  // ];

  return (
    <>
      <div className="lg:hidden px-6 pb-4">

        <ul className="flex flex-col space-y-3 font-medium">

          {
            NavigationItems.map((value, index) => {
              const { label, path } = value
              return (
                <NavLink to={path} key={index} className={({ isActive }) => isActive ? " hover:text-purple-600 text-purple-600 underline underline-offset-4" : "text-gray-700"}>{label}</NavLink>
              )
            })
          }

        </ul>



        {/* <ul className="flex flex-col space-y-3 font-medium">
          <NavLink to={'/product/home'} className={({isActive}) => isActive ? " hover:text-purple-600 text-purple-600 underline underline-offset-4" : "text-gray-700"}>Home</NavLink>
          <NavLink to={'/product/category'} className={({isActive}) => isActive ? " hover:text-purple-600 text-purple-600 underline underline-offset-4" : "text-gray-700"}>Category</NavLink>
          <NavLink to={'/product/productlist'} className={({isActive}) => isActive ? " hover:text-purple-600 text-purple-600 underline underline-offset-4" : "text-gray-700"}>Product list</NavLink>
          <NavLink to={'/product/about'} className={({isActive}) => isActive ? " hover:text-purple-600 text-purple-600 underline underline-offset-4" : "text-gray-700"}>About</NavLink>
          <NavLink to={'/product/contact'} className={({isActive}) => isActive ? " hover:text-purple-600 text-purple-600 underline underline-offset-4" : "text-gray-700"}>Contact Us</NavLink>
        </ul> */}

      </div>
    </>
  )
}

export default MobileViewHamburger