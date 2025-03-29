import { useState, createContext } from "react"

export const LoginLogoutContext = createContext()

export const LoginLogoutProvider = ( {children} ) => {

    const [ login, setLogin] = useState(false)

    const Login = () => {
        setLogin(true)
    }

    const Logout = () => {
        setLogin(false)
        confirm("You LoggedOut Successfully")
    }
    return(
        <LoginLogoutContext.Provider  value={{ login, Login, Logout}}>
            {children}
        </LoginLogoutContext.Provider>
    )
}