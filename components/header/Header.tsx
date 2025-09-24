'use client';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import React from 'react'
import LoginOrRegisterButton from './LoginOrRegisterButton';
import Cart from './Cart';
import Logo from './Logo';
import Search from './Search';

const Header = () => {
    const dispatch = useAppDispatch();

    return (
        <header className='bg-gray-800 p-3 shadow-lg border-b border-gray-600 sticky top-0 z-20'>
            <div className='container mx-auto'>
                <section className='flex items-center gap-5'>
                    <Logo />
                    <Search />
                    <div className='flex items-center gap-2 mr-auto'>
                        <LoginOrRegisterButton />
                        <Cart />
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Header