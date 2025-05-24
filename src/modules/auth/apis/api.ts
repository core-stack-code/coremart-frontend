import axiosInstance from "@/lib/axios";
import type { LoginPayloadType, LoginResponse } from "./types";
import type { ApiResponse } from "@/lib/axios/types";

const clietId = import.meta.env.VITE_APP_CLIENT_ID;

export const userLogin = async (paylod: LoginPayloadType): Promise<ApiResponse<LoginResponse>> => {
    const res = await axiosInstance.post("/auth/login", paylod, {
        headers: {
            "X-app-client": clietId,
        }
    });
    return res.data;
}