import { LoginForm } from "../../components/Forms/LoginForm"
import { HeaderLogin } from "../../components/Headers/HeaderLogin"

export const LoginPage = ({setUser}) => {
    return (
        <>
            <HeaderLogin/>
            <main>
                <LoginForm setUser={setUser} />
            </main>
        </>
    )
}