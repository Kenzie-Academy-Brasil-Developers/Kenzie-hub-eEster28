import { useNavigate } from "react-router-dom"
import Logo from "../../../assets/deshboardLogo.png"

export const HeaderDeshboard = ({setUser}) => {
    const navigate= useNavigate()

    const logout = () => {
        localStorage.removeItem("@TOKEN")
        setUser(null)
        navigate("/")
    }

    return(
        <header>
            <img src={Logo} alt="Logo Kezie Hub" />
            <button onClick={logout}>Sair</button>
        </header>
    )
}