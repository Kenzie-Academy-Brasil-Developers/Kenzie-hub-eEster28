import { LoginForm } from "../../components/Forms/LoginForm"
import { HeaderLogin } from "../../components/Headers/HeaderLogin"
import Style from "./style.module.scss"

export const LoginPage = () => {
    return (
        <div className={Style.conteiner}>
            <HeaderLogin />
            <main>
                <LoginForm />
            </main>
        </div>
    )
}