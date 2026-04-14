export type RootCategoriesItems = {
    name: string;
    slug: string;
    image: string;
}

export type RootCategoriesResponse = RootCategoriesItems[];



export type getCategoryTreeParams = {
    slug: string;
}

export type CategoryTreeResponse = {
    id: string,
    name: string;
    slug: string;
    parentId: string | null;
    imageUrl: string;
    children: CategoryTreeResponse[];
}



export type getProductsByCategoryParams = {
    slug: string;
};