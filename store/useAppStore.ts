import { AppState } from '@/types/AppStateTypes';
import { create } from 'zustand';

const useAppStore = create<AppState>((set) => ({
    cart: [],
    addToCart: (productToAdd) => set((state) => {
        const existing = state.cart.find((cartItem) => cartItem.product.id === productToAdd.id);
        console.log(state.cart)
        if (existing) {
            return {
                cart: state.cart.map((cartItem) =>
                    cartItem.product.id === productToAdd.id ? { ...cartItem, quantity: (cartItem.quantity + 1) } : cartItem
                )
            }
        }
        return { cart: [...state.cart, { product: productToAdd, quantity: 1 }] }
    }),
    removeFromCart: (id) => set((state) => ({ cart: state.cart.filter((cartItem) => cartItem.product.id !== id) })),
    clearCart: () => set({ cart: [] }),
    user: null,
    login: (user) => set({ user: { ...user, isLoggedIn: true } }),
    logout: () => set({ user: null, cart: [] })
}));

export default useAppStore;