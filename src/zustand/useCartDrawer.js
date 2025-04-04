import { create } from 'zustand';

const useCartDrawer = create((set) => ({
    isOpen: false,
    open: () => set({isOpen: true}),
    close: () => set({isOpen: false}),
}));

export default useCartDrawer;
