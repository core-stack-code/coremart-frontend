import OTPVerifyForm from "../../components/OTPVerify-Form";

const OTPVerify = () => {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center md:justify-between px-4 sm:px-6 md:px-10 lg:px-10 xl:px-20">
        <div className="w-full lg:w-auto flex flex-col gap-10 items-start md:items-start text-start md:text-left ">
          <div className="w-full max-w-[600px] flex flex-col">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#9333EA]">
              Enter Verification Code
            </p>
            <p className="text-base sm:text-lg text-[#6366F1]">
              We sent a 6-digit code to your ds******@gmail.com
            </p>
            <p className="text-base sm:text-lg text-[#6366F1]">
              Enter it here!
            </p>
          </div>
          <OTPVerifyForm />
        </div>

        <div className="hidden min-[855px]:block md:w-[600px] lg:w-[600px] h-full">
          <img
            src="/OTP-Section.svg"
            alt="Forget Password Section"
            className="w-full h-auto lg:w-[500px] xl:w-full object-contain"
          />
        </div>
      </div>

    </>
  );
};

export default OTPVerify;
