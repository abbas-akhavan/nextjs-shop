import { SliderItem } from '@/types/SliderItem';
import React from 'react'
const Slider = async () => {
    const res = await fetch('https://zpuenityjokfjhmutjjv.supabase.co/rest/v1/sliders', {
        headers: {
            apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwdWVuaXR5am9rZmpobXV0amp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTczMjgxNDgsImV4cCI6MjA3MjkwNDE0OH0.e1JlTc9hN3ZORLryHcV1g2K2w26Mqa9Nv5iybHk0KZM',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwdWVuaXR5am9rZmpobXV0amp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTczMjgxNDgsImV4cCI6MjA3MjkwNDE0OH0.e1JlTc9hN3ZORLryHcV1g2K2w26Mqa9Nv5iybHk0KZM'
        },
        cache: 'no-store'
    });
    const data: SliderItem[] = await res.json();

    return (
        <div className='text-center'>SLider</div>
    )
}

export default Slider