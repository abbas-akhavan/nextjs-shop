import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <Link href='/' className='hidden md:block'>
            <Image src='/digikala-logo.svg' alt='اخوان شاپ' width={180} height={30} className='drop-shadow-lg' />
        </Link>
    )
}

export default Logo