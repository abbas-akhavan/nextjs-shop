import { Product } from "./Product";

export interface AmazingOffer {
    id: string;
    discount_percent: number;
    old_price: number;
    new_price: number;
    start_date: string;
    end_date: string;
    is_active: boolean;
    product: Product;
}
