import Icon from '@/components/ui/icons'

interface ProductRatingProps{
    item:{
        stars:number,
        count:number
        color:string,
        width:string,
    },
    
}

const Rating: React.FC<ProductRatingProps> = ({item}) => {

    const {stars, color, width}= item

    return (
        <>
            <div className="flex items-center gap-2 text-sm">
                <span className="w-4 text-right font-medium">{stars}</span>
                <span className="font-bold text-2xl">
                    <Icon name='starIcon' width={20} height={20} /></span>
                <div className="flex-1 h-2 border border-[var(--color-border)]/50 rounded overflow-hidden">
                    <div className={`h-full ${color} ${width} rounded`}></div>
                </div>
                <span className="text-[var(--color-muted)] w-12 text-right">{item.count}</span>
            </div>
        </>
    )
}

export default Rating