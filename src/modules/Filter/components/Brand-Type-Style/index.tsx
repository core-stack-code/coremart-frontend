import React from 'react'

interface BrandTypeStyleProps {
    key: number,
    filters: any,
    toggleOption: (category: any, value: string) => void,
    type: {
        category: string,
        value: string[]
    }
}


const BrandTypeStyle: React.FC<BrandTypeStyleProps> = ({ filters, toggleOption, type }) => {
    
    const { category, value } = type

    return (
        <>
            <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">{category}</h3>
                <div className="transition grid grid-cols-3 gap-3 max-h-[125px] overflow-y-auto scrollbar-hidden">
                    {value.map((items) => (
                        <button
                            key={items}
                            onClick={() => toggleOption(category, items)}
                            className={`rounded-2xl py-1 text-sm transition ${filters[category].includes(items)
                                ? "bg-purple-600 text-white "
                                : "border border-[var(--color-border)] text-[var(--color-muted)]"
                                }`}
                        >
                            {items}
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BrandTypeStyle