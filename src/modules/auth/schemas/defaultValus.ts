import type { LoginPayload, SignupPayload } from "./authSchema";

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