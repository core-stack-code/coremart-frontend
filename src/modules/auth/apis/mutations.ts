import type { MutationOptions } from '@/lib/axios/types';
import { useMutation } from '@tanstack/react-query';
import type { LoginResponse, ResetPasswordResponse, SignUpResponse } from './types';
import { userLogin, userResetPassword, userSignUp } from './api';
import type { LoginPayload, ResetPasswordPayload, SignupPayload } from '../schemas/authSchema';
import { MUTATION_REGISTRY } from '@/constants/api-registery';

export const useUserLogin = (
    options?: MutationOptions<LoginResponse, LoginPayload>
) => {
    return useMutation({
        mutationKey: [MUTATION_REGISTRY.login],
        mutationFn: (payload) => userLogin(payload),
        ...options,
    });
};


export const useUserSignUp = (
    options?: MutationOptions<SignUpResponse, SignupPayload>
) => {
    return useMutation({
        mutationKey: [MUTATION_REGISTRY.userSignUp],
        mutationFn: (paylod) => userSignUp(paylod),
        ...options,
    });
};


export const useUserResetPassword = (
    options?: MutationOptions<ResetPasswordResponse, ResetPasswordPayload>
) => {
    return useMutation({
        mutationKey: [MUTATION_REGISTRY.userResetPassword],
        mutationFn: (paylod) => userResetPassword(paylod),
        ...options,
    });
};