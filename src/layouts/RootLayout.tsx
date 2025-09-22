import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import FooterLayout from './FooterLayout'
import Profile from '@/components/ui/header/Profile-Component/Profile'
import Icon from '@/components/ui/icons'
import SearchBar from '@/components/ui/header/SearchBar-Component/SearchBar'
import Navbar from '@/components/ui/header/Navbar-Component/Navbar'
import Hamburger from '@/components/ui/header/Hamburger-Component/Hamburger'
import Whislist from '@/components/ui/header/Whislist-Component/Whislist'
import MobileViewHamburger from '@/components/ui/header/Mobile-Hamburger-Component/MobileViewHamburger'

const RootLayout: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className='w-full h-full min-h-screen bg-background px-24'>
        <div className="flex items-center justify-between w-full pt-8">
          <div className="flex items-center">
            <div className='w-full h-fit'>
              <img src='/new-logo.svg' alt='Logo' className='w-20 h-auto object-fill' />
            </div>
            <Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </div>

          <Navbar />

          <SearchBar />

          <div className="flex items-center gap-10">
            <Whislist />
            <Icon name="notificationIcon" width={18} height={22} className=" text-gray-600 cursor-pointer" />
            <Profile />
          </div>
        </div>

        {isMenuOpen && <MobileViewHamburger />}

        <main className='w-full h-full pt-8 '>
            <Outlet />
        </main>
      </div>
      <FooterLayout />

    </>
  )
}

export default RootLayout
