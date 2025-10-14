import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='mt-14 flex flex-col gap-4 items-center font-semibold'>
      <Image className='shadow-lg rounded-xl w-3/4 max-w-[600]' src='/images/notFound.jpg' alt='notFound' width={300} height={300} />
      <div className='text-lg'>صفحه مورد نظر پیدا نشد !</div>
      <Link href='/' className='text-xs flex items-center gap-2 py-2 px-4 border border-slate-700 bg-transparent hover:bg-slate-950 rounded-full md:text-base'>
        بازگشت به صفحه اصلی
        <ChevronLeftIcon className='w-4 h-4' />
      </Link>
    </div>
  )
}

export default NotFound