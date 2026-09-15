export const categoryEnum = ['casual', 'formal', 'sportswear', 'sleepwear', 'outerwear', 'workoutwear'] as const;

export const CATEGORY_ENUM_MAP = {
    casual: 'casual',
    formal: 'formal',
    sportswear: 'sportswear',
    sleepwear: 'sleepwear',
    outerwear: 'outerwear',
    workoutwear: 'workoutwear',
}


export const CATEGORY_SORT_OPTIONS = [
    { value: "price-low", label: "Price: Low to High", },
    { value: "price-high", label: "Price: High to Low" },
    { value: "newest", label: "Newest" },
    { value: "oldest", label: "Oldest" }
]