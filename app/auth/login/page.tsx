"use client";
import React, { useEffect, useState } from 'react'
import { supabase } from '../../../utils/supabaseClient'
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import ShowPassBtn from '@/components/auth/ShowPassBtn';
import toast from 'react-hot-toast';
import Spiner from '@/components/Spiner';
import { LoginFormData } from '@/types/LoginFormData';
import Link from 'next/link';
import useAppStore from '@/store/useAppStore';

const Auth = () => {
    const login = useAppStore((state) => state.login);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [showPass, setShowPass] = useState(false);
    const schema = yup.object().shape({
        email: yup.string().required('لطفا این قسمت را خالی نگذارید').email('ایمیل نامعتبر'),
        password: yup.string().required('لطفا این قسمت را خالی نگذارید').min(6, 'حداقل ۶ کاراکتر'),
    });
    const { register, handleSubmit, formState: { errors }, reset } = useForm<LoginFormData>({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    })

    async function signIn(data: LoginFormData) {
        setLoading(true);
        const { data: signInData, error } = await supabase.auth.signInWithPassword({ email: data.email, password: data.password });
        setLoading(false);
        if (error) {
            toast.error(error.message)
        }
        else {
            toast.success('ورود با موفقیت انجام شد');
            login({ email: data.email, token: signInData.session.access_token });
            router.push("/");
        }
    }


    useEffect(() => {
        supabase.auth.getUser()
            .then(({ data }) => {
                if (data.user) {
                    router.push('/')
                }
            })
    }, [])


    return (
        <main className='container mx-auto p-5 pt-40 md:pt-40'>
            <div className='  shadow-lg bg-gradient-to-br from-cyan-700 to-sky-950 p-[1px] w-full md:w-96 rounded-xl mx-auto'>
                <Card className='rounded-xl bg-gray-900 border-none text-white'>
                    <CardHeader>
                        <CardTitle className='text-center'>ورود</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form className='flex flex-col gap-3' onSubmit={handleSubmit(signIn)}>
                            <Label htmlFor='email'>ایمیل</Label>
                            <div>
                                <Input autoComplete='off' {...register('email')} id='email' type='text' className='border-none bg-slate-800 ltr' />
                                {errors.email && <div className='text-red-600 text-sm mt-1'>{errors.email.message}</div>}
                            </div>

                            <Label htmlFor='password'>رمز ورود</Label>
                            <div>
                                <div className='relative'>
                                    <Input autoComplete='off' {...register('password')} id='password' type={showPass ? 'text' : 'password'} className='border-none bg-slate-800 ltr' />
                                    <ShowPassBtn showPass={showPass} setShowPass={setShowPass} />
                                </div>
                                {errors.password && <div className='text-red-600 text-sm mt-1'>{errors.password.message}</div>}
                            </div>
                            <Button disabled={loading} className='mt-3 w-fit mx-auto px-8' variant="secondary">
                                {
                                    loading
                                        ? <Spiner />
                                        : 'ورود'
                                }
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter>
                        حساب ندارید ؟ <Link className='mr-2 text-blue-400' href='/auth/register'>ثبت نام</Link>
                    </CardFooter>
                </Card>
            </div>
        </main>
    )
}

export default Auth