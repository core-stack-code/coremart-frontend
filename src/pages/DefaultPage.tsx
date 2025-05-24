import React from 'react'

interface DefaultPageProps {
    pageName: string
}

const DefaultPage: React.FC<DefaultPageProps> = ({ pageName }) => {
  return (
    <div className='w-full h-full min-h-screen flex items-center justify-center'>
      <h1 className='text-2xl font-bold'>{pageName}</h1>
    </div>
  )
}

export default DefaultPage
