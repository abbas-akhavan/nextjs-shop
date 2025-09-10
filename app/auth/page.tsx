"use client";
import React, { useEffect, useState } from 'react'
import { supabase } from '../../utils/supabaseClient'
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const Auth = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const schema = yup.object().shape({
        email: yup.string().email('ایمیل نامعتبر'),
        password: yup.string().min(6,'حداقل ۶ کاراکتر'),
    });
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    })



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

    async function signIn(data) {
        setLoading(true);
        const { error } = await supabase.auth.signInWithPassword({ email : data.email, password : data.password});
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
        <main className='pt-64'>
            <div className='  shadow-lg bg-gradient-to-br from-cyan-700 to-sky-950 p-[1px] w-96 rounded-xl mx-auto'>
                <Card className='rounded-xl bg-gray-900 border-none text-white'>
                    <CardHeader>
                        <CardTitle className='text-center'>ورود</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form className='flex flex-col gap-3' onSubmit={handleSubmit(signIn)}>
                            <Label className='' htmlFor='email'>ایمیل</Label>
                            <div>
                                <Input {...register('email')} id='email' type='text' className='border-none bg-slate-800' />
                                {errors.email && <div className='text-red-600 text-sm mt-1'>{errors.email.message}</div>}
                            </div>

                            <Label className='' htmlFor='password'>رمز ورود</Label>
                            <div>
                                <Input {...register('password')} id='password' type='text' className='border-none bg-slate-800' />
                                {errors.password && <div className='text-red-600 text-sm mt-1'>{errors.password.message}</div>}
                            </div>
                            <Button className='mt-3 w-fit mx-auto px-8' variant="secondary">ورود</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}

export default Auth