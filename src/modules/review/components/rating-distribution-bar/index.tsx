import Icon from '@/components/ui/icons';
import { cn } from '@/lib/utils';
import React from 'react'

const RatingDistributionBar: React.FC = () => {

    const ratingData = [
        { star: 5, count: 3324 },
        { star: 4, count: 1251 },
        { star: 3, count: 225 },
        { star: 2, count: 150 },
        { star: 1, count: 80 },
    ];

    const maxCount = Math.max(...ratingData.map(r => r.count));

    return (
            <div className="space-y-2">
                {ratingData.map(({ star, count }) => {
                    const width = (count / maxCount) * 100;

                    return (
                        <div key={star} className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                <span className="font-medium">{star}</span>
                                <Icon name='star' width={18} height={18} />
                            </div>

                            <div className="flex-1 h-3 bg-muted/20 rounded-full overflow-hidden">
                                <div
                                    className={cn(
                                        'h-full rounded-full',
                                        star >= 4 ? 'bg-green-500' : star === 3 ? 'bg-green-400' : star === 2 ? 'bg-orange-400' : 'bg-red-500'
                                    )}
                                    style={{ width: `${width}%` }}
                                />
                            </div>

                            <span className="w-12 text-right text-sm text-gray-600">
                                {count}
                            </span>
                        </div>
                    );
                })}
            </div>
    )
}

export default RatingDistributionBar