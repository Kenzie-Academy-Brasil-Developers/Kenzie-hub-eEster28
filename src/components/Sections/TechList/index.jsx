import { UserContext } from "../../../providers/UserContext"
import { useContext } from "react"
import { TechCard } from "./TechCard"
import style from "./style.module.scss"

export const TechList = () => {
    const { techUser } = useContext(UserContext)

    return (
        <section className={style.conteiner}>
            <ul>
                {techUser.map(tech => <TechCard tech={tech} key={crypto.randomUUID()} />)}
            </ul>
        </section>
    )
}
