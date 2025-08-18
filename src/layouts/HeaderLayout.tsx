import Hamburger from "@/components/ui/header/Hamburger-Component/Hamburger";
import MobileViewHamburger from "@/components/ui/header/Mobile-Hamburger-Component/MobileViewHamburger";
import Navbar from "@/components/ui/header/Navbar-Component/Navbar";
import Profile from "@/components/ui/header/Profile-Component/Profile";
import SearchBar from "@/components/ui/header/SearchBar-Component/SearchBar";
import Whislist from "@/components/ui/header/Whislist-Component/Whislist";
import { useState } from "react"
import { Outlet } from "react-router-dom"
import FooterLayout from "./FooterLayout";
import Icon from "@/components/ui/icons";

const HeaderLayout = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className='w-full bg-background'>
        <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto px-10 py-4">
          <div className="flex items-center gap-4">
            <div className='w-full h-fit'>
              <img src='/New-Logo.svg' alt='Logo' className='w-20 h-auto object-contain' />
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

        <main className='w-full h-full'>
          <Outlet />
        </main>
      </div>
      <FooterLayout />
    </>
  )
}

export default HeaderLayout