import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { api } from "../services/api"

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [techUser, setTechUser] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")
        const getUser = async () => {
            try {
                setLoading(true)
                const { data } = await api.get("/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setUser(data)
                setTechUser(data.techs)
                navigate("/deshboard")
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }
        getUser()
    }, [])

    const submit = async (useData) => {
        try {
            setLoading(true)
            const { data } = await api.post("/sessions", useData)
            localStorage.setItem("@TOKEN", data.token)
            setUser(data.user)
            setTechUser(data.user.techs)
            navigate("/deshboard")
            toast.success("Login realizado com sucesso!")
        } catch (error) {
            console.error(error)
            toast.error("Opss! Algo deu errado!")
        } finally {
            setLoading(false)
        }
    }

    const userRegister = async (useData) => {
        try {
            setLoading(true)
            const { data } = await api.post("/users", useData)
            toast.success("Conta criada com sucesso!")
            navigate("/")
        } catch (error) {
            console.error(error)
            toast.error("Opss! Algo deu errado!")
        } finally {
            setLoading(false)
        }
    }

    const logout = () => {
        localStorage.removeItem("@TOKEN")
        setUser(null)
        navigate("/")
    }

    return (
        <UserContext.Provider value={{ loading, setUser, user, submit, userRegister, logout, techUser, setTechUser }}>
            {children}
        </UserContext.Provider>
    )
}