import { Link, useNavigate } from "react-router-dom"
import Logo from "../../../assets/Logo.png"
import Style from "./style.module.scss"

export const HeaderRegister = () => {
    const navigate = useNavigate()

    return (
        <header className={Style.conteiner}>
            <div>
                <img src={Logo} alt="Logo Kezie Hub" />
                <Link to="/">
                    <button className="btn1">Voltar</button>
                </Link>
            </div>
        </header>
    )
}