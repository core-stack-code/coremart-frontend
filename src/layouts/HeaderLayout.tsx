import Hamburger from "@/modules/Header/Components/Hamburger";
import MobileViewHamburger from "@/modules/Header/Components/MobileViewHamburger";
import Navbar from "@/modules/Header/Components/Navbar";
import Notification from "@/modules/Header/Components/Notification";
import Profile from "@/modules/Header/Components/Profile";
import SearchBar from "@/modules/Header/Components/SearchBar";
import Whislist from "@/modules/Header/Components/Whislist";
import { useState } from "react"
import { Outlet } from "react-router-dom"
import FooterLayout from "./FooterLayout";

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
            <Notification />
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