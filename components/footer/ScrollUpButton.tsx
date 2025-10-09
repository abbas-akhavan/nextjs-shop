'use client'
import React from 'react'
import { Button } from '../ui/button'
import { ChevronUpIcon } from '@heroicons/react/24/solid'

const ScrollUpButton = () => {
    return (
        <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='border border-slate-700 bg-transparent hover:bg-slate-950 text-xs rounded-full md:rounded-sm'>
            بازگشت به بالا
            <ChevronUpIcon className='!size-4' />
        </Button>
    )
}

export default ScrollUpButton