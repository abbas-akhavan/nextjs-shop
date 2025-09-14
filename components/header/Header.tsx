'use client';
import { login, logout } from '@/lib/store/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { supabase } from '@/utils/supabaseClient'
import { ArrowLeftEndOnRectangleIcon, ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';
import React, { useEffect } from 'react'
import toast from 'react-hot-toast';

const Header = () => {

    const isLogin = useAppSelector((state) => state.auth.isLogin)
    const dispatch = useAppDispatch();

    async function signOut() {
        const { error } = await supabase.auth.signOut();

        if (error) {
            toast.error(error.message)
        } else {
            dispatch(logout());
            toast.success('خروج با موفقیت انجام شد')
        }
    }

    useEffect(() => {
        supabase.auth.getUser()
            .then(({ data }) => {
                if (data.user) {
                    dispatch(login());
                }
            })
    }, []);

    return (
        <header className='bg-slate-950 p-3 shadow-lg border-b border-slate-800'>
            <div className='container mx-auto'>
                <section className='flex justify-between'>
                    <div></div>

                </section>
            </div>
        </header>
    )
}

export default Header