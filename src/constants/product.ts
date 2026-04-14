export const categoryEnum = ['men', 'women', 'casual-wear', 'formal-wear', 'sports-wear', 'winter-wear'] as const;

export const CATEGORY_ENUM_MAP = {
    men: 'men',
    women: 'women',
    casualwear: 'casual-wear',
    formalwear: 'formal-wear',
    sportswear: 'sports-wear',
    winterwear: 'winter-wear',
}


export const CATEGORY_SORT_OPTIONS = [
    { value: "price-low", label: "Price: Low to High", },
    { value: "price-high", label: "Price: High to Low" },
    { value: "newest", label: "Newest" },
    { value: "oldest", label: "Oldest" }
]