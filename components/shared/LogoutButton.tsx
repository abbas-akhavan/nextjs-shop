import useAppStore from '@/store/useAppStore';
import { supabase } from '@/utils/supabaseClient';
import React from 'react'
import toast from 'react-hot-toast';
import { Button } from '../ui/button';

const LogoutButton = ({ className, children }: { className?: string, children: React.ReactNode }) => {
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
    return (
        <Button className={className} onClick={() => signOut()}>
            {
                children
            }
        </Button>
    )
}

export default LogoutButton