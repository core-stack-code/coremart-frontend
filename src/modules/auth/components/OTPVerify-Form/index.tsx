import { NavLink, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useUserLogin } from "../../apis/mutations";
import { InputOTPPattern } from "@/components/ui/form/otp-component";
import { Typography } from "@/components/ui/typography";
import { verifyOtpSchema, type VerifyOtpPayload } from "../../schemas/authSchema";
import { verifyOtpDefaultsValues } from "../../schemas/defaultValues";
import { useToast } from "@/hooks/useToast";
import Icon from "@/components/ui/icons";

const OTPVerifyForm: React.FC = () => {

  const navigate = useNavigate();
  const toast = useToast();

  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: zodResolver(verifyOtpSchema),
    defaultValues: verifyOtpDefaultsValues,
  });

  const { mutate, isPending } = useUserLogin();

  const onSubmit = (formData: VerifyOtpPayload) => {
    console.log(formData)
  };

  return (
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
          <div className="w-full flex items-center">
            {errors?.otp?.message && (
              <Typography variant="small" className="flex items-center gap-1 text-error">
                <Icon name="crossIcon" width={9} height={9} fill="#EF4444" />
                {errors?.otp?.message}
              </Typography>
            )}
          </div>
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
            disabled={isPending}
          >
            {isPending ? "Verifying..." : "Sign Up"}
          </Button>
          <Button
            type="button"
            className="w-full h-14  text-primary hover:bg-secondary hover:text-white rounded-xl"
            variant="ghost"
            onClick={() => navigate(-1)}
            disabled={isPending}
          >
            {isPending ? "Loading..." : "Back"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default OTPVerifyForm;
