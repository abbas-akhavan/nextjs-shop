"use client";
import React, { useEffect, useState } from 'react'
import { supabase } from '../../utils/supabaseClient'
import { useRouter } from 'next/navigation';

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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


    useEffect(() => {
        supabase.auth.getUser()
            .then(({ data }) => {
                if (!data.user) {
                    alert('no user')
                } else {
                    router.push('/')
                }
            })
    }, [])


    return (
        <main className="flex flex-col items-center justify-center min-h-screen gap-4 p-6">
            <h1 className="text-2xl font-bold">ورود / ثبت‌نام</h1>

            <input
                type="email"
                placeholder="ایمیل"
                className="border px-3 py-2 rounded w-64"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="رمز عبور"
                className="border px-3 py-2 rounded w-64"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex gap-3">
                <button onClick={signIn} className="bg-blue-500 text-white px-4 py-2 rounded" disabled={loading}>
                    ورود
                </button>
                <button onClick={signUp} className="bg-green-500 text-white px-4 py-2 rounded" disabled={loading}>
                    ثبت‌نام
                </button>
            </div>
        </main>

    )
}

export default Auth