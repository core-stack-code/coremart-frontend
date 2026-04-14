import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Skeleton } from '../ui/skeleton'
import { cn } from '@/lib/utils';

interface productSkletonProps {
    row?: number;
    colunms?: number;
}

const ProductSkeleton: React.FC<productSkletonProps> = ({ row = 4, colunms = 1 }) => {

    const maxItems = row && colunms ? row * colunms : undefined;

    return (
        <div className={cn('grid gap-8',
            colunms ? `grid-cols-${colunms}` : 'grid-cols-1',
            row && `grid-rows-${row}`
        )}>
            {
                [...Array(maxItems)].map((_, index) => (
                    <Card key={index} className="w-full h-full">
                        <CardContent>
                            <Skeleton className="min-w-full min-h-50" />
                        </CardContent>
                        <CardContent className='flex flex-col gap-1'>
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                        </CardContent>
                    </Card>
                )
                )
            }
        </div >
    )
}

export default ProductSkeleton