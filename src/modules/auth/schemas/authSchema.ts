import { z } from 'zod';
import { passwordSchema } from '@/lib/zod/common';
import type { OtpSessionType } from '@/types/enum';


const otpSessionEnum: OtpSessionType[] = [
    "EMAIL_VERIFICATION", "PASSWORD_RESET"
]

export const loginSchema = z.object({
    email: z.email('Invalid email address'),
    password: passwordSchema
})

export const signupSchema = z.object({
    name: z.string().min(2, 'Name is required'),
    email: z.email('Invalid email address'),
    password: passwordSchema,
    confirmPassword: passwordSchema.optional(),
})

export const setPasswordSchema = z.object({
    password: passwordSchema,
});

export const generateOtpSchema = z.object({
    sessionType: z.enum(otpSessionEnum),
});

export const verifyOtpSchema = z.object({
    otp: z.string().length(6, 'OTP must be 6 characters long'),
    sessionType: z.enum(otpSessionEnum),
    newPassword: passwordSchema.optional(),
});

export const resendOtpSchema = z.object({
    sessionType: z.enum(otpSessionEnum),
});

export const forgetPasswordSchema = z.object({
    email: z.email('Invalid email address'),
});

export const resetPasswordSchema = z.object({
    password: passwordSchema,
    confirmPassword: passwordSchema,
});




export type LoginPayload = z.infer<typeof loginSchema>;
export type SignupPayload = z.infer<typeof signupSchema>;
export type SetPasswordPayload = z.infer<typeof setPasswordSchema>;
export type ForgetPasswordPayload = z.infer<typeof forgetPasswordSchema>;
export type ResetPasswordPayload = z.infer<typeof resetPasswordSchema>;
export type GenerateOtpPayload = z.infer<typeof generateOtpSchema>;
export type VerifyOtpPayload = z.infer<typeof verifyOtpSchema>;
export type ResendOtpPayload = z.infer<typeof resendOtpSchema>;