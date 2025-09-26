import { PartnerShip } from '@/types/PartnerShip';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
const partnerShips: PartnerShip[] = [
    {
        id: "partner-ship1",
        title: "پارتنر ری بن",
        banner: "https://dkstatics-public.digikala.com/digikala-adservice-banners/c7b046d39683218cc60c5b09dccf5862df371015_1758091722.jpg?x-oss-process=image/quality,q_95",
        link: "/landing/rayban",
    },
    {
        id: "partner-ship2",
        title: "پارتنر نت باکس",
        banner: "https://dkstatics-public.digikala.com/digikala-adservice-banners/941074d872db514bb5ee7786186f154294ab53b5_1758104330.jpg?x-oss-process=image/quality,q_95",
        link: "/landing/netbox",
    },
];
async function getData() {
    await new Promise(resolve => setTimeout(resolve, 3000))
    return partnerShips
}
const Grid2BannerContainer = async () => {
    const data = await getData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-12'>
            {
                data.map(partnerShip => (
                    <Link key={partnerShip.id} href={partnerShip.link}>
                        <Image className='rounded-xl w-full' src={partnerShip.banner} alt={partnerShip.title} width={820} height={328} />
                    </Link>
                ))
            }
        </div>
    )
}

export default Grid2BannerContainer