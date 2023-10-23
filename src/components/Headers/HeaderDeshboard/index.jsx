import Logo from "../../../assets/Logo.png"
import Style from "./style.module.scss"
import { useContext } from "react"
import { UserContext } from "../../../providers/UserContext"

export const HeaderDeshboard = () => {

    const {logout} = useContext(UserContext)

    return (
        <header className={Style.conteiner}>
            <div>
                <img src={Logo} alt="Logo Kezie Hub" />
                <button className="btn1" onClick={logout}>Sair</button>
            </div>
        </header>
    )
}