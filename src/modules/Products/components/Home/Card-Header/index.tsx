import Icon from '@/components/ui/icons'
import CounteDownTimer from '../Count-Down-Timer'

interface CardHeaderProps {
    label: string,
    arrowName: string
}

const CardHeader: React.FC<CardHeaderProps> = ({ label, arrowName }) => {
    return (
        <>
            <div className="flex justify-between">
                <div className='flex justify-center items-center gap-5'>
                    <h2 className="text-lg  font-bold">{label}</h2>
                    {
                        label === 'Trending Offers' ? <CounteDownTimer /> : null
                    }
                </div>
                <div className="flex justify-end items-center gap-2">
                    <span className="text-[var(--color-muted)] text-[16px]">{arrowName}</span>
                    {
                        arrowName ?
                            <button className='cursor-pointer'>
                                <Icon name="seeallarrowIcon" width={30} height={30} />
                            </button>

                            : null
                    }
                </div>
            </div>
        </>
    )
}

export default CardHeader