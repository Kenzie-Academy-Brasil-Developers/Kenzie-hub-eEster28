import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { loginFormSchema } from "./loginForm.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { InputPassword } from "../InputPassword"
import { Link } from "react-router-dom"
import Style from "./style.module.scss"
import { useContext } from "react"
import { UserContext } from "../../../providers/UserContext"

export const LoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(loginFormSchema) })

    const {submit} = useContext(UserContext)
   
    return (
        <div className="form_conteiner ">
            <h2 className="title">Login</h2>

            <form onSubmit={handleSubmit(submit)}>
                <Input
                    label="Email"
                    id="email"
                    type="email"
                    placeholder="Digite seu email"
                    error={errors.email}
                    {...register("email")}
                />

                <InputPassword
                    label="Senha"
                    id="password"
                    placeholder="Digite sua senha"
                    error={errors.password}
                    register={register("password")}
                />
                <button className="btn" type="submit">Entrar</button>
            </form>
            <span className={`headline bold ${Style.span}`}>Ainda não possui uma conta?</span>

            <Link to="/register"  className="link">
                <button className={`btn two ${Style.button}`}>Cadastre-se</button>
            </Link>
        </div>
    )
} 