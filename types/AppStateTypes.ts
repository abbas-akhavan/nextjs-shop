import { Product } from "./Product";

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface User {
    email: string;
    isLoggedIn: boolean;
}

export interface AppState {
    //cart
    cart: CartItem[];
    addToCart: (item: Product) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
    //user
    user: User | null;
    login: (user: Omit<User, "isLoggedIn">) => void;
    logout: () => void;
}