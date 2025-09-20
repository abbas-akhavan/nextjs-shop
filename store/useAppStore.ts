import { create } from 'zustand';
interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

interface User {
    email: string;
    isLoggedIn: boolean;
}

interface AppState {
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

const useAppStore = create<AppState>((set) => ({
    cart: [],
    addToCart: (item) => set((state) => {
        const existing = state.cart.find((product) => product.id === item.id);
        if (existing) {
            return {
                cart: state.cart.map((product) =>
                    product.id === item.id ? { ...product, quantity: product.quantity + 1 } : product
                )
            }
        }
        return { cart: [...state.cart, { ...item, quantity: 1 }] }
    }),
    removeFromCart: (id) => set((state) => ({ cart: state.cart.filter((product) => product.id !== id) })),
    clearCart: () => set({ cart: [] }),
    user: null,
    login: (user) => set({ user: { ...user, isLoggedIn: true } }),
    logout: () => set({ user: null, cart: [] })
}));

export default useAppStore;