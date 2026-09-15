import React from 'react'

interface metaItemProps {
    label: string
    value: number | string
}

const MetaItem: React.FC<metaItemProps> = ({ label, value }) => {
    return (
        <div className='flex gap-1.5 items-center'>
            <p className='font-semibold text-foreground'>{value}</p>
            <span className='text-muted'>{label}</span>
        </div>
    )
}

export default MetaItem