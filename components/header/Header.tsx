'use client';
import { supabase } from '@/utils/supabaseClient'
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Header = () => {
    async function signOut() {
        const { error } = await supabase.auth.signOut();

        if (error) {
            console.log('خطا در خرورج', error.message)
        } else {
            alert('خروج با موفقیت انجام شد')
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