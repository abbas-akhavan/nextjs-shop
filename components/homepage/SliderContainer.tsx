import React from 'react'
import Slider from './Slider';

const SliderContainer = async () => {
    const res = await fetch('https://zpuenityjokfjhmutjjv.supabase.co/rest/v1/sliders', {
        headers: {
            apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwdWVuaXR5am9rZmpobXV0amp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTczMjgxNDgsImV4cCI6MjA3MjkwNDE0OH0.e1JlTc9hN3ZORLryHcV1g2K2w26Mqa9Nv5iybHk0KZM',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwdWVuaXR5am9rZmpobXV0amp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTczMjgxNDgsImV4cCI6MjA3MjkwNDE0OH0.e1JlTc9hN3ZORLryHcV1g2K2w26Mqa9Nv5iybHk0KZM'
        },
        cache: 'no-store'
    });
    const data = await res.json();
    // const data = await new Promise(resolve => setTimeout(() => resolve(res.json()), 180000));
    return (
        <div className='relative group mt-2'>
            <Slider items={data} />
        </div>
    )
}

export default SliderContainer  