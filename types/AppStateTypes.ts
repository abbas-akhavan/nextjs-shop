import { Product } from "./Product";

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface Cart {
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

export interface searchHistory {
    title: string;
    url: string;
}

export interface AppState {
    //cart
    cart: Cart;
    addToCart: (item: Product) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    //user
    user: User;
    login: (user: Omit<UserInfo, "isLoggedIn">) => void;
    logout: () => void;
    overlay: boolean;
    setOverlay: (value: boolean) => void;
    searchHistory: searchHistory[];
    addSearchHistory: (item: searchHistory) => void,
    clearSearchHistory: () => void
}