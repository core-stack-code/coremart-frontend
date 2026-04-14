import type { LoginResponse, ResetPasswordResponse, SignUpResponse } from "./types";
import type { ApiResponse } from "@/lib/axios/types";
import api from "@/lib/axios";
import type { LoginPayload, ResetPasswordPayload, SignupPayload } from "../schemas/authSchema";

const clietId = import.meta.env.VITE_APP_CLIENT_ID;

export const userLogin = async (paylod: LoginPayload): Promise<ApiResponse<LoginResponse>> => {
    const res = await api.post("/auth/login", paylod, {
        headers: {
            "X-app-client": clietId,
        }
    });
    return res.data;
}

export const userSignUp = async (paylod: SignupPayload): Promise<ApiResponse<SignUpResponse>> => {
    const res = await api.post("/auth/signup", paylod, {
        headers: {
            "X-app-client": clietId,
        }
    });
    return res.data;
}


export const userResetPassword = async (paylod: ResetPasswordPayload): Promise<ApiResponse<ResetPasswordResponse>> => {
    const res = await api.post("/auth/change-password", paylod, {
        headers: {
            "X-app-client": clietId,
        }
    });
    return res.data;
}