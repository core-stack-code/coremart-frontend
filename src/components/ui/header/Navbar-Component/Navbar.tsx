import { NavLink } from "react-router-dom"




export const NavigationItems = [
  { label: 'Home', path: '/product/home' },
  { label: 'Category', path: '/product/category' },
  { label: 'Product List', path: '/product/productlist' },
  { label: 'About', path: '/product/about' },
  { label: 'Contact Us', path: '/product/contact' }
];



const Navbar = () => {

  return (
    <>
   
      <ul className="hidden lg:flex gap-10 font-medium">

        {
          NavigationItems.map((value, index) => {
            const {label, path} = value
            return (
              <NavLink to={path} key={index} className={({ isActive }) => isActive ? "text-purple-600 underline underline-offset-4" : "text-gray-700"} >{label}</NavLink>
            )
          })
        }


        {/* <ul className="hidden lg:flex gap-10 font-medium">
          <NavLink to={'/product/home'} className={({ isActive }) => isActive ? "text-purple-600 underline underline-offset-4" : "text-gray-700"} >Home</NavLink>
          <NavLink to={'/product/category'} className={({ isActive }) => isActive ? "text-purple-600 underline underline-offset-4" : "text-gray-700"}>Category</NavLink>
          <NavLink to={'/product/productlist'} className={({ isActive }) => isActive ? "text-purple-600 underline underline-offset-4" : "text-gray-700"}>Product list</NavLink>
          <NavLink to={'/product/about'} className={({ isActive }) => isActive ? "text-purple-600 underline underline-offset-4" : "text-gray-700"}>About</NavLink>
          <NavLink to={'/product/contact'} className={({ isActive }) => isActive ? "text-purple-600 underline underline-offset-4" : "text-gray-700"}>Contact Us</NavLink>
        </ul> */}

      </ul>
    </>
  )
}

export default Navbar