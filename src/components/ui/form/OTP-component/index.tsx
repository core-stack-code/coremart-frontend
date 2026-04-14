// import React, { useEffect, useRef } from "react";
// import { cn } from "@/lib/utils";
// import Icon from "../../icons";


// interface OtpInputProps {
//   length?: number;
//   value: number | string; // value is now a number
//   onChange: (value: string) => void;
//   error?: string | null;
//   inputClassName?: string;
//   wrapperClassName?: string;
// }

// const OtpInput: React.FC<OtpInputProps> = ({
//   length = 6,
//   value,
//   onChange,
//   error,
//   inputClassName,
//   wrapperClassName,
// }) => {
//   const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
//   const valueStr = String(value).padEnd(length, ""); // Ensure it's a string of length `length`


//     useEffect(() => {
//     inputsRef.current[0]?.focus();
//   }, []);



//   const handleChange = (val: string, index: number) => {
//     const newValue = valueStr.split("");
//     newValue[index] = val.replace(/[^0-9]/g, "").slice(0, 1);
//     const joined = newValue.join("");
//     onChange(joined); // Still passes string (form should cast if needed)

//     // Focus next input
//     if (val && index < length - 1) {
//       inputsRef.current[index + 1]?.focus();
//     }
//   };

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
//     if (e.key === "Backspace" && !valueStr[index] && index > 0) {
//       inputsRef.current[index - 1]?.focus();
//     }
//   };

//   return (
//     <div className={cn("flex ", wrapperClassName)}>
//       <div className="flex gap-2 justify-center">
//         {Array.from({ length }).map((_, idx) => (
//           <input
//             key={idx}
//             ref={(el) => (inputsRef.current[idx] = el)}
//             type="text"
//             inputMode="numeric"
//             maxLength={1}
//             value={valueStr[idx] || ""}
//             onChange={(e) => handleChange(e.target.value, idx)}
//             onKeyDown={(e) => handleKeyDown(e, idx)}
//             className={cn(
//               "w-12 h-12 text-center border border-[var(--color-border)] rounded-xl text-lg outline-none",
//               "focus:border-[var(--color-border)] focus:ring focus:ring-[var(--color-primary)]",
//               inputClassName
//             )}
//           />
//         ))}
//       </div>

//       <div
//         className={cn(
//           "flex items-center gap-1 min-h-[1rem] px-1",
//           error ? "opacity-100" : "opacity-0"
//         )}
//       >
//         <Icon name="crossIcon" width={9} height={9} fill="#EF4444" />
//         <p className="text-xs text-error transition-opacity duration-300 ease-in-out">
//           {error}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default OtpInput;

import { REGEXP_ONLY_DIGITS } from "input-otp"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export function InputOTPPattern() {
  return (
    <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}
