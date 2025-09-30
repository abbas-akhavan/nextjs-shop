import { fetchFromSupabase } from '@/lib/helpers/supabase-ssr';
import { AppState, CartItem } from '@/types/AppStateTypes';
import { supabase } from '@/utils/supabaseClient';
import toast from 'react-hot-toast';
import { create } from 'zustand';

const useAppStore = create<AppState>((set) => ({
    cart: [],
    addToCart: async (productToAdd) => {
        const { data: cartId } = await supabase.rpc('get_or_create_active_cart');
        const { data, error } = await supabase.rpc('add_item_to_cart', {
            _cart_id: cartId,
            _product_id: productToAdd.id,
            _qty: 1
        });
        if (error) {
            toast.error(error.message)
        }

        set((state) => {
            const existing = state.cart.find((cartItem) => cartItem.product.id === productToAdd.id);
            if (existing) {
                return {
                    cart: state.cart.map((cartItem) =>
                        cartItem.product.id === productToAdd.id ? { ...cartItem, quantity: (cartItem.quantity + 1) } : cartItem
                    )
                }
            }
            return { cart: [...state.cart, { product: productToAdd, quantity: 1 }] }
        })
    },
    removeFromCart: (id) => set((state) => ({ cart: state.cart.filter((cartItem) => cartItem.product.id !== id) })),
    clearCart: () => set({ cart: [] }),
    user: null,
    login: async (user) => {
        //set ser
        set({ user: { ...user, isLoggedIn: true } })

        //get user cart
        const { data: cartId } = await supabase.rpc('get_or_create_active_cart');
        const cartItems: CartItem[] = await fetchFromSupabase('cart_items', {
            select: `quantity,product:products(*)`,
            filters: {
                'cart_id': `eq.${cartId}`
            },
            userToken: user.token
        })
        console.log(cartItems)
        set({
            cart: cartItems?.map((row) => ({
                product: row.product,
                quantity: row.quantity
            })) || []
        });


    },
    logout: () => set({ user: null, cart: [] })
}));

export default useAppStore;