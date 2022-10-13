import { reaction } from 'mobx';
import { createContext, ReactNode, useContext, useEffect, useMemo } from 'react';

import { CartStore } from '~/store/CartStore';
import { setCartStorage } from '~/utils';


export const Context = createContext({} as CartStore);


const CartProvider = ({ children }: { children: ReactNode[]}): JSX.Element => {
    const cart = useMemo(() => new CartStore(), []);

    useEffect(() => {
        cart.init();
    }, []);

    useEffect(() => reaction(
        () => JSON.stringify(cart.cartItems),
        () => setCartStorage(cart.cartItems),
    ), []);


    return (
        <Context.Provider value={cart}>
            {children}
        </Context.Provider>
    );
};

export default CartProvider;

export const useCart = (): CartStore => useContext(Context);
