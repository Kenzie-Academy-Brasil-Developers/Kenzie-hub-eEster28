import { useContext } from "react";
import Style from "./style.module.scss"
import { MdAdd } from "react-icons/md";
import { TechContext } from "../../../providers/TechContext";


export const AddTechSection = () => {
    const {setVisibleAdd} = useContext(TechContext)
    return (
        <section className={Style.conteiner} >
            <div>
                <h2 className="title three">Tecnologias</h2>
                <button className="btn_icon" onClick={()=> setVisibleAdd(true)}>
                    <MdAdd size={18}/>
                </button>
            </div>
        </section>
    )
}