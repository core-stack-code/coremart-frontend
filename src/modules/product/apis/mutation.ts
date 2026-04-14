import type { MutationOptions } from "@/lib/axios/types";
import { useMutation } from "@tanstack/react-query";
import { addFavourite, removeFavourite } from "./api";
import { MUTATION_REGISTRY } from "@/constants/api-registery";

export const useAddFavourite = (
    options?: MutationOptions<null, { productId: string }>
) => {
    return useMutation({
        mutationKey: [MUTATION_REGISTRY.addFavourite],
        mutationFn: ({ productId }) => addFavourite(productId),
        ...options
    })
}

export const useRemoveFavourite = (
    options?: MutationOptions<null, { productId: string }>
) => {
    return useMutation({
        mutationKey: [MUTATION_REGISTRY.removerFavourite],
        mutationFn: ({ productId }) => removeFavourite(productId),
        ...options
    })
}