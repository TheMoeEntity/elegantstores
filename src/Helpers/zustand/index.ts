import { create } from 'zustand'
import { ISBProducts, IStore, cartItem } from '../types'


export const useStore = create<IStore>((set, get) => ({
    cart: [],
    cartTotalPrice: 0,
    cartCount: 0,
    removeFromCart(id) {
        const { cart } = get();
        const updatedCart = removeCart(id, cart);
        const updatedTotal = calculateTotal(cart)
        set({ cart: updatedCart, cartCount: cart.length, cartTotalPrice:updatedTotal });
    },
    addToCart(item, quantity) {
        const { cart } = get();
        const updatedCart = updateCart(item, cart, quantity)
        const updatedTotal = calculateTotal(cart)
        set({ cart: updatedCart, cartCount: cart.length, cartTotalPrice: updatedTotal });
    },

}))
const calculateTotal = (cart: cartItem[]) => {
    const cartFiltered = cart.map(x => x.item.price * x.quantity)
    const tot = cartFiltered.reduce((a, b) => a + b)
    return tot
}
const updateCart = (product: ISBProducts, cart: cartItem[], quantity: number): cartItem[] => {
    const cartItem = { item: product, quantity } as cartItem;
    const productOnCart = cart.map(item => item.item.id).includes(product.id);

    if (!productOnCart) cart.push(cartItem)
    else {
        return cart.map(item => {
            if (item.item.id === product.id)
                return { item: item.item, quantity: item.quantity + quantity } as cartItem;
            return item
        })
    }

    return cart;
}

function removeCart(idProduct: string, cart: cartItem[]): cartItem[] {
    return cart.map(item => {
        if (item.item.id === idProduct)
            return { item: item.item, quantity: item.quantity - 1 }
        return item;
    }).filter(item => {
        return item.quantity;
    });
}