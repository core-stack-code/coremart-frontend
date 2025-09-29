import React from 'react'

const Label: React.FC<{ children: React.ReactNode | string }> = ({ children }) => {
    return (
        <label className="text-sm font-normal leading-none text-muted">
            {children}
        </label>
    )
}

export default Label
