import type { ForgotPasswordPayload, LoginPayload, ResetPasswordPayload, SignupPayload } from "./authSchema";

export const loginFormDefaultValues: LoginPayload = {
    email: "",
    password: "",
}

export const signupFormDefaultValues : SignupPayload = {
    name: "",
    email: "",
    password: "",
    confirmPassword:""
}

export const forgetPasswordFormDefaultValues : ForgotPasswordPayload={
    email: ""
}

export const resetPasswordFormDefaultValues : ResetPasswordPayload={
    email:"",
    password:""
}
