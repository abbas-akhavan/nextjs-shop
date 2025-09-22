import { AmazingOffer } from '@/types/AmazingOffer';
import React from 'react'
import AmazingSlider from './AmazingSlider';
const amazingOffers = [
    {
        id: "offer-1",
        discount_percent: 20,
        old_price: 12000000,
        new_price: 9600000,
        start_date: "2025-09-20",
        end_date: "2025-09-25",
        is_active: true,
        product: {
            id: "product-1",
            name: "گوشی موبایل سامسونگ A54",
            price: 12000000,
            image_url: "https://dkstatics-public.digikala.com/digikala-products/2699d74e3bf1b7db530bfe4ce737f5591c36fb39_1725969492.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        },
    },
    {
        id: "offer-2",
        discount_percent: 35,
        old_price: 8000000,
        new_price: 5200000,
        start_date: "2025-09-18",
        end_date: "2025-09-22",
        is_active: true,
        product: {
            id: "product-2",
            name: "هدفون بلوتوثی",
            price: 8000000,
            image_url: "https://dkstatics-public.digikala.com/digikala-products/487620e2936e1dd07238849a058fe472da39c1a5_1745824997.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        },
    },
    {
        id: "offer-3",
        discount_percent: 15,
        old_price: 15000000,
        new_price: 12750000,
        start_date: "2025-09-15",
        end_date: "2025-09-30",
        is_active: true,
        product: {
            id: "product-3",
            name: "لپ‌تاپ ایسوس",
            price: 15000000,
            image_url: "https://dkstatics-public.digikala.com/digikala-products/0ba759e574703b02469954c9b75867debc85e3d0_1754236994.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        },
    },
    {
        id: "offer-1",
        discount_percent: 20,
        old_price: 12000000,
        new_price: 9600000,
        start_date: "2025-09-20",
        end_date: "2025-09-25",
        is_active: true,
        product: {
            id: "product-1",
            name: "گوشی موبایل سامسونگ A54",
            price: 12000000,
            image_url: "https://dkstatics-public.digikala.com/digikala-products/2699d74e3bf1b7db530bfe4ce737f5591c36fb39_1725969492.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        },
    },
    {
        id: "offer-2",
        discount_percent: 35,
        old_price: 8000000,
        new_price: 5200000,
        start_date: "2025-09-18",
        end_date: "2025-09-22",
        is_active: true,
        product: {
            id: "product-2",
            name: "هدفون بلوتوثی",
            price: 8000000,
            image_url: "https://dkstatics-public.digikala.com/digikala-products/487620e2936e1dd07238849a058fe472da39c1a5_1745824997.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        },
    },
    {
        id: "offer-3",
        discount_percent: 15,
        old_price: 15000000,
        new_price: 12750000,
        start_date: "2025-09-15",
        end_date: "2025-09-30",
        is_active: true,
        product: {
            id: "product-3",
            name: "لپ‌تاپ ایسوس",
            price: 15000000,
            image_url: "https://dkstatics-public.digikala.com/digikala-products/0ba759e574703b02469954c9b75867debc85e3d0_1754236994.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        },
    },
    {
        id: "offer-1",
        discount_percent: 20,
        old_price: 12000000,
        new_price: 9600000,
        start_date: "2025-09-20",
        end_date: "2025-09-25",
        is_active: true,
        product: {
            id: "product-1",
            name: "گوشی موبایل سامسونگ A54",
            price: 12000000,
            image_url: "https://dkstatics-public.digikala.com/digikala-products/2699d74e3bf1b7db530bfe4ce737f5591c36fb39_1725969492.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        },
    },
    {
        id: "offer-2",
        discount_percent: 35,
        old_price: 8000000,
        new_price: 5200000,
        start_date: "2025-09-18",
        end_date: "2025-09-22",
        is_active: true,
        product: {
            id: "product-2",
            name: "هدفون بلوتوثی",
            price: 8000000,
            image_url: "https://dkstatics-public.digikala.com/digikala-products/487620e2936e1dd07238849a058fe472da39c1a5_1745824997.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        },
    },
    {
        id: "offer-3",
        discount_percent: 15,
        old_price: 15000000,
        new_price: 12750000,
        start_date: "2025-09-15",
        end_date: "2025-09-30",
        is_active: true,
        product: {
            id: "product-3",
            name: "لپ‌تاپ ایسوس",
            price: 15000000,
            image_url: "https://dkstatics-public.digikala.com/digikala-products/0ba759e574703b02469954c9b75867debc85e3d0_1754236994.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        },
    },
    {
        id: "offer-1",
        discount_percent: 20,
        old_price: 12000000,
        new_price: 9600000,
        start_date: "2025-09-20",
        end_date: "2025-09-25",
        is_active: true,
        product: {
            id: "product-1",
            name: "گوشی موبایل سامسونگ A54",
            price: 12000000,
            image_url: "https://dkstatics-public.digikala.com/digikala-products/2699d74e3bf1b7db530bfe4ce737f5591c36fb39_1725969492.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        },
    },
    {
        id: "offer-2",
        discount_percent: 35,
        old_price: 8000000,
        new_price: 5200000,
        start_date: "2025-09-18",
        end_date: "2025-09-22",
        is_active: true,
        product: {
            id: "product-2",
            name: "هدفون بلوتوثی",
            price: 8000000,
            image_url: "https://dkstatics-public.digikala.com/digikala-products/487620e2936e1dd07238849a058fe472da39c1a5_1745824997.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        },
    },
    {
        id: "offer-3",
        discount_percent: 15,
        old_price: 15000000,
        new_price: 12750000,
        start_date: "2025-09-15",
        end_date: "2025-09-30",
        is_active: true,
        product: {
            id: "product-3",
            name: "لپ‌تاپ ایسوس",
            price: 15000000,
            image_url: "https://dkstatics-public.digikala.com/digikala-products/0ba759e574703b02469954c9b75867debc85e3d0_1754236994.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        },
    },
];
async function getData() {
    await new Promise(resolve => setTimeout(resolve, 3000))
    return amazingOffers
}
const AmazingOffersContainer = async () => {
    const data: AmazingOffer[] = await getData();
    return (
        <div className='container mx-auto mt-5 px-2'>
            <div className='bg-red-600 py-4 rounded-xl relative'>
                <AmazingSlider items={data} />
            </div>
        </div>
    )
}

export default AmazingOffersContainer