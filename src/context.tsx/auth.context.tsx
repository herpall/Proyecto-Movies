import React, { createContext, useState } from "react";

type contextProps = {
    auth: boolean,
    setAuth: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext = createContext<contextProps | null>(null)

export const AuthContextProvider = ({children}: any) => {

    const [auth, setAuth] = useState(false)

    return(
        <AuthContext.Provider value={{
            auth,
            setAuth,
        }}> 
        {children}
        </AuthContext.Provider>
    )
}