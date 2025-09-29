import React from 'react'
import type { CategoryTypes } from '@/lib/helper/testData';
import { cn } from '@/lib/utils';

interface CategoryProps {
    item: {
        image_url: string;
        category_name: string;
    };
    label: CategoryTypes;
    setLabel: (label: CategoryTypes) => void;
}


const CategorySlider: React.FC<CategoryProps> = ({ item, label, setLabel }) => {
    const isSelected = label === item.category_name

    return (
        // TODO: add heading here icon and title
        <div
            className="flex-shrink-0 w-auto p-2 text-center cursor-pointer"
            onClick={() => setLabel(item.category_name as CategoryTypes)}
        >
            <div
                className={cn(
                    "w-32 h-32 flex justify-center items-center rounded-full bg-background",
                    isSelected ? "shadow-one" : "shadow-two",
                )}
            >
                <img
                    src={item.image_url}
                    alt={item.category_name}
                    className="w-28 h-28 object-cover mx-auto rounded-full"
                />
            </div>
            <p className={cn("mt-2 text-sm", isSelected ? "text-primary font-bold" : "text-muted")}>
                {item.category_name}
            </p>
        </div>
    )
}

export default CategorySlider
