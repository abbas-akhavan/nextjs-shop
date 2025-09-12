'use client';
import { supabase } from '@/utils/supabaseClient'
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/solid'
import React from 'react'
import toast from 'react-hot-toast';

const Header = () => {
    async function signOut() {
        const { error } = await supabase.auth.signOut();

        if (error) {
            toast.error(error.message)
        } else {
            toast.success('خروج با موفقیت انجام شد')
        }
    }
    return (
        <header className='bg-slate-950 p-3 shadow-lg border-b border-slate-800'>
            <section className='flex justify-between'>
                <div></div>
                <div><ArrowLeftStartOnRectangleIcon onClick={() => signOut()} className='w-6 h-6' /></div>
            </section>
        </header>
    )
}

export default Header