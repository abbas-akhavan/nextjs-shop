import { Product } from "./Product";

export interface CartItem {
    product: Product;
    quantity: number;
}

interface Cart {
    loading: boolean;
    cartItems: CartItem[];
}

export interface UserInfo {
    email: string;
    isLoggedIn: boolean;
    token: string;

}

export interface User {
    isLoading: boolean;
    userInfo: UserInfo | null;
}

export interface AppState {
    //cart
    cart: Cart;
    addToCart: (item: Product) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
    //user
    user: User;
    login: (user: Omit<UserInfo, "isLoggedIn">) => void;
    logout: () => void;
}