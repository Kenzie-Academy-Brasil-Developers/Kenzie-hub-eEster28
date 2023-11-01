import { createContext, useContext, useState } from "react"
import { api } from "../services/api"
import { UserContext } from "./UserContext"
import { toast } from "react-toastify"

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {
    const { techUser, setTechUser } = useContext(UserContext)
    const [visibleAdd, setVisibleAdd] = useState(false)
    const [visibleEditing, setVisibleEditing] = useState(false)
    const [editingTech, setEditingTech] = useState(null)


    const createTech = async (formData) => {
        try {
            const token = localStorage.getItem("@TOKEN")

            const newTech = {
                title: formData.title,
                status: formData.status,
            }

            const { data } = await api.post("/users/techs", newTech, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })

            setTechUser([...techUser, data])
            setVisibleAdd(false)

        } catch (error) {
            console.error(error)
        }
    }

    const deleteTechs = async (deleteId) => {
        try {
            const token = localStorage.getItem("@TOKEN")

            await api.delete(`/users/techs/${deleteId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const newTechList = techUser.filter(tech => tech.id !== deleteId)

            setTechUser(newTechList)
            toast.success("Exclusão realizada com sucesso!")
        } catch (error) {
            console.error(error)
            toast.error("Opss! Algo deu errado!")
        }
    }

    const editTechs = async (formData) => {
        try {
            const token = localStorage.getItem("@TOKEN")
            const { data } = await api.put(`/users/techs/${editingTech.id} `, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            const newTechList = techUser.map(tech => {
                if (tech.id === editingTech.id) {
                    return data
                } else {
                    return tech
                }
            })

            setTechUser(newTechList)
            setEditingTech(null)
            setVisibleEditing(null)
            toast.success("Tecnologia atualizado com sucesso!")

        } catch (error) {
            console.error(error)
        }
    }

    const selectEditingTech = (tech) => {
        setEditingTech(tech)
        setVisibleEditing(true)
    }

    return (
        <TechContext.Provider value={{ createTech, visibleAdd, setVisibleAdd, deleteTechs, visibleEditing, setVisibleEditing, selectEditingTech,editTechs, editingTech }}>
            {children}
        </TechContext.Provider>
    )
}