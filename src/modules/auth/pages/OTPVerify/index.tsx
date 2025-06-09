import OTPVerifyForm from '../../components/OTPVerify-Form'

const OTPVerify = () => {
  return (
    <>
     <div className="w-full h-full flex justify-between px-40">
                <div className='w-150 min-w-105 h-full flex flex-col gap-15 pl-5'>
                    <div className='w-full max-w-150 flex flex-col gap-2 text-5xl '>
                        <p className="text-5xl font-bold text-[#9333EA]">Enter Verification Code</p>
                        <p className="w-full text-lg  text-[#6366F1]">We send 6-digit code tp your ds******@gmail.com.</p>
                        <p className="w-full text-lg  text-[#6366F1]">Enter it here!</p>
                    </div>
                    <OTPVerifyForm/>
                </div>
                <div className="w-180 mt-0 pt-0 hidden md:block">
                    <img src="/OTP-Section.svg" alt="Forget Password Section" className="w-full h-150 object-fill" />
                </div>
            </div>
    </>
  )
}

export default OTPVerify