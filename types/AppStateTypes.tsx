export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

export interface User {
    email: string;
    isLoggedIn: boolean;
}

export interface AppState {
    //cart
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
    //user
    user: User | null;
    login: (user: Omit<User, "isLoggedIn">) => void;
    logout: () => void;
}