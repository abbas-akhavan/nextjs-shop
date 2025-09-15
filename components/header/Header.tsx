'use client';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import React from 'react'
import LoginOrRegisterButton from './LoginOrRegisterButton';

const Header = () => {
    const dispatch = useAppDispatch();

    return (
        <header className='bg-slate-950 p-3 shadow-lg border-b border-slate-800'>
            <div className='container mx-auto'>
                <section className='flex justify-between'>
                    <div></div>
                    <LoginOrRegisterButton />
                </section>
            </div>
        </header>
    )
}

export default Header