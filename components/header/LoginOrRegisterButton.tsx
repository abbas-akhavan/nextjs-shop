'use client'
import React, { useEffect, useState } from 'react';
import { ArrowLeftEndOnRectangleIcon, ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/solid';
import { supabase } from '@/utils/supabaseClient';
import { login, logout } from '@/lib/store/features/auth/authSlice';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { Button } from '../ui/button';
import useAppStore from '@/store/useAppStore';
import LogoutButton from '../shared/LogoutButton';
const LoginOrRegisterButton = () => {
    const user = useAppStore((state) => state.user)

    if (user.isLoading) return (
        <div className='hidden md:block skeleton-bg w-28 rounded-sm h-9'></div>
    )

    return (
        <>
            {
                user.userInfo?.isLoggedIn
                    ? <LogoutButton className='!size-9 hidden md:inline-flex md:!w-auto md:!h-9 bg-digikala hover:bg-digikala'>
                        <ArrowLeftStartOnRectangleIcon className='!size-6' />
                        <span>خروج</span>
                    </LogoutButton>
                    : <Button asChild className='!size-9 hidden md:inline-flex md:!w-auto md:!h-9 border border-slate-600 bg-transparent hover:bg-gray-900'>
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