'use client'
import React from 'react'
interface BadgeProps {
    value: string | number;
    className?: string;
}
const Badge = ({ value, className }: BadgeProps) => {
    return (
        <span className={`bg-red-600 text-white size-4 rounded-sm text-xs flex items-center justify-center ${className ? className : ''}`}>
            {value}
        </span>
    )
}

export default Badge