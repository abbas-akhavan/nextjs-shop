

'use client'
import { MobileNavbarItem } from '@/types/MobileNavbarItem';
import { HomeIcon, ShoppingCartIcon, Squares2X2Icon, UserIcon } from '@heroicons/react/24/outline';
import {
    HomeIcon as HomeIconSolid,
    ShoppingCartIcon as ShoppingCartIconSolid,
    UserIcon as UserIconSolid,
    Squares2X2Icon as Squares2X2IconSolid,
    ArrowLeftStartOnRectangleIcon,
    ArrowLeftEndOnRectangleIcon
} from '@heroicons/react/24/solid';
import { url } from 'inspector';
import React from 'react'
import MobileNavbarItemComponent from './MobileNavbarItemComponent';
import useAppStore from '@/store/useAppStore';
import LogoutButton from './LogoutButton';
const navbarItems: MobileNavbarItem[] = [
    {
        title: 'خانه',
        icon: <HomeIcon className='w-6 h-6' />,
        activeIcon: <HomeIconSolid className='w-6 h-6' />,
        url: '/'
    },
    {
        title: 'سبد',
        icon: <ShoppingCartIcon className='w-6 h-6' />,
        activeIcon: <ShoppingCartIconSolid className='w-6 h-6' />,
        url: '/cart'
    },
    {
        title: 'محصولات',
        icon: <Squares2X2Icon className='w-6 h-6' />,
        activeIcon: <Squares2X2IconSolid className='w-6 h-6' />,
        url: '/products'
    },
];
const navbarLoginItem = {
    title: 'ورود',
    icon: <ArrowLeftEndOnRectangleIcon className='w-6 h-6' />,
    activeIcon: <ArrowLeftEndOnRectangleIcon className='w-6 h-6' />,
    url: '/auth/login'
}
const MobilleNavbar = () => {
    const cart = useAppStore(state => state.cart)
    const user = useAppStore(state => state.user.userInfo)
    const cartCount = cart.cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    return (
        <nav className='fixed left-0 bottom-0 z-30 w-screen flex justify-around p-2 bg-slate-900 border-t border-slate-700 md:hidden'>
            {
                navbarItems.map(item => (
                    <MobileNavbarItemComponent key={item.title} item={item} badge={item.url === '/cart' ? cartCount : undefined} />
                ))
            }
            {
                user
                    ?
                    <LogoutButton className='flex-col gap-0 items-center bg-digikala hover:bg-digikala py-1 px-2 h-auto'>
                        <ArrowLeftStartOnRectangleIcon className='!w-6 !h-6' />
                        <span className='text-xs'>خروج</span>
                    </LogoutButton>
                    : <MobileNavbarItemComponent item={navbarLoginItem} />

            }
        </nav>
    )
}

export default MobilleNavbar