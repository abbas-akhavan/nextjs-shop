"use client";
import React, { useEffect, useState } from 'react'
import { supabase } from '../../utils/supabaseClient'
import { useRouter } from 'next/navigation';

const Auth = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    async function signUp() {
        setLoading(true);
        const { error } = await supabase.auth.signUp({ email, password });
        setLoading(false);
        if (error) alert(error.message);
        else {
            alert("ثبت‌نام موفق! ایمیل خودت رو چک کن.");
            router.push("/");
        }
    }

    async function signIn() {
        setLoading(true);
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        setLoading(false);
        if (error) alert(error.message);
        else router.push("/");
    }


    // useEffect(() => {
    //     supabase.auth.getUser()
    //         .then(({ data }) => {
    //             if (!data.user) {
    //                 alert('no user')
    //             } else {
    //                 router.push('/')
    //             }
    //         })
    // }, [])


    return (
        <main>
            <div className='bg-gradient-to-r from-red-600 to-purple-800 p-2'>
                <form>
                    
                </form>
            </div>
        </main>
    )
}

export default Auth