'use client'
import React, { useEffect, useState } from 'react';
import { ArrowLeftEndOnRectangleIcon, ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/solid';
import { supabase } from '@/utils/supabaseClient';
import { login, logout } from '@/lib/store/features/auth/authSlice';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { Button } from '../ui/button';
import useAppStore from '@/store/useAppStore';
const LoginOrRegisterButton = () => {
    const user = useAppStore((state) => state.user)
    const logout = useAppStore((state) => state.logout);

    async function signOut() {
        const { error } = await supabase.auth.signOut();
        if (error) {
            toast.error(error.message)
        } else {
            logout();
            toast.success('خروج با موفقیت انجام شد');
        }
    }

    if (user.isLoading) return (
        <div className='skeleton-bg w-28 rounded-sm h-9'></div>
    )

    return (
        <>
            {
                user.userInfo?.isLoggedIn
                    ? <Button variant="destructive" className='!size-9 md:!w-auto md:!h-9 ' onClick={() => signOut()}>
                        <ArrowLeftStartOnRectangleIcon className='!size-6' />
                        <span className='hidden md:inline-block'>خروج</span>
                    </Button>
                    : <Button asChild className='!size-9 md:!w-auto md:!h-9 border border-slate-600 bg-transparent hover:bg-gray-900'>
                        <Link href="/auth/login" >
                            <ArrowLeftEndOnRectangleIcon className='!size-6' />
                            <span className='hidden md:inline-block'>ورود | ثبت نام</span>
                        </Link>
                    </Button>
            }
        </>
    )
}

export default LoginOrRegisterButton