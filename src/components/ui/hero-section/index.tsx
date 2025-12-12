import React from 'react'
import Icon from '../icons'

const HeroSection: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-between items-center">
      <div className="flex flex-col items-start h-full w-full gap-8 mb-6">
        <div className='w-full flex justify-start pl-50'>
          <Icon name="chatBubble" />
        </div>
        <div className='flex flex-col gap-1.5'>
          <h2 className="text-4xl font-bold">
            Style That <span className="text-primary"> Speaks </span>for You
          </h2>
          <p className="text-lg">
            Coremart brings you fashion that fits your lifestyle
          </p>
        </div>
      </div>

      <div className='relative min-w-124 min-h-148 max-w-125 max-h-148 mr-10'>
        <div className="w-full h-full rounded-[2.5rem] ">
          <img
            src="/hero1.png"
            alt="Home"
            className="h-full w-full overflow-hidden object-cover rounded-[2.5rem] bg-black"
          />
        </div>

        <div className="absolute bottom-[20%] left-[-2.5rem] border-4 border-white bg-sky-400 rounded-full flex justify-center items-center w-20 h-20 shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer hover:border-sky-100">
          <Icon name="leftArrow" width={38} height={38} />
        </div>

        <div className="absolute top-[20%] right-[-2.5rem] border-4 border-white bg-sky-400 rounded-full flex justify-center items-center w-20 h-20 shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer hover:border-sky-100">
          <Icon name="rightArrow" width={38} height={38} />
        </div>

      </div>
    </div>
  )
}

export default HeroSection
