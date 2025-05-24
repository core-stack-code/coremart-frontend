import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout: React.FC = () => {
  return (
    <div className='w-full h-full bg-background flex flex-col'>
      <div className='w-full h-fit pl-10'>
        <img src='/logo.svg' alt='Logo' className='w-fit h-fit object-fill' />
      </div>
      <main className='w-full h-full'>
        <Outlet />
      </main>
    </div>
  )
}

export default AuthLayout
