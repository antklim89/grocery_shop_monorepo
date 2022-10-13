import { useEffect, createContext, useContext, useMemo, ReactNode } from 'react';

import AuthStore from '~/store/AuthStore';


export const Context = createContext<AuthStore>({} as AuthStore);

const AuthProvider = ({ children }: { children: ReactNode}): JSX.Element => {
    const auth = useMemo(() => new AuthStore(), []);

    useEffect(() => {
        auth.fetchMe();
    }, []);

    return (
        <Context.Provider value={auth}>
            {children}
        </Context.Provider>
    );
};

export const useAuth = (): AuthStore => useContext(Context);

export default AuthProvider;
