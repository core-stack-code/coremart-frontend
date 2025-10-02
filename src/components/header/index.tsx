import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '@/components/ui/navbar'
import Icon from '../ui/icons'
import SearchBar from '../search-bar'
import CardPopover from '../cart-popover'


const Header: React.FC = () => {
    return (
        <div className="w-full flex items-center justify-between py-6">
          <Link to="/">
            <Icon name='logo' width={64} height={64} />
          </Link>

          <Navbar />

          <SearchBar />

          <div className='flex gap-10 items-center'>
            <CardPopover />
            {/* <Link to="/me/cart" className='text-muted hover:text-primary/60'>
              <Icon name="cart" width={20} height={20} fill='none' stroke='currentColor' />
            </Link> */}

            <Icon name="bell" width={20} height={20} className='text-muted hover:text-primary/60' stroke='none' />

            <Link to="/me" className='text-muted hover:text-primary/60'>
              <div className='w-11 h-11 rounded-full border-2 border-muted hover:border-primary/60 flex items-center justify-center transition-colors duration-200 group'>
                <Icon name="profile" width={20} height={20} stroke='none' fill='none' />
              </div>
            </Link>
          </div>
      </div>
    )
}

export default Header

