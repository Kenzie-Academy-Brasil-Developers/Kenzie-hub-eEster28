import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { api } from "../services/api"

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    const submit = async (useData) => {
        try {
            const { data } = await api.post("/sessions", useData)
            localStorage.setItem("@TOKEN", data.token)
            setUser(data.user)
            navigate("/deshboard")
            toast.success("Login realizado com sucesso!")
        } catch (error) {
            console.error(error)
            toast.error("Opss! Algo deu errado!")
        }
    }

    const userRegister = async (useData) => {
        try {
            const { data } = await api.post("/users", useData)
            toast.success("Conta criada com sucesso!")
            navigate("/")
        } catch (error) {
            console.error(error)
            toast.error("Opss! Algo deu errado!")
        }
    }

    const logout = () => {
        localStorage.removeItem("@TOKEN")
        setUser(null)
        navigate("/")
    }

    return (
        <UserContext.Provider value={{ setUser, user,submit,userRegister,logout }}>
            {children}
        </UserContext.Provider>
    )
}