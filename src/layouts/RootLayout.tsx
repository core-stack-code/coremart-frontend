import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

const RootLayout: React.FC = () => {
    const location = useLocation()

    return (
        <div className='flex w-full h-full flex-col'>
            {location.pathname === '/' ? (
                <div className='w-full h-16 bg-primary text-white flex items-center justify-center'>
                    <h1 className='text-2xl font-bold'>Home Page</h1>
                </div>
            ) : (
                <main className='w-full h-full'>
                    <Outlet />
                </main>
            )}
        </div>
    )
}

export default RootLayout
