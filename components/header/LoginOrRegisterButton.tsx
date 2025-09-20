'use client'
import React, { useEffect } from 'react';
import { ArrowLeftEndOnRectangleIcon, ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/solid';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { supabase } from '@/utils/supabaseClient';
import { login, logout } from '@/lib/store/features/auth/authSlice';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { Button } from '../ui/button';
import useAppStore from '@/store/useAppStore';
const LoginOrRegisterButton = () => {
    const user = useAppStore((state) => state.user)
    const login = useAppStore((state) => state.login);
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

    useEffect(() => {
        supabase.auth.getUser()
            .then(({ data }) => {
                if (data.user?.email) {
                    login({ email: data.user?.email })
                } else {
                    logout()
                }
            })
    }, []);

    return (
        <div>
            {
                user?.isLoggedIn
                    ? <Button variant="destructive" onClick={() => signOut()}>
                        <ArrowLeftStartOnRectangleIcon className='!size-5' />
                        خروج
                    </Button>
                    : <Button variant='secondary' asChild>
                        <Link href="/auth/login" >
                            <ArrowLeftEndOnRectangleIcon className='!size-5' />
                            ورود | ثبت نام
                        </Link>
                    </Button>
            }
        </div>
    )
}

export default LoginOrRegisterButton