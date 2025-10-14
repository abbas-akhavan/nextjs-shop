import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const VerticalLogo = () => {
    return (
        <Link href='/'>
            <Image src='/images/full-vertical-logo.svg' alt='دیجی کالا' width={100} height={69} />
        </Link>
    )
}

export default VerticalLogo