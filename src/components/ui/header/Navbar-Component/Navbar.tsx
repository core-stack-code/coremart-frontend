import { NavLink,} from "react-router-dom"

export const NavigationItems = [
  { label: 'Home', path: '/' },
  { label: 'Category', path: '/product/category' },
  { label: 'Product List', path: '/product' },
  { label: 'About', path: '/about' },
  { label: 'Contact Us', path: '/contact' }
];


const Navbar = () => {
  return (
    <ul className="hidden lg:flex gap-8 font-medium">
      {NavigationItems.map((nav, index) => (
        <NavLink
          key={index} 
          to={nav.path} 
          className={({ isActive }) => isActive ? "text-purple-600 underline underline-offset-4" : "text-gray-700"} 
          end 
          >
            {nav.label}
          </NavLink>
      ))}
    </ul>
  )
}

export default Navbar