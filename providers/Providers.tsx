'use client'
import useAppStore from '@/store/useAppStore';
import { supabase } from '@/utils/supabaseClient';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { ReactNode, useEffect, useState } from 'react'

const Providers = ({ children }: { children: ReactNode }) => {
    const [queryClient] = useState(() => new QueryClient());
    const login = useAppStore((state) => state.login);
    const logout = useAppStore((state) => state.logout);

    useEffect(() => {
        supabase.auth.getSession()
            .then(({ data: { session } }) => {
                if (session?.user?.email) {
                    login({ email: session.user?.email, token: session.access_token })
                } else {
                    logout()
                }
            })
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default Providers