import type { ApiResponse, ApiError } from '@/lib/axios/types';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import type { LoginResponse } from './types';
import { userLogin } from './api';
import type { LoginPayload } from '../schemas/authSchema';

export const useUserLogin = (
    options?: UseMutationOptions<
        ApiResponse<LoginResponse>,
        ApiError,
        LoginPayload
    >
) => {
    
    return useMutation({
        mutationKey: ['userLogin'],
        mutationFn: (paylod) => userLogin(paylod),
        ...options,
    });
};