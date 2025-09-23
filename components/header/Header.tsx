'use client';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import React from 'react'
import LoginOrRegisterButton from './LoginOrRegisterButton';
import Cart from './Cart';

const Header = () => {
    const dispatch = useAppDispatch();

    return (
        <header className='bg-gray-700 p-3 shadow-lg border-b border-gray-600'>
            <div className='container mx-auto'>
                <section className='flex justify-between'>
                    <div></div>
                    <div className='flex items-center gap-2'>
                        <LoginOrRegisterButton />
                        <Cart />
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Header