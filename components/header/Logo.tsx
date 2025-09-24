import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <Link href='/'>
            <Image src='/digikala-logo.svg' alt='اخوان شاپ' width={180} height={30} className='drop-shadow-lg hidden md:block' />
        </Link>
    )
}

export default Logo