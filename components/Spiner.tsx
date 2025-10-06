import React from 'react'

const Spiner = ({ className }: { className?: string }) => {
    return (
        <div className={`w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin ${className}`}></div>
    )
}

export default Spiner