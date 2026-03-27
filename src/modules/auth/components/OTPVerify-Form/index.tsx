import { NavLink, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { otpVerifySchema, type OtpVerifyPayload } from "../../schemas/authSchema";
import { Button } from "@/components/ui/button";
import { useUserLogin } from "../../apis/mutations";
import type { User } from "@/modules/user/apis/types";
import { otpDefaultsValues } from "../../schemas/defaultValus";
import { InputOTPPattern } from "@/components/ui/form/otp-component";
import { Typography } from "@/components/ui/typography";
import { useUserState } from "@/store/state";

const OTPVerifyForm = () => {

  const setUserData = useUserState(state => state.setUserData)
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
        setUserData(data.data?.user as User);
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
          <div className="w-full flex flex-col gap-3">
            <Controller
              name="otp"
              control={control}
              disabled={isPending}
              render={() => (
                <InputOTPPattern />
              )}
            />
          </div>
          <Typography>
            DIDN'T RECEIVE CODE?
            <NavLink to="/" className="ml-2 text-primary font-bold">
              Resend
            </NavLink>
          </Typography>
          <div className="flex flex-col gap-4">
            <Button
              type="submit"
              className="w-full h-14 bg-primary text-background rounded-xl"
              variant="default"
            >
              {isPending ? "Loading..." : "Sign Up"}
            </Button>
            <Button
              type="button"
              className="w-full h-14  text-primary hover:bg-secondary hover:text-white rounded-xl"
              variant="ghost"
              onClick={() => navigate(-1)}
            >
              {isPending ? "Loading..." : "Back"}
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default OTPVerifyForm;
