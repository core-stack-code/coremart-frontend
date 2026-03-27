import { create } from "zustand";

interface paginationState {
    currentPage: number;
    itemPerPage: number;
    totalPages?: number;
    setCurrentPage: (action: number) => void;
    setNextPage: () => void;
    setPrevPage: () => void;
    setTotalPages: (action: number) => void;
}


export const usePaginationState = create<paginationState>((set, get) => ({
    currentPage: 1,
    itemPerPage: 12,
    totalPages: 1,
    setCurrentPage: (action: number) => set({ currentPage: action }),
    setNextPage: () => {
        const { currentPage, totalPages } = get();
        if (currentPage < totalPages!) {
            set({ currentPage: currentPage + 1 });
        }
    },
    setPrevPage: () => {
        const { currentPage } = get();
        if (currentPage > 1) {
            set({ currentPage: currentPage - 1 });
        }
    },
    setTotalPages: (action: number) => set({ totalPages: action }),
}))