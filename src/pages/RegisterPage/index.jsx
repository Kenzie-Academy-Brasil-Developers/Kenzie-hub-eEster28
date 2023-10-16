import { RegisterForm } from "../../components/Forms/RegisterForm"
import { HeaderRegister } from "../../components/Headers/HeaderRegister"
import Style from "./style.module.scss"

export const RegisterPage = () => {
    return (
        <div className={Style.conteiner}>
            <HeaderRegister/>
            <main>
                <RegisterForm />
            </main>
        </div>
    )
}