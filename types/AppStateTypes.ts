import { Product } from "./Product";

export interface CartItem {
    product: Product;
    quantity: number;
}

interface Cart {
    loading: boolean;
    cartItems: CartItem[];
}

export interface User {
    email: string;
    isLoggedIn: boolean;
    token: string;
}

export interface AppState {
    //cart
    cart: Cart;
    addToCart: (item: Product) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
    //user
    user: User | null;
    login: (user: Omit<User, "isLoggedIn">) => void;
    logout: () => void;
}