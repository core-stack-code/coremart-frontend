import type { ForgotPasswordPayload, LoginPayload, OtpVerifyPayload, ResetPasswordPayload, SignupPayload, VerifyPayload } from "./authSchema";

export const loginFormDefaultValues: LoginPayload = {
    email: "",
    password: "",
}

export const signupFormDefaultValues: SignupPayload = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
}

export const forgetPasswordFormDefaultValues : ForgotPasswordPayload={
    email: ""
}

<<<<<<< Updated upstream
export const resetPasswordFormDefaultValues: ResetPasswordPayload = {
    password: "",
    confirmPassword: "",
}

export const verifyFromDefaultsValues: VerifyPayload = {
    otp: "",
    email: "",
    isRememberMe: false
=======
export const resetPasswordFormDefaultValues : ResetPasswordPayload={
    email:"",
    password:""
>>>>>>> Stashed changes
}


export const otpDefaultsValues : OtpVerifyPayload = {
    otp: "",
}