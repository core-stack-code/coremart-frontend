import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout: React.FC = () => {
  return (
      <div className='w-full h-full min-h-screen flex justify-between bg-background'>
      {/* <div className='w-full pt-8 flex items-center justify-start'>
        <img src='/new-logo.svg' alt='Logo' className='w-20 h-auto object-fill' />
      </div> */}
      {/* <main className='w-full h-full flex justify-between pt-12'> */}
        <Outlet />
      {/* </main> */}
    </div>
  )
}

export default AuthLayout
