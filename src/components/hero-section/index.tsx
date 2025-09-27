import React from 'react'
import Icon from '../ui/icons'

const HeroSection: React.FC = () => {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col justify-center w-full gap-5 text-center lg:text-left">
          <div className="flex justify-center">
            <Icon name="homeadIcon" width={224} height={124} />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">
              Style That <span className="text-primary"> Speaks </span>for You
            </h1>
            <p className="text-base sm:text-lg">
              Coremart brings you fashion that fits your lifestyle
            </p>
          </div>
        </div>

        <div className="w-full relative flex  md:justify-center">
          <img
            src="/home.svg"
            alt="Home"
            className="w-136 h-136 object-fill  rounded-xl"
          />

          <div className="absolute top-[75%] left-[5%] sm:left-[-10%] md:left-[8%] lg:left-[-12%] xl:left-[9%] bg-white rounded-full w-[40px] h-[70px] sm:w-[80px] sm:h-[80px] lg:w-[80px] lg:h-[80px] flex justify-center items-center rotate-180 shadow-md">
            <Icon name="seeallarrowIcon" width={70} height={70} />
          </div>

          <div className="absolute top-[45%] right-2 sm:right-[-10%] md:right-[9%] lg:right-[-10%] xl:right-[9%] bg-white rounded-full w-[40px] h-[70px] sm:w-[80px] sm:h-[80px] lg:w-[80px] lg:h-[80px] flex justify-center items-center shadow-md">
            <Icon name="seeallarrowIcon" width={70} height={70} />
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
