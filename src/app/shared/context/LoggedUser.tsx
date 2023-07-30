
import { ReactNode, createContext, useState } from "react";


type LoggedUserContextType = {
    name:string,
    setName:(n:string) => void
}

export const LoggedUserContext = createContext<LoggedUserContextType | null>(null)

type TProvider = {
    children : ReactNode
}

export const LoggedUserProvider = ({children}:TProvider) =>{

    const [name, setName ] = useState("Flavica Piementel");

    return(
        <LoggedUserContext.Provider value={{name , setName}} >
            {children}
        </LoggedUserContext.Provider>
    )

}