import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { cn } from '@/lib/utils'
import Icon from '@/components/ui/icons'
import { Typography } from '@/components/ui/typography';
import { useGetRootCategories } from '../../apis/queries';


// const CATEGORY: { id: Category; name: string; image: string }[] = [
//     { id: 'men', name: 'Men', image: 'https://res.cloudinary.com/dyr5ntgzr/image/upload/v1774949833/coremart/categories/images/dvooeqq6eglw0xs8zkoe.jpg' },
//     { id: 'women', name: 'Women', image: 'category1.svg' },
//     { id: 'casual-wear', name: 'Casual', image: 'category1.svg' },
//     { id: 'formal-wear', name: 'Formal', image: 'category1.svg' },
//     { id: 'sports-wear', name: 'Sportswear', image: 'category1.svg' },
//     { id: 'winter-wear', name: 'Winter Wear', image: 'category1.svg' },
// ]



const CategoryQueue: React.FC<{ isRedirect?: boolean }> = () => {
    const { data, isPending } = useGetRootCategories();
    const navigate = useNavigate()
    const slugcategory = useParams()

    // const handleCategoryChange = (category: Category) => {
    //     dispatch(setCategory(category));
    //     if(isRedirect) {
    //         navigate('/product/category');
    //     }
    // }


    const handleCategoryChange = (category: string) => {
        navigate(`/category/${category}`);
    }

    const getContent = () => {
        if (isPending) {
            return <div>Loading...</div>;
        } else if (data) {
            return data?.data?.map((item) => {
                const isSelected = slugcategory.category === item.slug;
                return (
                    <div key={item.slug} className='flex flex-col items-center gap-3 hover:text-accent/70'>
                        <div
                            className={cn(
                                'w-35 h-35 rounded-full flex items-center justify-center border-4 border-white',
                                'shadow-[0_-6px_12px_rgba(0,0,0,0.1),0_6px_12px_rgba(0,0,0,0.1)] hover:shadow-accent/70 cursor-pointer',
                                isSelected && 'shadow-accent/70'
                            )}
                            onClick={() => handleCategoryChange(item.slug)}
                        >
                            <img src={item.image} alt={item.name} className='w-full h-full rounded-full overflow-hidden object-cover' />
                        </div>
                        <Typography className={cn('text-muted font-medium', isSelected && "text-accent")}>{item.name}</Typography>
                    </div>
                )
            })
        }
    }

    return (
        <div className='w-full flex flex-col gap-4'>
            <div className='w-full flex gap-5 items-center'>
                <Icon name='categories' width={24} height={24} />
                <Typography variant='lead' className='font-bold text-primary'>Categories</Typography>
            </div>
            <div className='w-full flex justify-between'>
                {getContent()}
            </div>
        </div>
    )
}

export default CategoryQueue