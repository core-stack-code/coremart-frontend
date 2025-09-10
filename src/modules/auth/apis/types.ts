import type { User } from "@/modules/user/apis/types";
import type { LoginPayload } from "../schemas/authSchema";

export type LoginPayloadType =  LoginPayload

export interface LoginResponse {
    user: User;
}


// mutation: post, patch, put, delete
// type: payload, response > if param type
// axios call
// useMutatoin wrapper

// query: get
// type: response > if param type
// axios call
// useQuery wrapper