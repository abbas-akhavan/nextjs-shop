import { AmazingOffer } from '@/types/AmazingOffer';
import React from 'react'
const amazingOffers = [
    {
        id: "offer-1",
        discount_percent: 20,
        old_price: 12000000,
        new_price: 9600000,
        start_date: "2025-09-20",
        end_date: "2025-09-25",
        is_active: true,
        products: {
            id: "product-1",
            name: "گوشی موبایل سامسونگ A54",
            price: 12000000,
            image_url: "https://example.com/phone.jpg",
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
        products: {
            id: "product-2",
            name: "هدفون بلوتوثی",
            price: 8000000,
            image_url: "https://example.com/headphone.jpg",
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
        products: {
            id: "product-3",
            name: "لپ‌تاپ ایسوس",
            price: 15000000,
            image_url: "https://example.com/laptop.jpg",
        },
    },
];
async function getData() {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return amazingOffers
}
const AmazingOffersContainer = async () => {
    const data: AmazingOffer[] = await getData();
    return (
        <div>{data.length}</div>
    )
}

export default AmazingOffersContainer