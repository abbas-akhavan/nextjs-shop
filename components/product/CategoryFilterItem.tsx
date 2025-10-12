import { Category } from '@/types/Category'
import { CheckIcon } from '@heroicons/react/24/solid'
import React from 'react'
interface CategoryFilterItemProp {
    title: string;
    active: boolean;
    onClick: () => void
}
const CategoryFilterItem = ({ title, active, onClick }: CategoryFilterItemProp) => {
    return (
        <div
            className={`${active ? 'active' : ''} group [&.active]:text-cyan-400 pb-3 last:pb-0 cursor-pointer flex justify-between items-center`}
            onClick={onClick}
        >
            {title}
            <CheckIcon className='hidden group-[.active]:block  w-4 h-4' />
        </div>
    )
}

export default CategoryFilterItem