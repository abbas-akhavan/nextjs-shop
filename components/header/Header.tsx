'use client';
import React from 'react'
import LoginOrRegisterButton from './LoginOrRegisterButton';
import Cart from './Cart';
import Logo from './Logo';
import Search from './Search';
import Navbar from './Navbar';

const Header = () => {

    return (
        <header className='bg-slate-800 py-3 shadow-lg border-b border-slate-700 sticky top-0 z-40 relative'>
            <div className='container mx-auto'>
                <section className='flex items-center md:gap-5'>
                    <Logo />
                    <Search />
                    <div className='flex items-center gap-2 mr-auto'>
                        <LoginOrRegisterButton />
                        <Cart />
                    </div>
                </section>
            </div>
            <Navbar />
        </header>
    )
}

export default Header