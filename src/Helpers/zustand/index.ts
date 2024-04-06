import { create } from 'zustand'
import { ISBProducts, IStore, cartItem } from '../types'


export const useStore = create<IStore>((set,get) => ({
    cart: [],
    cartCount: 0,
    removeFromCart(id) {
        const { cart } = get();
        const updatedCart = removeCart(id, cart);
        set({ cart: updatedCart });
    },
    addToCart(item) {
        const { cart } = get();
        const updatedCart = updateCart(item, cart)
        set({ cart: updatedCart });

    },

}))

const updateCart = (product: ISBProducts, cart: cartItem[]): cartItem[]  => {
    const cartItem = { item: product, quantity: 1 } as cartItem;

    const productOnCart = cart.map(item => item.item.id).includes(product.id);

    if (!productOnCart) cart.push(cartItem)
    else {
        return cart.map(item => {
            if (item.item.id === product.id)
                return { item:item.item, quantity: item.quantity + 1 } as cartItem;
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