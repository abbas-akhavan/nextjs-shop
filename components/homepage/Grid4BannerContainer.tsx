import { PartnerShip } from '@/types/PartnerShip';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const partnerShips: PartnerShip[] = [
    {
        id: "partner-ship1",
        title: "پارتنر شیپ تاج",
        banner: "https://dkstatics-public.digikala.com/digikala-adservice-banners/872e00ff227aff4890c122808cad30494ed26aeb_1757854763.png?x-oss-process=image/quality,q_95",
        link: "/landing/taj",
    },
    {
        id: "partner-ship2",
        title: "پارتنر شیپ زرین",
        banner: "https://dkstatics-public.digikala.com/digikala-adservice-banners/304d40c7d6580cf46db2d40473d15ca905c871a2_1758454014.jpg?x-oss-process=image/quality,q_95",
        link: "/landing/zarin",
    },

    {
        id: "partner-ship3",
        title: "پارتنر شیپ عروس",
        banner: "https://dkstatics-public.digikala.com/digikala-adservice-banners/434da6ee067ce7d8094afd839461b1a758542bfb_1758010985.jpg?x-oss-process=image/quality,q_95",
        link: "/landing/aroos",
    },
    {
        id: "partner-ship4",
        title: "پارتنر شیپ لوکس",
        banner: "https://dkstatics-public.digikala.com/digikala-adservice-banners/439b763258dcff90958e9b9bd0069f67b7cdbc6b_1757930148.jpg?x-oss-process=image/quality,q_95",
        link: "/landing/lux",
    },
];
async function getData() {
    await new Promise(resolve => setTimeout(resolve, 3000))
    return partnerShips
}
const Grid4BannerContainer = async () => {
    const data = await getData()
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-5'>
            {
                data.map(partnerShip => (
                    <Link key={partnerShip.id} href={partnerShip.link}>
                        <Image className='rounded-xl w-full' src={partnerShip.banner} alt={partnerShip.title} width={322} height={242} />
                    </Link>
                ))
            }
        </div>
    )
}

export default Grid4BannerContainer