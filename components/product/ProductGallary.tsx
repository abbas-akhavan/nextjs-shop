'use client'
import Image from 'next/image'
import React from 'react'

interface Props {
    src?: string | null;
    alt?: string;
}

const ProductGallary = ({ src, alt }: Props) => {
    return (
        <div>
            <Image className='rounded-md' src={src ?? '/public/images/imagePlaceholder.png'} alt={alt ?? 'Product image'} width={800} height={800} />
        </div>
    )
}

export default ProductGallary