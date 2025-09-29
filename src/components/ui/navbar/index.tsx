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
    <ul className="hidden lg:flex gap-7 font-normal text-lg">
        {NavigationItems.map((nav, index) => (
            <NavLink
                key={index} 
                to={nav.path} 
                className={({ isActive }) => isActive ? "text-primary" : "text-muted-secondry hover:text-primary/60"} 
                end 
            >
                {nav.label}
            </NavLink>
        ))}
    </ul>
  )
}

export default Navbar