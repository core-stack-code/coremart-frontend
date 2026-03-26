// import React from 'react'
// import Icon from '@/components/ui/icons'
// import { Typography } from '@/components/ui/typography'

// const HeroSection: React.FC = () => {
//   return (
//     <div className="w-full h-full flex justify-between items-center">
//       <div className="flex flex-col items-start h-full w-full gap-8 mb-6">
//         <div className='w-full flex justify-start pl-50'>
//           <Icon name="chatBubble" />
//         </div>
//         <div className='flex flex-col gap-1.5'>
//           <Typography variant="h2" className="font-bold">
//             Style That <span className="text-primary"> Speaks </span>for You
//           </Typography>
//           <Typography variant='large'>
//             Coremart brings you fashion that fits your lifestyle
//           </Typography>
//         </div>
//       </div>

//       <div className='relative min-w-124 min-h-148 max-w-125 max-h-148 mr-10'>
//         <div className="w-full h-full rounded-[2.5rem] ">
//           <img
//             src="/hero1.png"
//             alt="Home"
//             className="h-full w-full overflow-hidden object-cover rounded-[2.5rem] bg-black"
//           />
//         </div>

//         <div className="absolute bottom-[20%] left-[-2.5rem] border-4 border-white bg-sky-400 rounded-full flex justify-center items-center w-20 h-20 shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer hover:border-sky-100">
//           <Icon name="leftArrow" width={38} height={38} />
//         </div>

//         <div className="absolute top-[20%] right-[-2.5rem] border-4 border-white bg-sky-400 rounded-full flex justify-center items-center w-20 h-20 shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer hover:border-sky-100">
//           <Icon name="rightArrow" width={38} height={38} />
//         </div>

//       </div>
//     </div>
//   )
// }

// export default HeroSection



import React from 'react'
import Icon from '@/components/ui/icons'
import { Typography } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'


const heroSectionInfo = [
  { value: '20+', lable: 'YEARS OF EXPERIENCE' },
  { value: '21+', lable: 'HAPPY CUSTOMERS' },
  { value: '150+', lable: 'PRODUCT BRAND' }
]


const HeroSection: React.FC = () => {
  return (
    <div className='w-full flex justify-between gap-9 rounded-3xl bg-[#EEEBEE] px-10 py-8'>
      <div className='w-full flex flex-col gap-12 mt-12'>
        <Typography variant='large' className='font-bold text-8xl uppercase'>STYLE STAR <br /> AT THE CORE</Typography>
        <Typography variant='body'>Dress to impress with our latest collection, curated for trendsetters seeking chic and timeless style. Elevate your wardrobe today!</Typography>


        <div className='flex gap-3'>
          <Button className='text-white px-15 py-7 rounded-full'>Buy Now</Button>
          <button className='bg-white p-4 rounded-full hover:bg-primary hover:text-white hover:cursor-pointer'>
            <Icon name='MoveUpRight' />
          </button>
        </div>

        <div className='flex justify-between gap-5'>
          {
            heroSectionInfo.map((item, index) => (
              <div key={index} className='flex flex-col items-center gap-3'>
                <Typography variant='large' className='font-bold text-5xl'>{item.value}</Typography>
                <Typography variant='muted'>{item.lable}</Typography>
              </div>
            ))
          }
        </div>
      </div>
      <div className='w-full h-full flex flex-col gap-4'>
        <div className='w-full max-h-90 flex gap-4'>
          <div className='rounded-tl-[60px] rounded-br-[60px] overflow-hidden'>
            <img src='/Hero-Section/hero1.svg' alt='banner' className='w-full' />
          </div>
          <div className='rounded-bl-[60px] rounded-tr-[60px] overflow-hidden'>
            <img src='/Hero-Section/hero2.svg' alt='banner' className='w-full' />
          </div>
        </div>
        <div className='w-full max-h-90 flex gap-4'>
          <div className='rounded-bl-[60px] rounded-tr-[60px] overflow-hidden'>
            <img src='/Hero-Section/hero3.svg' alt='banner' className='w-full' />
          </div>
          <div className='rounded-tl-[60px] rounded-br-[60px] overflow-hidden'>
            <img src='/Hero-Section/hero4.svg' alt='banner' className='w-full' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
