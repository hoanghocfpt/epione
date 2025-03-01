import create from 'zustand';

const useCartStore = create((set) => ({
    cart: [],
    // add to cart, if item already exists, increase quantity, check by variant id
    addToCart: (item) => set((state) => {
        const cart = [...state.cart];
        const index = cart.findIndex(i => i.variant.id === item.variant.id);
        if(index !== -1){
            cart[index].quantity += item.quantity;
        }else{
            cart.push(item);
        }
        return {cart};
    }),
    // remove from cart
    removeFromCart: (id) => set((state) => {
        const cart = state.cart.filter(i => i.variant.id !== id);
        return {cart};
    }),
    // update quantity
    updateQuantity: (id, quantity) => set((state) => {
        const cart = state.cart.map(i => {
            if(i.variant.id === id){
                i.quantity = quantity;
            }
            return i;
        });
        return {cart};
    }),
    // clear cart
    clearCart: () => set({cart: []})
}));

export default useCartStore;