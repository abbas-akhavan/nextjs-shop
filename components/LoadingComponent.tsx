'use client'
import React from 'react'

const LoadingComponent = () => {
    return (
        <span className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex size-14 animate-bounce">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gradient-to-br from-slate-500 to-gray-300 blur-sm opacity-75"></span>
            <span className="relative inline-flex h-full w-full rounded-full bg-gradient-to-br from-slate-500 to-gray-300 blur-[1px] animate-spin"></span>
        </span>
    )
}

export default LoadingComponent