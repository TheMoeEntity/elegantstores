import { createContext, useState } from "react";
import { ISBProducts } from "../../types";
import { UserProviderType, userContex, userSession } from "../../types";

const defaultState = {
    user: {
        userData: {},
        isSignedIn: false,
    },
    store: [],
    setUser: (user: userSession) => { },
    setStore: (store: ISBProducts[]) => { }
} as userContex
export const userContext = createContext(defaultState);


export const UserProvider = ({ children }: UserProviderType) => {
    const [user, setUser] = useState<userSession>({
        userData: {},
        isSignedIn: false
    })
    const [store, setStore] = useState<ISBProducts[]>([])

    return (
        <userContext.Provider value={{ user, setUser, store, setStore }}>
            {children}
        </userContext.Provider>
    )
}