'use client'
import useScrollDown from '@/hooks/useSrollDown';
import { debounce, throttle } from '@/utils/useful-functions';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {
    const scrollDown = useScrollDown();
    return (
        <div className={`bg-slate-800 border-b border-slate-700 flex items-start absolute w-full top-full transition-all duration-100 overflow-hidden ${scrollDown ? 'h-0' : 'h-8'}`}>
            <div className='container'>
                <Link href='/products'>محصولات</Link>
            </div>
        </div>
    )
}

export default Navbar