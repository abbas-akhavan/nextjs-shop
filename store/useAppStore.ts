import { fetchFromSupabase } from '@/utils/supabase-ssr';
import { AppState, CartItem } from '@/types/AppStateTypes';
import { supabase } from '@/utils/supabaseClient';
import toast from 'react-hot-toast';
import { create } from 'zustand';
import { persist } from "zustand/middleware";


const useAppStore = create<AppState>()(persist(
    (set) => ({
        cart: {
            cartItems: [],
            loading: true
        },
        addToCart: async (productToAdd) => {
            set(state => ({
                cart: { ...state.cart, loading: true }
            }))

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
                const existing = state.cart.cartItems.find((cartItem) => cartItem.product.id === productToAdd.id);
                if (existing) {
                    return {
                        cart: {
                            cartItems: state.cart.cartItems.map((cartItem) =>
                                cartItem.product.id === productToAdd.id ? { ...cartItem, quantity: (cartItem.quantity + 1) } : cartItem
                            ),
                            loading: false
                        }
                    }
                }
                return {
                    cart: {
                        cartItems: [...state.cart.cartItems, { product: productToAdd, quantity: 1 }],
                        loading: false
                    }
                }
            })
        },
        removeFromCart: async (id) => {
            set(state => ({
                cart: { ...state.cart, loading: true }
            }))
            const { data: cartId } = await supabase.rpc('get_or_create_active_cart');
            const { data, error } = await supabase
                .rpc('remove_item_from_cart', { _cart_id: cartId, _product_id: id, _qty: 1 });

            if (error) {
                toast.error(error.message)
                set(state => ({
                    cart: { ...state.cart, loading: false }
                }))
                return
            }

            set((state) => {
                const product = state.cart.cartItems.find(cartItem => cartItem.product.id === id);
                const quantity = product?.quantity;
                if (quantity === 1) {
                    return {
                        cart: {
                            cartItems: state.cart.cartItems.filter((cartItem) => cartItem.product.id !== id),
                            loading: false
                        }
                    }
                }

                return {
                    cart: {
                        cartItems: state.cart.cartItems.map((cartItem) => (
                            cartItem.product.id === id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
                        )),
                        loading: false
                    }
                }
            })
        },
        clearCart: () => set({
            cart: {
                cartItems: [],
                loading: false
            }
        }),
        user: {
            isLoading: true,
            userInfo: null
        },
        login: async (user) => {
            //set ser
            set({ user: { isLoading: false, userInfo: { ...user, isLoggedIn: true } } })

            //get user cart
            const { data: cartId } = await supabase.rpc('get_or_create_active_cart');
            const cartItems: CartItem[] = await fetchFromSupabase('cart_items', {
                select: `quantity,product:products(*)`,
                filters: {
                    'cart_id': `eq.${cartId}`
                },
                userToken: user.token
            })
            set({
                cart: {
                    cartItems: cartItems?.map((row) => ({
                        product: row.product,
                        quantity: row.quantity
                    })) || [],
                    loading: false
                }
            });
        },
        logout: () => set({
            user: {
                isLoading: false,
                userInfo: null
            },
            cart: {
                cartItems: [],
                loading: false
            }
        }),
        overlay: false,
        setOverlay: (value) => set({ overlay: value }),
        searchHistory: [],
        addSearchHistory: (item) => set(state => {
            return {
                searchHistory: [item, ...state.searchHistory]
            }
        }),
        clearSearchHistory: () => set({ searchHistory: [] })
    }),
    { name: 'app-storage' }
));

export default useAppStore;