import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { otpVerifySchema, type OtpVerifyPayload } from "../../schemas/authSchema";
import { Button } from "@/components/ui/button";
import { useUserLogin } from "../../apis/mutations";
import { useAppDispatch } from "@/hooks/redux";
import { setUserData } from "@/store/slices/userSlice";
import type { User } from "@/modules/user/apis/types";
import { otpDefaultsValues} from "../../schemas/defaultValus";
import  { InputOTPPattern } from "@/components/ui/form/otp-component";
import { Typography } from "@/components/ui/typography";

const OTPVerifyForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { handleSubmit, control } = useForm({
    resolver: zodResolver(otpVerifySchema),
    defaultValues: otpDefaultsValues,
  });

  const { mutate, isPending } = useUserLogin();

  const onSubmit = (formData: OtpVerifyPayload) => {
    mutate(formData, {
      onSuccess: (data) => {
        console.log("OTP Send Successfully:", data);
        dispatch(setUserData(data.data?.user as User));
        navigate("/");
      },
      onError: (error) => {
        console.error("OTP Send  failed:", error);
      },
    });
  };

  return (
    <>
      <form className="w-full h-full sm:w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className=" w-full flex flex-col gap-6">
          <div className="w-full flex flex-col gap-2">
            <Controller
              name="otp"
              control={control}
              disabled={isPending}
              render={() => (
                <InputOTPPattern/>
              )}
            />
          </div>
          <Typography>
            Didn’t receive CODE?
            <a href="/" className="text-primary font-bold underline ">
              Resend
            </a>
          </Typography>
          <div className="flex flex-row justify-center gap-3">
            <Button
              type="button"
              className="w-50 h-11 sm:w-[50%] md:w-[50%] lg:w-[50%] bg-secondary text-background rounded-2xl"
              variant="default"
              onClick={() => navigate(-1)}
            >
              {isPending ? "Loading..." : "Back"}
            </Button>
            <Button
              type="submit"
              className="w-50 h-11 sm:w-[50%] md:w-[50%] lg:w-[50%] bg-primary text-background rounded-2xl"
              variant="default"
            >
              {isPending ? "Loading..." : "Sign Up"}
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default OTPVerifyForm;
