import type { User } from "@/modules/user/apis/types";
import { create } from "zustand";


interface UserState {
    email: string;
    name: string;
    setUserData: (action: User) => void;
}


export const useUserState = create<UserState>((set) => ({
    email: '',
    name: '',
    setUserData: (action: User) => {
        set({ email: action.email, name: action.name });
    }
}))