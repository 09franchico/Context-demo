"use client"
import { useContext } from "react"
import { LoggedUserContext } from "../context/LoggedUser"

export const Header = () => {
    
    const loggeUserCtx = useContext(LoggedUserContext)


    const handleLogaout = () => {
        loggeUserCtx?.setName('')
    }

    return (
        <div className="bg-red-500 justify-between flex m-10 h-10 items-center rounded-lg">
            <h2 className="ml-5">Meu header SISTEMA</h2>

            {loggeUserCtx?.name &&
                <>
                    <h3>Ususario Logado :  {loggeUserCtx?.name}</h3>
                </>
            }
            {
                (!loggeUserCtx?.name || loggeUserCtx.name == null) &&
                <p>Usuario deslogado</p>
            }
            <button className="border-spacing-0 mr-5" onClick={handleLogaout}>Deslogar</button>
        </div>
    )
}