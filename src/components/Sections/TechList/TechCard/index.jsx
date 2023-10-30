import { useContext } from "react"
import style from "./style.module.scss"
import { MdOutlineModeEditOutline, MdDelete } from "react-icons/md"
import { TechContext } from "../../../../providers/TechContext"

export const TechCard = ({ tech }) => {
    const {deleteTechs, selectEditingTech} = useContext(TechContext)
    
    return (
        <li className={style.card}>
            <h2 className="title four">{tech.title}</h2>
            <div className={style.div_conteiner}>
                <span className="headline">{tech.status}</span>
                <div>
                    <button className="btn_none" onClick={() => selectEditingTech(tech)}><MdOutlineModeEditOutline size={16} /></button>
                    <button className="btn_none" onClick={()=> deleteTechs(tech.id)}><MdDelete size={16} /></button>
                </div>
            </div>
        </li>
    )
}