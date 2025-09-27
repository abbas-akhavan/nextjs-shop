import { Product } from "./Product";

export interface AmazingOffer {
    id: string;
    created_at: string;
    product_id: number;
    old_price: number;
    new_price: number;
    priority: number;
    is_active: boolean;
    products: Product;
}
