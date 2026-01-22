import React from 'react'

interface metaItemProps {
    label: string
    value: number | string
}

const MetaItem: React.FC<metaItemProps> = ({ label, value }) => {
    return (
        <div className='flex gap-2'>
            <p>{value}</p>
            <span>{label}</span>
        </div>
    )
}

export default MetaItem