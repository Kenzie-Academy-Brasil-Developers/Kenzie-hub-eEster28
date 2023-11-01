import { useContext } from "react"
import Style from "./style.module.scss"
import { UserContext } from "../../../providers/UserContext"

export const UserSection = () => {
    const {user} = useContext(UserContext)

    return (
        <section className={Style.conteiner}>
            <div>
                <h2 className="title">Olá, {user?.name}</h2>
                <span className="headline bold"> {user?.course_module}</span>
            </div>
        </section>
    )
}