import { create } from "zustand";

interface paginationState {
    currentPage: number;
    itemPerPage: number;
    totalPages?: number;
    sortBy?: string;
    setCurrentPage: (action: number) => void;
    // setNextPage: () => void;
    // setPrevPage: () => void;
    setTotalPages: (action: number) => void;
    setSortBy: (sort: string) => void;
    resetPagination: () => void;
    page: number;
    limit: number;
    totalItems: number;
    setPage: (action: number) => void;
    setLimit: (action: number) => void;
    setTotalItems: (action: number) => void;
}


export const usePaginationState = create<paginationState>((set, get) => ({
    currentPage: 1,
    itemPerPage: 12,
    totalPages: 1,
    sortBy: "",
    page: 1,
    limit: 12,
    totalItems: 0,

    setPage: (action: number) => set({ page: action }),
    setLimit: (action: number) => set({ limit: action }),
    setTotalItems: (action: number) => set({ totalItems: action }),

    setCurrentPage: (action: number) => set({ currentPage: action }),

    // setNextPage: () => {
    //     const { currentPage, totalPages } = get();
    //     if (currentPage < totalPages!) {
    //         set({ currentPage: currentPage + 1 });
    //     }
    // },
    // setPrevPage: () => {
    //     const { currentPage } = get();
    //     if (currentPage > 1) {
    //         set({ currentPage: currentPage - 1 });
    //     }
    // },
    setTotalPages: (action: number) => set({ totalPages: action }),

    setSortBy: (action: string) => set({ sortBy: action }),

    resetPagination: () => { set({ currentPage: 1, sortBy: "" }) },
}))