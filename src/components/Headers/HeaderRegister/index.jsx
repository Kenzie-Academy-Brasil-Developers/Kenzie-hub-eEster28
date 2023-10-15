import { useNavigate } from "react-router-dom"
import Logo from "../../../assets/registerLogo.png"

export const HeaderRegister = () => {
    const navigate = useNavigate()

    return(
        <header>
            <img src={Logo} alt="Logo Kezie Hub" />
            <button onClick={()=>navigate("/")}>Voltar</button>
        </header>
    )
}