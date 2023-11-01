import { useContext } from "react"
import style from "./style.module.scss"
import { MdOutlineModeEditOutline } from "react-icons/md"
import { RiDeleteBin6Line } from "react-icons/ri"
import { TechContext } from "../../../../providers/TechContext"

export const TechCard = ({ tech }) => {
    const { deleteTechs, selectEditingTech } = useContext(TechContext)

    return (
        <li className={style.card}>
            <h2 className="title four">{tech.title}</h2>
            <div className={style.div_conteiner}>
                <div>
                    <span className="headline">{tech.status}</span>
                </div>
                <div>
                    <button className="btn_none" onClick={() => selectEditingTech(tech)}><MdOutlineModeEditOutline size={18} /></button>
                    <button className="btn_none" onClick={() => deleteTechs(tech.id)}><RiDeleteBin6Line size={18} /></button>
                </div>

            </div>
        </li>
    )
}