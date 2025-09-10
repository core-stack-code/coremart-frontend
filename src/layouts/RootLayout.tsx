import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout: React.FC = () => {
    return (
        <div className='flex w-full h-full items-center justify-center'>
            <main className='w-full h-full'>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout
