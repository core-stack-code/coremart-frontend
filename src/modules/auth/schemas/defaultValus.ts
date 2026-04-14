import type { ForgetPasswordPayload, LoginPayload, ResetPasswordPayload, SignupPayload, VerifyOtpPayload } from "./authSchema"

export const loginFormDefaultValues: LoginPayload = {
    email: "",
    password: "",
}

export const signupFormDefaultValues: SignupPayload = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
}

export const forgetPasswordFormDefaultValues : ForgetPasswordPayload={
    email: ""
}

export const resetPasswordFormDefaultValues: ResetPasswordPayload = {
    password: "",
    confirmPassword: "",
}

// export const verifyFromDefaultsValues: VerifyOtpPayload = {
//     otp: "",
//     sessionType: "EMAIL_VERIFICATION",
//     newPassword: ""
// }


export const verifyOtpDefaultsValues : VerifyOtpPayload = {
    otp: "",
    sessionType: "EMAIL_VERIFICATION",
}