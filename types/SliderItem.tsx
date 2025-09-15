import { number, string } from "yup";

export interface SliderItem {
    id: number,
    created_at: string,
    title: string,
    image_url: string,
    link: string,
    order: number
}