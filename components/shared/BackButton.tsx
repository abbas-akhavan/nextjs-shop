import { useRouter } from 'next/navigation';
import React from 'react'
import { Button } from '../ui/button';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const BackButton = ({ className }: { className?: string }) => {
    const router = useRouter();

    const handleBack = () => {
        const fromOutside = document.referrer && !document.referrer.includes(window.location.origin);

        if (window.history.length > 1 && !fromOutside) {
            router.back();
        } else {
            router.push('/'); // مسیر منطقی قبلی در پروژه
        }
    };

    return (
        <Button className={`bg-inherit hover:bg-inherit ${className ? className : ''}`} onClick={handleBack}><ArrowRightIcon className='!w-5 !h-5' /></Button>
    )
}

export default BackButton