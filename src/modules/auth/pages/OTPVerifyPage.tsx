import { Typography } from "@/components/ui/typography";
import AuthHeading from "../components/auth-heading";
import OTPVerifyForm from "../components/otpverify-form";

const OTPVerify = () => {
  return (
    <>
      <div className='w-full max-h-screen bg-[url(/otp-avtar.svg)] bg-cover bg-no-repeat'>
        <div className='max-w-78 h-full flex flex-col justify-end gap-2 p-5'>
          <Typography variant='h3' className='text-white font-bold'>DEFINING THE MODERN SILHOUETTE.
          </Typography>
        </div>
      </div>
      <div className='w-full min-h-full flex flex-col justify-center items-center'>
        <div className='w-full flex flex-col gap-10 px-33'>
          <AuthHeading
            title={<Typography variant='h3' className='font-bold'>Verify Your Identity</Typography>}
            description={<Typography variant='small'>We've sent a 6-digit verification code to your email address. Enter it below to continue.</Typography>}
          />
          <OTPVerifyForm />
        </div>
      </div>
    </>
  );
};

export default OTPVerify;
