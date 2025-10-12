import React from 'react'

const SortItem = ({ active, onClick, children }: { active: boolean, onClick: () => void, children: React.ReactNode }) => {
    return (
        <span
            className={`cursor-pointer ${active ? 'text-cyan-400' : 'text-slate-300'}`}
            onClick={onClick}>
            {children}
        </span>
    )
}

export default SortItem