import { useNavigate } from "react-router-dom"
import Logo from "../../../assets/Logo.png"
import Style from "./style.module.scss"

export const HeaderDeshboard = ({ setUser }) => {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("@TOKEN")
        setUser(null)
        navigate("/")
    }

    return (
        <header className={Style.conteiner}>
            <div>
                <img src={Logo} alt="Logo Kezie Hub" />
                <button className="btn1" onClick={logout}>Sair</button>
            </div>
        </header>
    )
}