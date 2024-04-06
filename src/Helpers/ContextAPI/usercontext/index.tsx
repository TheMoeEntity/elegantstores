import { createContext, useState } from "react";
import { UserProviderType, userContex, userSession } from "../../types";

const defaultState = {
    user: {
        userData: {},
        isSignedIn: false
    },
    setUser: (user: userSession) => { }
} as userContex
export const userContext = createContext(defaultState);


export const UserProvider = ({children}: UserProviderType) => {
    const [user, setUser] = useState<userSession>({
        userData: {},
        isSignedIn: false
    })

    return (
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    )
}