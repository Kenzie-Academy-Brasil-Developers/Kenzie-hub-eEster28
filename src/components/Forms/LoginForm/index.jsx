import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { loginFormSchema } from "./loginForm.schema"
import { zodResolver } from "@hookform/resolvers/zod";
import { InputPassword } from "../InputPassword";

export const LoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(loginFormSchema) })

    const submit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(submit)}>
                <Input
                    label="Email"
                    id="email"
                    type="email"
                    error={errors.email}
                    {...register("email")}
                />
    
                <InputPassword
                    label="Senha"
                    id="password"
                    error={errors.password}
                    register={register("password")}
                />
                <button type="submit">Entrar</button>
            </form>
            <span>Ainda não possui uma conta?</span>
            <button>Cadastre-se</button>
        </div>
    )
} 