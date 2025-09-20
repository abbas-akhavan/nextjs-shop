import { AppState } from '@/types/AppStateTypes';
import { create } from 'zustand';

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