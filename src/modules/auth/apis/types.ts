import type { User } from "@/modules/user/apis/types";
import type { LoginPayload } from "../schemas/authSchema";

export type LoginPayloadType =  LoginPayload

export interface LoginResponse {
    user: User;
}