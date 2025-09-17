'use client'
import React from 'react'
import { Button } from '../ui/button'

const SliderCustomNextPrev = ({ children, behaviour }: { children: React.ReactNode, behaviour: 'next' | 'prev' }) => {
    return (
        <Button
            className={`${behaviour == 'next' ? 'home-slider-custom-next' : 'home-slider-custom-prev'} size-11 rounded-full border border-gray-400`}
            variant='secondary'>
            {children}
        </Button>
    )
}

export default SliderCustomNextPrev