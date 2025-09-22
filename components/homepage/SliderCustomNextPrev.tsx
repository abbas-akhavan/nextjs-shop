'use client'
import React from 'react'
import { Button } from '../ui/button'

const SliderCustomNextPrev = ({ children, className }: { children: React.ReactNode, className: string }) => {
    return (
        <Button
            className={`${className} size-11 rounded-full border border-gray-400`}
            variant='secondary'>
            {children}
        </Button>
    )
}

export default SliderCustomNextPrev