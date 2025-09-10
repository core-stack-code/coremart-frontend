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
import  { InputOTPPattern } from "@/components/ui/form/OTP-component";

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
          <p className=" text-[var(--color-muted)]">
            Didn’t receive CODE?
            <a href="/" className="text-[var(--color-primary)] font-bold underline ">
              Resend
            </a>
          </p>
          <div className="flex flex-row justify-center gap-3">
            <Button
              type="button"
              className="w-50 h-11 sm:w-[50%] md:w-[50%] lg:w-[50%] bg-[var(--color-secondary)] text-[var(--color-background)] rounded-2xl"
              variant="default"
              onClick={() => navigate(-1)}
            >
              {isPending ? "Loading..." : "Back"}
            </Button>
            <Button
              type="submit"
              className="w-50 h-11 sm:w-[50%] md:w-[50%] lg:w-[50%] bg-[var(--color-primary)] text-[var(--color-background)] rounded-2xl"
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
