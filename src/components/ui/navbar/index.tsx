// import React from "react";
// import { NavLink, useMatch,} from "react-router-dom"

// export const NavigationItems = [
//   { label: 'Home', path: '/' },
//   { label: 'Category', path: '/category' },
//   { label: 'Product List', path: '/product' },
//   { label: 'About', path: '/about' },
//   { label: 'Contact Us', path: '/contact' }
// ];


// const Navbar: React.FC = () => {
//   const isCategoryEnd = useMatch("/category/*")?.pattern.end;

//   return (
//     <ul className="hidden lg:flex gap-7 font-normal text-lg">
//       {NavigationItems.map((nav, index) => {
//         const isCategoryPage = nav.path === '/category' && isCategoryEnd;

//         return (
//           <NavLink
//             key={index} 
//             to={nav.path} 
//             className={({ isActive }) => isActive || isCategoryPage 
//               ? "text-primary" 
//               : "text-muted-secondry hover:text-primary/60"} 
//             end
//           >
//             {nav.label}
//           </NavLink>
//         )})}
//     </ul>
//   )
// }

// export default Navbar











import React from "react";
import { NavLink, useMatch, } from "react-router-dom"

export const NavigationItems = [
  { label: 'Home', path: '/' },
  { label: 'Category', path: '/category' },
  { label: 'Product List', path: '/product' },
  { label: 'About', path: '/about' },
  { label: 'Contact Us', path: '/contact' }
];


const Navbar: React.FC = () => {
  const isCategoryEnd = useMatch("/category/*")?.pattern.end;

  return (
    <ul className="hidden lg:flex gap-7 font-normal text-lg">
      {NavigationItems.map((nav, index) => {
        const isCategoryPage = nav.path === '/category' && isCategoryEnd;

        return (
          <NavLink
            key={index}
            to={nav.path}
            className={({ isActive }) => isActive || isCategoryPage
              ? "text-primary"
              : "text-white hover:text-primary"}
            end
          >
            {nav.label}
          </NavLink>
        )
      })}
    </ul>
  )
}

export default Navbar