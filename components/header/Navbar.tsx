'use client'
import useScrollDown from '@/hooks/useSrollDown';
import { debounce, throttle } from '@/utils/useful-functions';
import { FireIcon, PercentBadgeIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { Bars3Icon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'

const navbarItems = [
    {
        url: '/products',
        title: 'محصولات',
        icon: <Bars3Icon className='w-5 h-5' />
    },
    {
        url: '#',
        title: 'شگفت انگیزها',
        icon: <PercentBadgeIcon className='w-5 h-5' />
    },
    {
        url: '#',
        title: 'سوپر مارکت',
        icon: <ShoppingBagIcon className='w-5 h-5' />
    },
    {
        url: '#',
        title: 'پرفروش ها',
        icon: <FireIcon className='w-5 h-5' />
    },
]

const Navbar = () => {
    const scrollDown = useScrollDown();
    const [offsetLeft, setOffsetLeft] = useState(0);
    const [width, setWidth] = useState(0);

    function handleHover(event: React.MouseEvent<HTMLAnchorElement>) {
        event.persist();
        setOffsetLeft(event.currentTarget.offsetLeft);
        setWidth(event.currentTarget.offsetWidth)
    }
    function handleMouseLeave(event: React.MouseEvent<HTMLAnchorElement>) {
        setWidth(0)
    }

    return (
        <div className={`hidden bg-slate-800 border-b border-slate-700 lg:flex items-start absolute w-full top-full transition-all duration-100 overflow-hidden z-10 ${scrollDown ? 'h-0' : 'h-10'}`}>
            <nav className='container flex pt-2'>
                {
                    navbarItems.map(item => (
                        <Link key={item.title} className='text-sm px-3 flex gap-2' href={item.url} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
                            {item.icon}
                            {item.title}
                        </Link>
                    ))
                }
            </nav>
            <span className='absolute h-[2px] bg-digikala transition-all duration-200 bottom-0' style={{ left: offsetLeft, width: width }}></span>
        </div>
    )
}

export default Navbar