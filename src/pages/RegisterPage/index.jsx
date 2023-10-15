import { RegisterForm } from "../../components/Forms/RegisterForm"
import { HeaderRegister } from "../../components/Headers/HeaderRegister"

export const RegisterPage = () => {
    return (
        <>
            <HeaderRegister/>
            <main>
                <RegisterForm />
            </main>
        </>
    )
}