import * as React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { EyeOff } from "lucide-react";
import Icon from "../../icons";

interface InputComponentProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value">  {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error: string | null | undefined;
  wrapperClassName?: string;
  inputClassName?: string;
  togglePassword?: boolean;
  value: string;
  onChange: (value: string) => void;
}

const InputComponent = React.forwardRef<HTMLInputElement, InputComponentProps>(
  ({ leftIcon, rightIcon, wrapperClassName, inputClassName, togglePassword = false,
      type = "text", value, onChange, className, error,
      ...props
    }, ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const isPasswordType = type === "password" && togglePassword;

    return (
      <div className="flex flex-col gap-1 min-h-16">
        <div
          className={cn(
            "flex items-center border text-foreground bg-transparent",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            "border-border focus-within:border-primary",
            "rounded-2xl py-3.5 px-3 max-h-11",
            wrapperClassName
          )}
        >
          {leftIcon && (
            <span>{leftIcon}</span>
          )}

          <Input
            ref={ref}
            type={isPasswordType ? (showPassword ? "text" : "password") : type}
            className={cn(
              "border-none bg-transparent focus-within:border-primary-focus flex-1",
              "text-sm placeholder:text-muted",
              inputClassName,
              className
            )}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            {...props}
          />

          {isPasswordType ? (
            <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="text-muted focus:outline-none"
            >
              {showPassword ? 
                <EyeOff size={20} fill="#9333EA" stroke="#ffffff" /> : 
                <Icon name="eyeIcon" width={20} height={20} />
              }
            </button>
          ) : (
            rightIcon && (
              <span>
                {rightIcon}
              </span>
            )
          )}
        </div>
        <div 
          className={cn(
            "flex h-full w-full items-center gap-1  py-0.5 flex-1",
            error ? "opacity-100" : "opacity-0",
          )}
        >
          <Icon name="crossIcon" width={9} height={9} fill="#EF4444" />
          <p className="text-xs text-error transition-opacity duration-300 ease-in-out">
            {error}
          </p>
        </div>
      </div>
    );
  }
);

InputComponent.displayName = "InputComponent";
export default InputComponent;
