// import React from 'react'
// import { Link } from 'react-router-dom'
// import Navbar from '@/components/ui/navbar'
// import Icon from '../ui/icons'
// import SearchBar from '../search-bar'
// import CartPopover from '../cart-popover'


// const Header: React.FC = () => {
//     return (
//         <div className="w-full flex items-center justify-between py-6">
//           <Link to="/">
//             <Icon name='logo' width={64} height={64} />
//           </Link>

//           <Navbar />

//           <SearchBar />

//           <div className='flex gap-10 items-center'>
//             <CartPopover />

//             <Icon name="bell" width={20} height={20} className='text-muted hover:text-primary/60 cursor-pointer' stroke='none' />

//             <Link to="/me" className='text-muted hover:text-primary/60'>
//               <div className='w-11 h-11 rounded-full border-2 border-muted hover:border-primary/60 flex items-center justify-center transition-colors duration-200 group'>
//                 <Icon name="profile" width={20} height={20} stroke='none' fill='none' />
//               </div>
//             </Link>
//           </div>
//       </div>
//     )
// }

// export default Header

import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '@/components/ui/navbar'
import Icon from '../ui/icons'
import SearchBar from '../search-bar'
import CartPopover from '../cart-popover'


const Header: React.FC = () => {
  return (
    <div className="w-full min-h-21 flex items-center justify-between px-15 py-2 bg-black rounded-full my-3 ">
      <Link to="/">
        <Icon name='logo' width={53} height={53} />
      </Link>

      <Navbar />


      <div className='flex gap-5 items-center'>
        {/* <CartPopover /> */}
        <SearchBar />

        {/* <Icon name="bell" width={20} height={20} className='text-muted hover:text-primary/60 cursor-pointer' stroke='none' /> */}

        {/* <Link to="/me" className='text-muted hover:text-primary/60'>
          <div className='w-11 h-11 rounded-full border-2 border-muted hover:border-primary/60 flex items-center justify-center transition-colors duration-200 group'>
            <Icon name="profile" width={20} height={20} stroke='none' fill='none' />
          </div>
        </Link> */}

        <Link to="/me" className='text-muted hover:text-primary/60'>
          <img src='/profile_avtar.svg' alt='profile' className='w-11 h-11 rounded-full' />
        </Link>
      </div>
    </div>
  )
}

export default Header

