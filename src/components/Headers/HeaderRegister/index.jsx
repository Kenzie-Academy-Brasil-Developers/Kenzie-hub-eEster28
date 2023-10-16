import { useNavigate } from "react-router-dom"
import Logo from "../../../assets/registerLogo.png"
import Style from "./style.module.scss"

export const HeaderRegister = () => {
    const navigate = useNavigate()

    return(
        <header className={Style.conteiner}>
            <div>
            <img src={Logo} alt="Logo Kezie Hub" />
            <button className="btn1" onClick={()=>navigate("/")}>Voltar</button>

            </div>
        </header>
    )
}