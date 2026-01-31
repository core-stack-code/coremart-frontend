import { Typography } from '@/components/ui/typography'
import React from 'react'

interface metaItemProps {
    label: string
    value: number | string
}

const MetaItem: React.FC<metaItemProps> = ({ label, value }) => {
    return (
        <div className='flex gap-1.5 items-center'>
            <Typography className='font-semibold text-foreground'>{value}</Typography>
            <Typography className='text-muted'>{label}</Typography>
        </div>
    )
}

export default MetaItem