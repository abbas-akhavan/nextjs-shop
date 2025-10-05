'use client'
import useAppStore from '@/store/useAppStore'
import React, { useEffect } from 'react'

export const GlobalOverlay = () => {
    const showOverlay = useAppStore(state => state.overlay);

    if (!showOverlay) return <></>
    return (
        <div className='fixed top-0 left-0 w-screen h-screen bg-black opacity-60 z-20'></div>
    )
}
