import Icon from '@/components/ui/icons'

interface ProductReviewsProps {
    review: {
        name: string,
        comment: string,
        description: string
    }
}

const Reviews: React.FC<ProductReviewsProps> = ({ review }) => {


    const { name, comment, description } = review

    return (
        <>
            <div className="px-4 py-2 text-sm space-y-2">
                <div className="flex items-center">
                    <span className="flex mr-3.5 text-2xl">
                        {
                            [1, 2, 3, 4, 5].map((index) => {
                                return (
                                    <Icon key={index} name='starIcon' width={20} height={20} />
                                )
                            })
                        }

                    </span>
                </div>
                <p className="text-[var(--color-muted)] font-bold">{comment}</p>
                <p className="text-[var(--color-muted)]">{description}</p>
                <span className="text-[var(--color-info)] italic"><b>-</b>{name}</span>
            </div>
        </>
    )
}

export default Reviews