import AuthHeading from "../../components/auth-heading";
import OTPVerifyForm from "../../components/otpverify-form";

const OTPVerify = () => {
  return (
    <>
     <div className='w-full h-full flex flex-col gap-16 max-w-102'>
        <AuthHeading
          title="Enter Verification Code"
          description={(
            <div className='flex flex-col gap-0.5 text-secondary'>
              <span>We've sent a 6-digit code to your ds*******6@gmail.com. </span>
              <span>Enter it here! </span>
                        </div>
                    )}
            />
        <OTPVerifyForm />
      </div>
    <div  className='w-full h-full max-w-170'>
          <img
            src="/otp-section.svg"
          alt="Login Section"
          className="w-full h-full object-contain"
        />
      </div>

    </>
  );
};

export default OTPVerify;
